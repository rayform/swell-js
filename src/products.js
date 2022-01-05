const {
  get,
  reduce,
  find,
  uniq,
  defaultMethods,
  toSnake,
  toCamel,
  isEqual,
  snakeCase,
} = require('./utils');
const cache = require('./cache');
const attributesApi = require('./attributes');

let OPTIONS;

function methods(request, opt) {
  OPTIONS = opt;
  const { get, list } = defaultMethods(request, '/products', ['list', 'get']);
  return {
    get: (id, ...args) => {
      return cache.getFetch('products', id, () => get(id, ...args));
    },

    list,

    variation: calculateVariation,

    categories: getCategories,

    attributes: getAttributes,

    priceRange: getPriceRange,

    filters: getFilters,

    filterableAttributeFilters: (products, options) =>
      getFilterableAttributeFilters(request, products, options),
  };
}

function getProductOptionIndex(product, filter = undefined) {
  if (!product.options) {
    return {};
  }
  const productOptions = filter ? product.options.filter(filter) : product.options;
  return reduce(
    productOptions,
    (acc, op) => {
      const values = reduce(
        op.values,
        (acc, val) => ({
          ...acc,
          [val.id]: { ...val, id: val.id },
          [val.name]: { ...val, id: val.id },
        }),
        {},
      );
      return {
        ...acc,
        [op.id]: { ...op, values },
        [op.name]: { ...op, values },
      };
    },
    {},
  );
}

function cleanProductOptions(options) {
  let result = options || [];
  if (options && typeof options === 'object' && !(options instanceof Array)) {
    result = [];
    for (const key in options) {
      result.push({
        id: key,
        value: options[key],
      });
    }
  }
  if (result instanceof Array) {
    return result.map((op) => ({
      id: op.id || op.name,
      value: op.value,
    }));
  }
  return result;
}

function getVariantOptionValueIds(product, options) {
  const cleanOptions = cleanProductOptions(options);
  const index = getProductOptionIndex(product, (op) => op.variant);
  const optionValueIds = [];
  for (const option of cleanOptions) {
    if (index[option.id] && index[option.id].values[option.value]) {
      optionValueIds.push(index[option.id].values[option.value].id);
    }
  }
  return optionValueIds;
}

function findVariantWithOptionValueIds(product, ids) {
  if (ids.length > 0) {
    const variants = product.variants && product.variants.results;
    if (variants.length > 0) {
      for (const variant of variants) {
        const variantObj = toSnake(variant);
        const matched = isEqual(variantObj.option_value_ids.sort(), ids.sort());
        if (matched) {
          return variant;
        }
      }
    }
  }
  return null;
}

function findVariantWithOptions(product, options) {
  const optionValueIds = getVariantOptionValueIds(product, options);
  return findVariantWithOptionValueIds(product, optionValueIds);
}

function calculateVariation(input, options, purchaseOption, quantity = 1, customer = null) {
  const product = OPTIONS.useCamelCase ? toSnake(input) : input;
  const purchaseOp = findPurchaseOption(product, purchaseOption, quantity, customer);
  const variation = {
    ...product,
    price: purchaseOp.price || 0,
    sale_price: purchaseOp.sale_price,
    orig_price: purchaseOp.orig_price,
    stock_status: product.stock_status,
  };
  let optionPrice = 0;
  const variantOptionValueIds = [];
  const cleanOptions = cleanProductOptions(options);
  const index = getProductOptionIndex(product);
  for (const option of cleanOptions) {
    if (index[option.id] && index[option.id].values[option.value]) {
      if (index[option.id].variant) {
        variantOptionValueIds.push(index[option.id].values[option.value].id);
      } else {
        optionPrice += index[option.id].values[option.value].price || 0;
      }
    }
  }
  if (variantOptionValueIds.length > 0) {
    const variant = findVariantWithOptionValueIds(product, variantOptionValueIds);
    if (variant) {
      let variantPurchaseOp = purchaseOp;
      try {
        variantPurchaseOp = findPurchaseOption(variant, purchaseOption, quantity, customer);
      } catch (err) {
        // noop
      }
      variation.variant_id = variant.id;
      variation.price = variantPurchaseOp.price || 0;
      variation.sale_price = variantPurchaseOp.sale_price || purchaseOp.sale_price;
      variation.orig_price = variantPurchaseOp.orig_price || purchaseOp.orig_price;
      variation.stock_status = variant.stock_status;
      variation.stock_level = variant.stock_level || 0;
      variation.images =
        (variant.images && variant.images.length ? variant.images : product.images) || [];
    }
  }
  if (optionPrice > 0) {
    variation.price += optionPrice;
    if (variation.sale_price) {
      variation.sale_price += optionPrice;
    }
    if (variation.orig_price) {
      variation.orig_price += optionPrice;
    }
  }
  if (variation.sale_price === undefined) {
    delete variation.sale_price;
  }
  if (variation.orig_price === undefined) {
    delete variation.orig_price;
  }
  return OPTIONS.useCamelCase ? toCamel(variation) : variation;
}

function findPriceRule(prices, quantity = 1, group = null) {
  if (!prices || !prices.length || typeof quantity !== 'number') return;

  let match = prices.filter((price) => {
    const { quantity_min, quantity_max } = price;
    if (quantity_min && !quantity_max) return quantity >= quantity_min;
    if (quantity_max && !quantity_min) return quantity <= quantity_max;
    if (quantity_max && quantity_min) return quantity <= quantity_max && quantity >= quantity_min;
    return false;
  });

  match = group ? match.filter((price) => price.group === group || !price.group) : match;

  if (!match || !match.length) return;

  if (match.length > 1) {
    const lowestMatched = match.reduce((prevPrice, price) =>
      prevPrice.price > price.price ? price : prevPrice,
    );
    
    return lowestMatched.price;
  } else if (match.length === 1) {
    return match[0].price;
  }
}

function findPurchaseOption(product, purchaseOption, quantity, customer) {
  const plan = get(purchaseOption, 'plan_id', get(purchaseOption, 'plan'));
  const type = get(
    purchaseOption,
    'type',
    typeof purchaseOption === 'string'
      ? purchaseOption
      : plan !== undefined
      ? 'subscription'
      : 'standard',
  );
  let option = get(product, `purchase_options.${type}`);
  if (!option && type !== 'standard') {
    throw new Error(`Product purchase option '${type}' not found or not active`);
  }

  let price = product.price;
  let sale_price = product.sale_price;
  let orig_price = product.orig_price;

  if (option) {
    if (option.plans) {
      if (plan !== undefined) {
        option = find(option.plans, { id: plan });
        if (!option) {
          throw new Error(`Subscription purchase plan '${plan}' not found or not active`);
        }
        price = option.price;
      } else {
        option = option.plans[0];
        price = option.price;
      }
      orig_price = option.orig_price || option.price;
    } else {
      const group = customer ? customer.group : null;
      const priceRule = findPriceRule(product.prices, quantity, group);

      if (priceRule) {
        price = priceRule;
        orig_price = option.orig_price || product.price;
      } else {
        price = option.price || product.price;
        orig_price = option.orig_price || product.orig_price;
      }
    }

    sale_price = option.sale_price || product.orig_price;

    return {
      ...option,
      price,
      sale_price,
      orig_price,
    };
  }
  return {
    type: 'standard',
    price,
    sale_price,
    orig_price,
  };
}

async function getFilterableAttributeFilters(request, products, options) {
  const { results: filterableAttributes } = await attributesApi.methods(request, OPTIONS).list({
    filterable: true,
  });

  return getFilters(products, { ...options, filterableAttributes });
}

function getFilters(products, options = {}) {
  let attributes =
    (options.attributes || options.attributes === undefined) && getAttributes(products);

  if (options.filterableAttributes) {
    attributes = attributes.filter((productAttr) =>
      options.filterableAttributes.find((filterableAttr) => productAttr.id === filterableAttr.id),
    );
  }

  const categories =
    (options.categories || options.categories === undefined) && getCategories(products);
  const priceRange = (options.price || options.price === undefined) && getPriceRange(products);

  let filters = [];

  if (priceRange) {
    filters.push({
      id: 'price',
      label: 'Price',
      type: 'range',
      options: [
        {
          value: priceRange.min,
          label: priceRange.min, // TODO: formatting
        },
        {
          value: priceRange.max,
          label: priceRange.max, // TODO: formatting
        },
      ],
      interval: priceRange.interval,
    });
  }

  if (categories && categories.length > 0) {
    filters.push({
      id: 'category',
      label: 'Category',
      type: 'select',
      options: categories.map((category) => ({
        value: category.slug,
        label: category.name,
      })),
    });
  }

  if (attributes && attributes.length > 0) {
    filters = [
      ...filters,
      ...reduce(
        attributes,
        (acc, attr) => [
          ...acc,
          ...(attr.id !== 'category' &&
          attr.id !== 'price' &&
          attr.values instanceof Array &&
          attr.values.length > 0
            ? [
                {
                  id: attr.id,
                  label: attr.name,
                  type: 'select',
                  options: attr.values.map((value) => ({
                    value,
                    label: value,
                  })),
                },
              ]
            : []),
        ],
        [],
      ),
    ];
  }

  return filters;
}

function getCategories(products) {
  const categories = [];
  const collection = (products && products.results) || (products.id ? [products] : products);
  if (collection instanceof Array) {
    for (let product of collection) {
      if (product.categories) {
        for (let category of product.categories) {
          if (!category) continue;
          let ex = find(categories, { id: category.id });
          if (!ex) {
            categories.push(category);
          }
        }
      }
    }
  }
  return categories;
}

function getAttributes(products) {
  const attributes = [];
  const collection = (products && products.results) || (products.id ? [products] : products);
  if (collection instanceof Array) {
    for (let product of collection) {
      if (product.attributes) {
        for (let id in product.attributes) {
          if (!product.attributes[id]) continue;
          const value = product.attributes[id].value;
          let attr = find(attributes, { id: snakeCase(id) });
          if (attr) {
            attr.values = uniq([...attr.values, ...(value instanceof Array ? value : [value])]);
          } else {
            attributes.push({
              ...product.attributes[id],
              value: undefined,
              values: [...(value instanceof Array ? value : [value])],
            });
          }
        }
      }
    }
  }
  return attributes;
}

function getPriceRange(products) {
  let min;
  let max;
  let interval;
  const collection = (products && products.results) || (products.id ? [products] : products);
  if (collection instanceof Array) {
    for (let product of collection) {
      if (max === undefined || product.price > max) {
        max = Math.ceil(product.price);
      }
      if (min === undefined || product.price < min) {
        min = Math.floor(product.price);
      }
    }
  }
  if (min === max) {
    return null;
  }
  interval = Math.ceil((max - min) / 10) || 1;
  if (interval > 1000) {
    interval = 1000;
  } else if (interval > 100) {
    interval = 100;
  } else if (interval > 10) {
    interval = 10;
  }
  if (max % interval > 0) {
    max = interval + max - (max % interval);
  }
  if (min % interval > 0) {
    min = min - (min % interval);
  }
  while (((max - min) / interval) % 1 > 0) {
    max++;
  }
  return {
    min,
    max,
    interval,
  };
}

module.exports = {
  methods,
  cleanProductOptions,
  getProductOptionIndex,
  getVariantOptionValueIds,
  findVariantWithOptions,
  calculateVariation,
};
