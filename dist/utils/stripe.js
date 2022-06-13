"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var reduce = require('lodash/reduce');

var isEmpty = require('lodash/isEmpty');

var get = require('lodash/get');

var toLower = require('lodash/toLower');

var map = require('lodash/map');

var toNumber = require('lodash/toNumber');

var addressFieldsMap = {
  city: 'city',
  country: 'country',
  line1: 'address1',
  line2: 'address2',
  postal_code: 'zip',
  state: 'state'
};
var billingFieldsMap = {
  name: 'name',
  phone: 'phone'
};

function getBillingDetails(data) {
  var _data$account = data.account,
      account = _data$account === void 0 ? {} : _data$account,
      billing = data.billing,
      shipping = data.shipping;
  var accountShipping = get(account, 'shipping', {});
  var accountBilling = get(account, 'billing', {});

  var billingData = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, accountShipping), accountBilling), shipping), billing);

  var fillValues = function fillValues(fieldsMap) {
    return reduce(fieldsMap, function (acc, value, key) {
      var billingValue = billingData[value];

      if (billingValue) {
        acc[key] = billingValue;
      }

      return acc;
    }, {});
  };

  var billingDetails = fillValues(billingFieldsMap);

  if (!isEmpty(billingDetails)) {
    var address = fillValues(addressFieldsMap);
    return _objectSpread(_objectSpread({}, billingDetails), !isEmpty(address) ? {
      address: address
    } : {});
  }
}

function getKlarnaItems(cart) {
  var currency = toLower(get(cart, 'currency', 'eur'));
  var items = map(cart.items, function (item) {
    return {
      type: 'sku',
      description: item.product.name,
      quantity: item.quantity,
      currency: currency,
      amount: Math.round(toNumber(item.price_total - item.discount_total) * 100)
    };
  });
  var tax = get(cart, 'tax_included_total');

  if (tax) {
    items.push({
      type: 'tax',
      description: 'Taxes',
      currency: currency,
      amount: Math.round(toNumber(tax) * 100)
    });
  }

  var shipping = get(cart, 'shipping', {});
  var shippingTotal = get(cart, 'shipment_total', {});

  if (shipping.price) {
    items.push({
      type: 'shipping',
      description: shipping.service_name,
      currency: currency,
      amount: Math.round(toNumber(shippingTotal) * 100)
    });
  }

  return items;
}

function setKlarnaBillingShipping(source, data) {
  var shippingNameFieldsMap = {
    shipping_first_name: 'first_name',
    shipping_last_name: 'last_name'
  };
  var shippingFieldsMap = {
    phone: 'phone'
  };
  var billingNameFieldsMap = {
    first_name: 'first_name',
    last_name: 'last_name'
  };
  var billingFieldsMap = {
    email: 'email'
  };

  var fillValues = function fillValues(fieldsMap, data) {
    return reduce(fieldsMap, function (acc, srcKey, destKey) {
      var value = data[srcKey];

      if (value) {
        acc[destKey] = value;
      }

      return acc;
    }, {});
  };

  source.klarna = _objectSpread(_objectSpread({}, source.klarna), fillValues(shippingNameFieldsMap, data.shipping));
  var shipping = fillValues(shippingFieldsMap, data.shipping);
  var shippingAddress = fillValues(addressFieldsMap, data.shipping);

  if (shipping || shippingAddress) {
    source.source_order.shipping = _objectSpread(_objectSpread({}, shipping ? shipping : {}), shippingAddress ? {
      address: shippingAddress
    } : {});
  }

  source.klarna = _objectSpread(_objectSpread({}, source.klarna), fillValues(billingNameFieldsMap, data.billing || get(data, 'account.billing') || data.shipping));
  var billing = fillValues(billingFieldsMap, data.account);
  var billingAddress = fillValues(addressFieldsMap, data.billing || get(data, 'account.billing') || data.shipping);

  if (billing || billingAddress) {
    source.owner = _objectSpread(_objectSpread({}, billing ? billing : {}), billingAddress ? {
      address: billingAddress
    } : {});
  }
}

function setBancontactOwner(source, data) {
  var fillValues = function fillValues(fieldsMap, data) {
    return reduce(fieldsMap, function (acc, srcKey, destKey) {
      var value = data[srcKey];

      if (value) {
        acc[destKey] = value;
      }

      return acc;
    }, {});
  };

  var _data$account2 = data.account,
      account = _data$account2 === void 0 ? {} : _data$account2,
      billing = data.billing,
      shipping = data.shipping;

  var billingData = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, account.shipping), account.billing), shipping), billing);

  var billingAddress = fillValues(addressFieldsMap, billingData);
  source.owner = _objectSpread(_objectSpread({
    email: account.email,
    name: billingData.name || account.name
  }, billingData.phone ? {
    phone: billingData.phone
  } : account.phone ? {
    phone: account.phone
  } : {}), !isEmpty(billingAddress) ? {
    address: billingAddress
  } : {});
}

function createPaymentMethod(_x, _x2, _x3) {
  return _createPaymentMethod.apply(this, arguments);
}

function _createPaymentMethod() {
  _createPaymentMethod = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(stripe, cardElement, cart) {
    var billingDetails, _yield$stripe$createP, error, paymentMethod;

    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            billingDetails = getBillingDetails(cart);
            _context.next = 3;
            return stripe.createPaymentMethod(_objectSpread({
              type: 'card',
              card: cardElement
            }, billingDetails ? {
              billing_details: billingDetails
            } : {}));

          case 3:
            _yield$stripe$createP = _context.sent;
            error = _yield$stripe$createP.error;
            paymentMethod = _yield$stripe$createP.paymentMethod;
            return _context.abrupt("return", error ? {
              error: error
            } : {
              token: paymentMethod.id,
              last4: paymentMethod.card.last4,
              exp_month: paymentMethod.card.exp_month,
              exp_year: paymentMethod.card.exp_year,
              brand: paymentMethod.card.brand,
              address_check: paymentMethod.card.checks.address_line1_check,
              cvc_check: paymentMethod.card.checks.cvc_check,
              zip_check: paymentMethod.card.checks.address_zip_check
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _createPaymentMethod.apply(this, arguments);
}

function createIDealPaymentMethod(_x4, _x5) {
  return _createIDealPaymentMethod.apply(this, arguments);
}

function _createIDealPaymentMethod() {
  _createIDealPaymentMethod = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(stripe, element) {
    var billing,
        billingDetails,
        _args2 = arguments;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            billing = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : {};
            billingDetails = getBillingDetails(billing);
            _context2.next = 4;
            return stripe.createPaymentMethod(_objectSpread({
              type: 'ideal',
              ideal: element
            }, billingDetails ? {
              billing_details: billingDetails
            } : {}));

          case 4:
            return _context2.abrupt("return", _context2.sent);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _createIDealPaymentMethod.apply(this, arguments);
}

function createKlarnaSource(_x6, _x7) {
  return _createKlarnaSource.apply(this, arguments);
}

function _createKlarnaSource() {
  _createKlarnaSource = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(stripe, cart) {
    var sourceObject;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            sourceObject = {
              type: 'klarna',
              flow: 'redirect',
              amount: Math.round(get(cart, 'grand_total', 0) * 100),
              currency: toLower(get(cart, 'currency', 'eur')),
              klarna: {
                product: 'payment',
                purchase_country: get(cart, 'settings.country', 'DE')
              },
              source_order: {
                items: getKlarnaItems(cart)
              },
              redirect: {
                return_url: window.location.href
              }
            };
            setKlarnaBillingShipping(sourceObject, cart);
            _context3.next = 4;
            return stripe.createSource(sourceObject);

          case 4:
            return _context3.abrupt("return", _context3.sent);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _createKlarnaSource.apply(this, arguments);
}

function createBancontactSource(_x8, _x9) {
  return _createBancontactSource.apply(this, arguments);
}

function _createBancontactSource() {
  _createBancontactSource = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(stripe, cart) {
    var sourceObject;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            sourceObject = {
              type: 'bancontact',
              amount: Math.round(get(cart, 'grand_total', 0) * 100),
              currency: toLower(get(cart, 'currency', 'eur')),
              redirect: {
                return_url: window.location.href
              }
            };
            setBancontactOwner(sourceObject, cart);
            _context4.next = 4;
            return stripe.createSource(sourceObject);

          case 4:
            return _context4.abrupt("return", _context4.sent);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _createBancontactSource.apply(this, arguments);
}

function stripeAmountByCurrency(currency, amount) {
  var zeroDecimalCurrencies = ['BIF', // Burundian Franc
  'DJF', // Djiboutian Franc,
  'JPY', // Japanese Yen
  'KRW', // South Korean Won
  'PYG', // Paraguayan Guaraní
  'VND', // Vietnamese Đồng
  'XAF', // Central African Cfa Franc
  'XPF', // Cfp Franc
  'CLP', // Chilean Peso
  'GNF', // Guinean Franc
  'KMF', // Comorian Franc
  'MGA', // Malagasy Ariary
  'RWF', // Rwandan Franc
  'VUV', // Vanuatu Vatu
  'XOF' // West African Cfa Franc
  ];

  if (zeroDecimalCurrencies.includes(currency.toUpperCase())) {
    return amount;
  } else {
    return Math.round(amount * 100);
  }
}

module.exports = {
  createPaymentMethod: createPaymentMethod,
  createIDealPaymentMethod: createIDealPaymentMethod,
  createKlarnaSource: createKlarnaSource,
  createBancontactSource: createBancontactSource,
  stripeAmountByCurrency: stripeAmountByCurrency
};