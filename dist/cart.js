"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

var _require = require('./utils'),
    cloneDeep = _require.cloneDeep;

var _require2 = require('./products'),
    cleanProductOptions = _require2.cleanProductOptions;

function methods(request, options) {
  return {
    state: null,
    order: null,
    settings: null,
    requested: false,
    pendingRequests: [],
    cacheClear: null,
    requestStateChange: function () {
      var _requestStateChange = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(method, url, id, data) {
        var _this = this;

        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", this.requestStateSync( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                  var result;
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return request(method, url, id, data);

                        case 2:
                          result = _context.sent;

                          if (!(result && result.errors)) {
                            _context.next = 5;
                            break;
                          }

                          return _context.abrupt("return", result);

                        case 5:
                          _this.state = result;
                          return _context.abrupt("return", result);

                        case 7:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }))));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function requestStateChange(_x, _x2, _x3, _x4) {
        return _requestStateChange.apply(this, arguments);
      }

      return requestStateChange;
    }(),
    requestStateSync: function () {
      var _requestStateSync = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(handler) {
        var _this2 = this;

        var result, _this$pendingRequests, _handler, resolve;

        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!this.state) {
                  _context3.next = 6;
                  break;
                }

                _context3.next = 3;
                return handler();

              case 3:
                return _context3.abrupt("return", _context3.sent);

              case 6:
                if (!this.requested) {
                  _context3.next = 8;
                  break;
                }

                return _context3.abrupt("return", new Promise(function (resolve) {
                  _this2.pendingRequests.push({
                    handler: handler,
                    resolve: resolve
                  });
                }));

              case 8:
                this.requested = true;
                _context3.next = 11;
                return handler();

              case 11:
                result = _context3.sent;
                this.requested = false;

                while (this.pendingRequests.length > 0) {
                  _this$pendingRequests = this.pendingRequests.shift(), _handler = _this$pendingRequests.handler, resolve = _this$pendingRequests.resolve;
                  resolve(_handler());
                }

                return _context3.abrupt("return", result);

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function requestStateSync(_x5) {
        return _requestStateSync.apply(this, arguments);
      }

      return requestStateSync;
    }(),
    get: function get() {
      var data;

      if (this.cacheClear) {
        this.cacheClear = null;
        data = {
          $cache: false
        };
      }

      return this.requestStateChange('get', '/cart', undefined, data);
    },
    clearCache: function clearCache() {
      this.cacheClear = true;
    },
    getItemData: function getItemData(item) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var result = cloneDeep(item);

      if (typeof item === 'string') {
        result = _objectSpread(_objectSpread({}, data || {}), {}, {
          product_id: item
        });
      }

      if (result && result.options) {
        result.options = cleanProductOptions(result.options);
      }

      return result;
    },
    addItem: function addItem(item, data) {
      return this.requestStateChange('post', '/cart/items', this.getItemData(item, data));
    },
    updateItem: function updateItem(id, item) {
      return this.requestStateChange('put', "/cart/items/".concat(id), this.getItemData(item));
    },
    setItems: function setItems(input) {
      var items = input;

      if (items && items.map) {
        items = items.map(this.getItemData);
      }

      return this.requestStateChange('put', '/cart/items', items);
    },
    removeItem: function removeItem(id) {
      return this.requestStateChange('delete', "/cart/items/".concat(id));
    },
    recover: function recover(checkoutId) {
      return this.requestStateChange('put', "/cart/recover/".concat(checkoutId));
    },
    update: function update(input) {
      var data = input;

      if (data.items && data.items.map) {
        data = _objectSpread(_objectSpread({}, data), {}, {
          items: data.items.map(this.getItemData)
        });
      }

      return this.requestStateChange('put', "/cart", data);
    },
    applyCoupon: function applyCoupon(code) {
      return this.requestStateChange('put', '/cart/coupon', {
        code: code
      });
    },
    removeCoupon: function removeCoupon() {
      return this.requestStateChange('delete', '/cart/coupon');
    },
    applyGiftcard: function applyGiftcard(code) {
      return this.requestStateChange('post', '/cart/giftcards', {
        code: code
      });
    },
    removeGiftcard: function removeGiftcard(id) {
      return this.requestStateChange('delete', "/cart/giftcards/".concat(id));
    },
    getShippingRates: function () {
      var _getShippingRates = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.requestStateChange('get', '/cart/shipment-rating');

              case 2:
                return _context4.abrupt("return", this.state[options.useCamelCase ? 'shipmentRating' : 'shipment_rating']);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getShippingRates() {
        return _getShippingRates.apply(this, arguments);
      }

      return getShippingRates;
    }(),
    submitOrder: function () {
      var _submitOrder = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var result;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return request('post', '/cart/order');

              case 2:
                result = _context5.sent;

                if (!result.errors) {
                  _context5.next = 5;
                  break;
                }

                return _context5.abrupt("return", result);

              case 5:
                this.state = null;
                this.order = result;
                return _context5.abrupt("return", result);

              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function submitOrder() {
        return _submitOrder.apply(this, arguments);
      }

      return submitOrder;
    }(),
    getOrder: function () {
      var _getOrder = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var checkoutId,
            result,
            _args6 = arguments;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                checkoutId = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : undefined;

                if (!checkoutId) {
                  _context6.next = 7;
                  break;
                }

                _context6.next = 4;
                return request('get', "/cart/order", {
                  checkout_id: checkoutId
                });

              case 4:
                result = _context6.sent;
                _context6.next = 10;
                break;

              case 7:
                _context6.next = 9;
                return request('get', "/cart/order");

              case 9:
                result = _context6.sent;

              case 10:
                this.order = result;
                return _context6.abrupt("return", result);

              case 12:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getOrder() {
        return _getOrder.apply(this, arguments);
      }

      return getOrder;
    }(),
    getSettings: function () {
      var _getSettings = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return request('get', '/cart/settings');

              case 2:
                this.settings = _context7.sent;
                return _context7.abrupt("return", this.settings);

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function getSettings() {
        return _getSettings.apply(this, arguments);
      }

      return getSettings;
    }()
  };
}

module.exports = {
  methods: methods
};