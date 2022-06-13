"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof3(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var _require = require('./utils'),
    get = _require.get,
    find = _require.find,
    _set = _require.set,
    merge = _require.merge,
    toCamel = _require.toCamel,
    isObject = _require.isObject,
    cloneDeep = _require.cloneDeep,
    camelCase = _require.camelCase;

function methods(request, opt) {
  return {
    state: null,
    menuState: null,
    paymentState: null,
    subscriptionState: null,
    sessionState: null,
    localizedState: {},
    refresh: function refresh() {
      this.state = null;
      this.menuState = null;
      this.paymentState = null;
      this.subscriptionState = null;
      this.sessionState = null;
      this.localizedState = {};
      return this.get();
    },
    getState: function getState(uri, stateName) {
      var _this = this;

      var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          _ref$id = _ref.id,
          id = _ref$id === void 0 ? undefined : _ref$id,
          _ref$def = _ref.def,
          def = _ref$def === void 0 ? undefined : _ref$def,
          _ref$refresh = _ref.refresh,
          refresh = _ref$refresh === void 0 ? false : _ref$refresh,
          _ref$locale = _ref.locale,
          locale = _ref$locale === void 0 ? undefined : _ref$locale;

      if (!this[stateName] || refresh) {
        this[stateName] = request('get', uri);
      }

      if (this[stateName] && typeof this[stateName].then === 'function') {
        return this[stateName].then(function (state) {
          _this[stateName] = state;
          return _this.getLocalizedState(stateName, id, def, locale);
        });
      }

      return this.getLocalizedState(stateName, id, def, locale);
    },
    getLocalizedState: function getLocalizedState(stateName, id, def, loc) {
      var locale = loc || this.getCurrentLocale();
      var ls = this.localizedState;

      if (ls.code !== locale) {
        ls.code = locale;
        delete ls[locale];
      }

      if (!ls[locale]) {
        ls[locale] = {};
      }

      if (!ls[locale][stateName]) {
        ls[locale][stateName] = this.decodeLocale(this[stateName], loc);
      }

      return id ? get(ls[locale][stateName], id, def) : ls[locale][stateName];
    },
    findState: function findState(uri, stateName) {
      var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          _ref2$where = _ref2.where,
          where = _ref2$where === void 0 ? undefined : _ref2$where,
          _ref2$def = _ref2.def,
          def = _ref2$def === void 0 ? undefined : _ref2$def,
          _ref2$locale = _ref2.locale,
          locale = _ref2$locale === void 0 ? undefined : _ref2$locale;

      var state = this.getState(uri, stateName, {
        locale: locale
      });

      if (state && typeof state.then === 'function') {
        return state.then(function (state) {
          return find(state, where) || def;
        });
      }

      return find(state, where) || def;
    },
    get: function get() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      var def = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var locale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      return this.getState('/settings', 'state', {
        id: id,
        def: def,
        locale: locale
      });
    },
    getCurrentLocale: function getCurrentLocale() {
      return opt.api.locale.selected();
    },
    getStoreLocale: function getStoreLocale() {
      return get(this.state, 'store.locale');
    },
    getStoreLocales: function getStoreLocales() {
      return get(this.state, 'store.locales');
    },
    set: function set(_ref3) {
      var model = _ref3.model,
          path = _ref3.path,
          value = _ref3.value,
          loc = _ref3.loc;
      var locale = loc || this.getCurrentLocale();
      var stateName = model ? "".concat(model.replace(/s$/, ''), "State") : 'state';
      var useCamelCase = opt.useCamelCase;
      var mergeData = {};
      if (path) _set(mergeData, path, value);else mergeData = value;

      if (useCamelCase) {
        mergeData = toCamel(mergeData);
      }

      this[stateName] = merge(this[stateName] || {}, mergeData);

      if (this.localizedState[locale]) {
        this.localizedState[locale][stateName] = this.decodeLocale(this[stateName], locale);
      }
    },
    menus: function menus() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      var def = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var locale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      return this.findState('/settings/menus', 'menuState', {
        where: {
          id: id
        },
        def: def,
        locale: locale
      });
    },
    payments: function payments() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      var def = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var locale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      return this.getState('/settings/payments', 'paymentState', {
        id: id,
        def: def,
        locale: locale
      });
    },
    subscriptions: function subscriptions() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      var def = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var locale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      return this.getState('/settings/subscriptions', 'subscriptionState', {
        id: id,
        def: def,
        locale: locale
      });
    },
    session: function session() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      var def = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var locale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      return this.getState('/session', 'sessionState', {
        id: id,
        def: def,
        locale: locale
      });
    },
    decodeLocale: function decodeLocale(values, loc) {
      var locale = loc || this.getCurrentLocale();

      if (!values || (0, _typeof2["default"])(values) !== 'object') {
        return values;
      }

      var configs = this.getStoreLocales();

      if (configs) {
        configs = configs.reduce(function (acc, config) {
          return _objectSpread(_objectSpread({}, acc), {}, (0, _defineProperty2["default"])({}, config.code, config));
        }, {});
      } else {
        configs = {};
      }

      return decodeLocaleObjects(cloneDeep(values), locale, configs, opt);
    },
    load: function () {
      var _load = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _yield$request, settings, menus, payments, subscriptions, session;

        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return request('get', '/settings/all');

              case 3:
                _yield$request = _context.sent;
                settings = _yield$request.settings;
                menus = _yield$request.menus;
                payments = _yield$request.payments;
                subscriptions = _yield$request.subscriptions;
                session = _yield$request.session;
                this.localizedState = {};
                this.set({
                  value: settings
                });
                this.set({
                  model: 'menus',
                  value: menus
                });
                this.set({
                  model: 'payments',
                  value: payments
                });
                this.set({
                  model: 'subscriptions',
                  value: subscriptions
                });
                this.set({
                  model: 'session',
                  value: session
                });
                _context.next = 20;
                break;

              case 17:
                _context.prev = 17;
                _context.t0 = _context["catch"](0);
                console.error("Swell: unable to loading settings (".concat(_context.t0, ")"));

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 17]]);
      }));

      function load() {
        return _load.apply(this, arguments);
      }

      return load;
    }()
  };
}

function decodeLocaleObjects(values, locale, configs, opt) {
  if (isObject(values)) {
    var keys = Object.keys(values);

    for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
      var key = _keys[_i];

      if (key === '$locale') {
        decodeLocaleValue(locale, values, key, configs, opt);
        delete values.$locale;
      }

      if (values[key] !== undefined) {
        values[key] = decodeLocaleObjects(values[key], locale, configs, opt);
      }
    }
  } else if (values instanceof Array) {
    for (var i = 0; i < values.length; i++) {
      values[i] = decodeLocaleObjects(values[i], locale, configs, opt);
    }
  }

  return values;
}

function decodeLocaleValue(locale, values, key, configs, opt) {
  if (!locale || !isObject(values[key])) {
    return;
  }

  var returnLocaleKey;
  var returnLocaleConfig;
  var localeKeys = Object.keys(values[key]);

  for (var _i2 = 0, _localeKeys = localeKeys; _i2 < _localeKeys.length; _i2++) {
    var localeKey = _localeKeys[_i2];
    var shortKey = localeKey.replace(/\-.+$/, '');
    var transformedLocale = opt.useCamelCase ? camelCase(locale) : locale;

    if (localeKey === locale || localeKey === transformedLocale || shortKey === transformedLocale) {
      returnLocaleKey = locale;
      returnLocaleConfig = configs[locale];
    }
  } // Find configured locale for fallback


  if (!returnLocaleKey && isObject(configs)) {
    var _localeKeys2 = Object.keys(configs);

    for (var _i3 = 0, _localeKeys3 = _localeKeys2; _i3 < _localeKeys3.length; _i3++) {
      var _localeKey = _localeKeys3[_i3];

      var _shortKey = _localeKey.replace(/\-.+$/, '');

      if (_localeKey === locale || _shortKey === locale) {
        returnLocaleKey = _localeKey;
        returnLocaleConfig = configs[_localeKey];
      }
    }
  } // Find fallback key and values if applicable


  var fallbackKeys;
  var fallbackValues = {};

  if (returnLocaleConfig) {
    var fallbackKey = returnLocaleConfig.fallback;
    var origFallbackKey = fallbackKey;

    while (fallbackKey) {
      fallbackKeys = fallbackKeys || [];
      fallbackKeys.push(fallbackKey);
      fallbackValues = _objectSpread(_objectSpread({}, values[key][fallbackKey] || {}), fallbackValues);
      fallbackKey = configs[fallbackKey] && configs[fallbackKey].fallback;

      if (origFallbackKey === fallbackKey) {
        break;
      }
    }
  } // Merge locale value with fallbacks


  var localeValues = _objectSpread(_objectSpread({}, fallbackValues), values[key][returnLocaleKey] || {});

  var valueKeys = Object.keys(localeValues);

  for (var _i4 = 0, _valueKeys = valueKeys; _i4 < _valueKeys.length; _i4++) {
    var valueKey = _valueKeys[_i4];
    var hasValue = localeValues[valueKey] !== null && localeValues[valueKey] !== '';
    var shouldFallback = fallbackKeys && !hasValue;

    if (shouldFallback) {
      var _iterator = _createForOfIteratorHelper(fallbackKeys),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _fallbackKey = _step.value;
          shouldFallback = !values[key][_fallbackKey] || values[key][_fallbackKey][valueKey] === null || values[key][_fallbackKey][valueKey] === '';

          if (shouldFallback) {
            if (_fallbackKey === 'none') {
              values[valueKey] = null;
              break;
            }

            continue;
          } else {
            values[valueKey] = values[key][_fallbackKey][valueKey];
            break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } else {
      if (hasValue) {
        values[valueKey] = localeValues[valueKey];
      }
    }
  }
}

module.exports = {
  methods: methods
};