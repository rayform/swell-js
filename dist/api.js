"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var card = require('./card');

var _require = require('./cookie'),
    getCookie = _require.getCookie,
    setCookie = _require.setCookie;

var _require2 = require('./utils'),
    setOptions = _require2.setOptions,
    toCamel = _require2.toCamel,
    toSnake = _require2.toSnake,
    trimBoth = _require2.trimBoth,
    trimStart = _require2.trimStart,
    trimEnd = _require2.trimEnd,
    stringifyQuery = _require2.stringifyQuery,
    base64Encode = _require2.base64Encode;

var cache = require('./cache');

var cart = require('./cart');

var account = require('./account');

var products = require('./products');

var categories = require('./categories');

var attributes = require('./attributes');

var subscriptions = require('./subscriptions');

var content = require('./content');

var settings = require('./settings');

var payment = require('./payment');

var locale = require('./locale');

var currency = require('./currency');

require('isomorphic-fetch');

var options = {
  store: null,
  key: null,
  url: null,
  useCamelCase: null,
  previewContent: null
};
var api = {
  options: options,
  request: request,
  init: function init(store, key) {
    var opt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    options.key = key;
    options.store = store;
    options.url = opt.url ? trimEnd(opt.url) : "https://".concat(store, ".swell.store");
    options.vaultUrl = opt.vaultUrl ? trimEnd(opt.vaultUrl) : "https://vault.schema.io";
    options.timeout = opt.timeout && parseInt(opt.timeout, 10) || 20000;
    options.useCamelCase = opt.useCamelCase || false;
    options.previewContent = opt.previewContent || false;
    options.session = opt.session;
    options.locale = opt.locale;
    options.currency = opt.currency;
    options.api = api;
    setOptions(options);
  },
  // Backward compatibility
  auth: function auth() {
    return this.init.apply(this, arguments);
  },
  get: function get(url, query) {
    return request('get', url, query);
  },
  put: function put(url, data) {
    return request('put', url, data);
  },
  post: function post(url, data) {
    return request('post', url, data);
  },
  "delete": function _delete(url, data) {
    return request('delete', url, data);
  },
  cache: cache,
  card: card,
  cart: cart.methods(request, options),
  account: account.methods(request, options),
  products: products.methods(request, options),
  categories: categories.methods(request, options),
  attributes: attributes.methods(request, options),
  subscriptions: subscriptions.methods(request, options),
  content: content.methods(request, options),
  settings: settings.methods(request, options),
  payment: payment.methods(request, options),
  locale: locale.methods(request, options),
  currency: currency.methods(request, options)
};

function request(_x, _x2) {
  return _request.apply(this, arguments);
}

function _request() {
  _request = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(method, url) {
    var id,
        data,
        opt,
        allOptions,
        session,
        locale,
        currency,
        baseUrl,
        reqMethod,
        reqUrl,
        reqData,
        reqBody,
        exQuery,
        _reqUrl$split,
        _reqUrl$split2,
        fullQuery,
        reqHeaders,
        response,
        responseSession,
        result,
        err,
        _err,
        _args = arguments;

    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = _args.length > 2 && _args[2] !== undefined ? _args[2] : undefined;
            data = _args.length > 3 && _args[3] !== undefined ? _args[3] : undefined;
            opt = _args.length > 4 && _args[4] !== undefined ? _args[4] : undefined;
            allOptions = _objectSpread(_objectSpread({}, options), opt);
            session = allOptions.session || getCookie('swell-session');
            locale = allOptions.locale || getCookie('swell-locale');
            currency = allOptions.currency || getCookie('swell-currency');
            baseUrl = "".concat(allOptions.url).concat(allOptions.base || '', "/api");
            reqMethod = String(method).toLowerCase();
            reqUrl = url;
            reqData = id;

            if (data !== undefined || typeof id === 'string') {
              reqUrl = [trimEnd(url), trimStart(id)].join('/');
              reqData = data;
            }

            reqUrl = allOptions.fullUrl || "".concat(baseUrl, "/").concat(trimBoth(reqUrl));
            reqData = allOptions.useCamelCase ? toSnake(reqData) : reqData;

            if (reqMethod === 'get') {
              _reqUrl$split = reqUrl.split('?');
              _reqUrl$split2 = (0, _slicedToArray2["default"])(_reqUrl$split, 2);
              reqUrl = _reqUrl$split2[0];
              exQuery = _reqUrl$split2[1];
              fullQuery = [exQuery, stringifyQuery(reqData)].join('&').replace(/^&/, '');
              reqUrl = "".concat(reqUrl).concat(fullQuery ? "?".concat(fullQuery) : '');
            } else {
              reqBody = JSON.stringify(reqData);
            }

            reqHeaders = {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: "Basic ".concat(base64Encode(String(allOptions.key)))
            };

            if (session) {
              reqHeaders['X-Session'] = session;
            }

            if (locale) {
              reqHeaders['X-Locale'] = locale;
            }

            if (currency) {
              reqHeaders['X-Currency'] = currency;
            }

            _context.next = 21;
            return fetch(reqUrl, {
              method: reqMethod,
              headers: reqHeaders,
              body: reqBody,
              credentials: 'include',
              mode: 'cors'
            });

          case 21:
            response = _context.sent;
            responseSession = response.headers.get('X-Session');

            if (typeof responseSession === 'string' && session !== responseSession) {
              setCookie('swell-session', responseSession);
            }

            _context.next = 26;
            return response.json();

          case 26:
            result = _context.sent;

            if (!(result && result.error)) {
              _context.next = 35;
              break;
            }

            err = new Error(result.error.message);
            err.status = response.status;
            err.code = result.error.code;
            err.param = result.error.param;
            throw err;

          case 35:
            if (response.ok) {
              _context.next = 39;
              break;
            }

            _err = new Error('A connection error occurred while making the request');
            _err.code = 'connection_error';
            throw _err;

          case 39:
            return _context.abrupt("return", options.useCamelCase ? toCamel(result) : result);

          case 40:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _request.apply(this, arguments);
}

if (typeof window !== 'undefined') {
  window.swell = {
    version: '3.14.0'
  };
}

module.exports = api;