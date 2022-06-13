"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof3(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var _require = require('./utils'),
    get = _require.get,
    reduce = _require.reduce,
    find = _require.find,
    uniq = _require.uniq,
    defaultMethods = _require.defaultMethods,
    toSnake = _require.toSnake,
    toCamel = _require.toCamel,
    isEqual = _require.isEqual,
    snakeCase = _require.snakeCase;

var cache = require('./cache');

var attributesApi = require('./attributes');

var OPTIONS;

function methods(request, opt) {
  OPTIONS = opt;

  var _defaultMethods = defaultMethods(request, '/products', ['list', 'get']),
      _get = _defaultMethods.get,
      list = _defaultMethods.list;

  return {
    get: function get(id) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return cache.getFetch('products', id, function () {
        return _get.apply(void 0, [id].concat(args));
      });
    },
    list: list,
    variation: calculateVariation,
    categories: getCategories,
    attributes: getAttributes,
    priceRange: getPriceRange,
    filters: getFilters,
    filterableAttributeFilters: function filterableAttributeFilters(products, options) {
      return getFilterableAttributeFilters(request, products, options);
    }
  };
}

function getProductOptionIndex(product) {
  var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

  if (!product.options) {
    return {};
  }

  var productOptions = filter ? product.options.filter(filter) : product.options;
  return reduce(productOptions, function (acc, op) {
    var _objectSpread3;

    var values = reduce(op.values, function (acc, val) {
      var _objectSpread2;

      return _objectSpread(_objectSpread({}, acc), {}, (_objectSpread2 = {}, (0, _defineProperty2["default"])(_objectSpread2, val.id, _objectSpread(_objectSpread({}, val), {}, {
        id: val.id
      })), (0, _defineProperty2["default"])(_objectSpread2, val.name, _objectSpread(_objectSpread({}, val), {}, {
        id: val.id
      })), _objectSpread2));
    }, {});
    return _objectSpread(_objectSpread({}, acc), {}, (_objectSpread3 = {}, (0, _defineProperty2["default"])(_objectSpread3, op.id, _objectSpread(_objectSpread({}, op), {}, {
      values: values
    })), (0, _defineProperty2["default"])(_objectSpread3, op.name, _objectSpread(_objectSpread({}, op), {}, {
      values: values
    })), _objectSpread3));
  }, {});
}

function cleanProductOptions(options) {
  var result = options || [];

  if (options && (0, _typeof2["default"])(options) === 'object' && !(options instanceof Array)) {
    result = [];

    for (var key in options) {
      result.push({
        id: key,
        value: options[key]
      });
    }
  }

  if (result instanceof Array) {
    return result.map(function (op) {
      return {
        id: op.id || op.name,
        value: op.value
      };
    });
  }

  return result;
}

function getVariantOptionValueIds(product, options) {
  var cleanOptions = cleanProductOptions(options);
  var index = getProductOptionIndex(product, function (op) {
    return op.variant;
  });
  var optionValueIds = [];

  var _iterator = _createForOfIteratorHelper(cleanOptions),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var option = _step.value;

      if (index[option.id] && index[option.id].values[option.value]) {
        optionValueIds.push(index[option.id].values[option.value].id);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return optionValueIds;
}

function findVariantWithOptionValueIds(product, ids) {
  if (ids.length > 0) {
    var variants = product.variants && product.variants.results;

    if (variants.length > 0) {
      var _iterator2 = _createForOfIteratorHelper(variants),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var variant = _step2.value;
          var variantObj = toSnake(variant);
          var matched = isEqual(variantObj.option_value_ids.sort(), ids.sort());

          if (matched) {
            return variant;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }

  return null;
}

function findVariantWithOptions(product, options) {
  var optionValueIds = getVariantOptionValueIds(product, options);
  return findVariantWithOptionValueIds(product, optionValueIds);
}

function calculateVariation(input, options, purchaseOption) {
  var quantity = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  var customer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  var product = OPTIONS.useCamelCase ? toSnake(input) : input;
  var purchaseOp = findPurchaseOption(product, purchaseOption, quantity, customer);

  var variation = _objectSpread(_objectSpread({}, product), {}, {
    price: purchaseOp.price || 0,
    sale_price: purchaseOp.sale_price,
    orig_price: purchaseOp.orig_price,
    stock_status: product.stock_status
  });

  var optionPrice = 0;
  var variantOptionValueIds = [];
  var cleanOptions = cleanProductOptions(options);
  var index = getProductOptionIndex(product);

  var _iterator3 = _createForOfIteratorHelper(cleanOptions),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var option = _step3.value;

      if (index[option.id] && index[option.id].values[option.value]) {
        if (index[option.id].variant) {
          variantOptionValueIds.push(index[option.id].values[option.value].id);
        } else {
          optionPrice += index[option.id].values[option.value].price || 0;
        }
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  if (variantOptionValueIds.length > 0) {
    var variant = findVariantWithOptionValueIds(product, variantOptionValueIds);

    if (variant) {
      var variantPurchaseOp = purchaseOp;

      try {
        variantPurchaseOp = findPurchaseOption(variant, purchaseOption, quantity, customer);
      } catch (err) {// noop
      }

      variation.variant_id = variant.id;
      variation.price = variantPurchaseOp.price || 0;
      variation.sale_price = variantPurchaseOp.sale_price || purchaseOp.sale_price;
      variation.orig_price = variantPurchaseOp.orig_price || purchaseOp.orig_price;
      variation.stock_status = variant.stock_status;
      variation.stock_level = variant.stock_level || 0;
      variation.images = (variant.images && variant.images.length ? variant.images : product.images) || [];
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

function findPriceRule(prices) {
  var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var group = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  if (!prices || !prices.length || typeof quantity !== 'number') return;
  var match = prices.filter(function (price) {
    var quantity_min = price.quantity_min,
        quantity_max = price.quantity_max;
    if (quantity_min && !quantity_max) return quantity >= quantity_min;
    if (quantity_max && !quantity_min) return quantity <= quantity_max;
    if (quantity_max && quantity_min) return quantity <= quantity_max && quantity >= quantity_min;
    return false;
  });
  match = group ? match.filter(function (price) {
    return price.group === group || !price.group;
  }) : match;
  if (!match || !match.length) return;

  if (match.length > 1) {
    var lowestMatched = match.reduce(function (prevPrice, price) {
      return prevPrice.price > price.price ? price : prevPrice;
    });
    return lowestMatched.price;
  } else if (match.length === 1) {
    return match[0].price;
  }
}

function findPurchaseOption(product, purchaseOption, quantity, customer) {
  var plan = get(purchaseOption, 'plan_id', get(purchaseOption, 'plan'));
  var type = get(purchaseOption, 'type', typeof purchaseOption === 'string' ? purchaseOption : plan !== undefined ? 'subscription' : 'standard');
  var option = get(product, "purchase_options.".concat(type));

  if (!option && type !== 'standard') {
    throw new Error("Product purchase option '".concat(type, "' not found or not active"));
  }

  var price = product.price;
  var sale_price = product.sale_price;
  var orig_price = product.orig_price;

  if (option) {
    if (option.plans) {
      if (plan !== undefined) {
        option = find(option.plans, {
          id: plan
        });

        if (!option) {
          throw new Error("Subscription purchase plan '".concat(plan, "' not found or not active"));
        }

        price = option.price;
      } else {
        option = option.plans[0];
        price = option.price;
      }

      orig_price = option.orig_price;
    } else {
      var group = customer ? customer.group : null;
      var priceRule = findPriceRule(product.prices, quantity, group);

      if (priceRule) {
        price = priceRule;
        orig_price = option.orig_price || product.price;
      } else {
        price = option.price || product.price;
        orig_price = option.orig_price || product.orig_price;
      }
    }

    sale_price = option.sale_price || product.orig_price;
    return _objectSpread(_objectSpread({}, option), {}, {
      price: price,
      sale_price: sale_price,
      orig_price: orig_price
    });
  }

  return {
    type: 'standard',
    price: price,
    sale_price: sale_price,
    orig_price: orig_price
  };
}

function getFilterableAttributeFilters(_x, _x2, _x3) {
  return _getFilterableAttributeFilters.apply(this, arguments);
}

function _getFilterableAttributeFilters() {
  _getFilterableAttributeFilters = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request, products, options) {
    var _yield$attributesApi$, filterableAttributes;

    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return attributesApi.methods(request, OPTIONS).list({
              filterable: true
            });

          case 2:
            _yield$attributesApi$ = _context.sent;
            filterableAttributes = _yield$attributesApi$.results;
            return _context.abrupt("return", getFilters(products, _objectSpread(_objectSpread({}, options), {}, {
              filterableAttributes: filterableAttributes
            })));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getFilterableAttributeFilters.apply(this, arguments);
}

function getFilters(products) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var attributes = (options.attributes || options.attributes === undefined) && getAttributes(products);

  if (options.filterableAttributes) {
    attributes = attributes.filter(function (productAttr) {
      return options.filterableAttributes.find(function (filterableAttr) {
        return productAttr.id === filterableAttr.id;
      });
    });
  }

  var categories = (options.categories || options.categories === undefined) && getCategories(products);
  var priceRange = (options.price || options.price === undefined) && getPriceRange(products);
  var filters = [];

  if (priceRange) {
    filters.push({
      id: 'price',
      label: 'Price',
      type: 'range',
      options: [{
        value: priceRange.min,
        label: priceRange.min // TODO: formatting

      }, {
        value: priceRange.max,
        label: priceRange.max // TODO: formatting

      }],
      interval: priceRange.interval
    });
  }

  if (categories && categories.length > 0) {
    filters.push({
      id: 'category',
      label: 'Category',
      type: 'select',
      options: categories.map(function (category) {
        return {
          value: category.slug,
          label: category.name
        };
      })
    });
  }

  if (attributes && attributes.length > 0) {
    filters = [].concat((0, _toConsumableArray2["default"])(filters), (0, _toConsumableArray2["default"])(reduce(attributes, function (acc, attr) {
      return [].concat((0, _toConsumableArray2["default"])(acc), (0, _toConsumableArray2["default"])(attr.id !== 'category' && attr.id !== 'price' && attr.values instanceof Array && attr.values.length > 0 ? [{
        id: attr.id,
        label: attr.name,
        type: 'select',
        options: attr.values.map(function (value) {
          return {
            value: value,
            label: value
          };
        })
      }] : []));
    }, [])));
  }

  return filters;
}

function getCategories(products) {
  var categories = [];
  var collection = products && products.results || (products.id ? [products] : products);

  if (collection instanceof Array) {
    var _iterator4 = _createForOfIteratorHelper(collection),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var product = _step4.value;

        if (product.categories) {
          var _iterator5 = _createForOfIteratorHelper(product.categories),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var category = _step5.value;
              if (!category) continue;
              var ex = find(categories, {
                id: category.id
              });

              if (!ex) {
                categories.push(category);
              }
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  }

  return categories;
}

function getAttributes(products) {
  var attributes = [];
  var collection = products && products.results || (products.id ? [products] : products);

  if (collection instanceof Array) {
    var _iterator6 = _createForOfIteratorHelper(collection),
        _step6;

    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var product = _step6.value;

        if (product.attributes) {
          for (var id in product.attributes) {
            if (!product.attributes[id]) continue;
            var value = product.attributes[id].value;
            var attr = find(attributes, {
              id: snakeCase(id)
            });

            if (attr) {
              attr.values = uniq([].concat((0, _toConsumableArray2["default"])(attr.values), (0, _toConsumableArray2["default"])(value instanceof Array ? value : [value])));
            } else {
              attributes.push(_objectSpread(_objectSpread({}, product.attributes[id]), {}, {
                value: undefined,
                values: (0, _toConsumableArray2["default"])(value instanceof Array ? value : [value])
              }));
            }
          }
        }
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
  }

  return attributes;
}

function getPriceRange(products) {
  var min;
  var max;
  var interval;
  var collection = products && products.results || (products.id ? [products] : products);

  if (collection instanceof Array) {
    var _iterator7 = _createForOfIteratorHelper(collection),
        _step7;

    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var product = _step7.value;

        if (max === undefined || product.price > max) {
          max = Math.ceil(product.price);
        }

        if (min === undefined || product.price < min) {
          min = Math.floor(product.price);
        }
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
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
    max = interval + max - max % interval;
  }

  if (min % interval > 0) {
    min = min - min % interval;
  }

  while ((max - min) / interval % 1 > 0) {
    max++;
  }

  return {
    min: min,
    max: max,
    interval: interval
  };
}

module.exports = {
  methods: methods,
  cleanProductOptions: cleanProductOptions,
  getProductOptionIndex: getProductOptionIndex,
  getVariantOptionValueIds: getVariantOptionValueIds,
  findVariantWithOptions: findVariantWithOptions,
  calculateVariation: calculateVariation
};