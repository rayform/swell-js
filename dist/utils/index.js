"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof3(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

var qs = require('qs');

var set = require('lodash/set');

var get = require('lodash/get');

var uniq = require('lodash/uniq');

var find = require('lodash/find');

var round = require('lodash/round');

var findIndex = require('lodash/findIndex');

var camelCase = require('lodash/camelCase');

var snakeCase = require('lodash/snakeCase');

var cloneDeep = require('lodash/cloneDeep');

var isEqual = require('lodash/isEqual');

var deepmerge = require('deepmerge');

var _require = require('object-keys-normalizer'),
    normalizeKeys = _require.normalizeKeys;

var options = {};

function merge(x, y) {
  var opt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (!y || (0, _typeof2["default"])(y) !== 'object') {
    return x;
  }

  if (!x || (0, _typeof2["default"])(x) !== 'object') {
    return x;
  }

  function arrayMerge(target, source, options) {
    var destination = target.slice();
    source.forEach(function (item, index) {
      if (typeof destination[index] === 'undefined') {
        destination[index] = options.cloneUnlessOtherwiseSpecified(item, options);
      } else if (options.isMergeableObject(item)) {
        destination[index] = merge(target[index], item, options);
      } else if (target.indexOf(item) === -1) {
        destination.push(item);
      }
    });
    return destination;
  }

  return deepmerge(x, y, {
    arrayMerge: arrayMerge
  });
}

function setOptions(optns) {
  options = optns;
}

function getOptions() {
  return options;
}

function isObject(val) {
  return val && (0, _typeof2["default"])(val) === 'object' && !(val instanceof Array);
}

function toCamel(obj) {
  if (!obj) return obj;
  var objCopy = JSON.parse(JSON.stringify(obj));
  return normalizeKeys(objCopy, keyToCamel);
}

function toCamelPath(str) {
  if (typeof str === 'string') {
    return str.split('.').map(camelCase).join('.');
  }

  return str;
}

function toSnake(obj) {
  if (!obj) return obj;
  var objCopy = JSON.parse(JSON.stringify(obj));
  return normalizeKeys(objCopy, keyToSnake);
}

function keyToSnake(key) {
  // Handle keys prefixed with $ or _
  return (key[0] === '$' ? '$' : '') + snakeCase(key).replace(/\_([0-9])/g, '$1');
}

function keyToCamel(key) {
  // Handle keys prefixed with $ or _
  return (key[0] === '$' ? '$' : '') + camelCase(key).replace(/\_([0-9])/g, '$1');
}

function trimBoth(str) {
  return trimStart(trimEnd(str));
}

function trimStart(str) {
  return typeof str === 'string' ? str.replace(/^[/]+/, '') : '';
}

function trimEnd(str) {
  return typeof str === 'string' ? str.replace(/[/]+$/, '') : '';
}

function stringifyQuery(str) {
  return qs.stringify(str, {
    depth: 10,
    encode: false
  });
}

function map(arr, cb) {
  return arr instanceof Array ? arr.map(cb) : [];
}

function reduce(arr, cb, init) {
  return arr instanceof Array ? arr.reduce(cb, init) : init;
}

function isServer() {
  return !(typeof window !== 'undefined' && window && window.document);
}

function isFunction(func) {
  return typeof func === 'function';
}

function defaultMethods(request, uri, methods) {
  return {
    list: methods.indexOf('list') >= 0 ? function (query) {
      return request('get', uri, undefined, query);
    } : undefined,
    get: methods.indexOf('get') >= 0 ? function (id, query) {
      return request('get', uri, id, query);
    } : undefined
  };
}

function vaultRequest(_x, _x2, _x3) {
  return _vaultRequest.apply(this, arguments);
}

function _vaultRequest() {
  _vaultRequest = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(method, url, data) {
    var opt,
        vaultUrl,
        timeout,
        requestId,
        callback,
        _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            opt = _args.length > 3 && _args[3] !== undefined ? _args[3] : undefined;
            vaultUrl = options.vaultUrl;
            timeout = options.timeout;
            requestId = vaultRequestId();
            callback = "swell_vault_response_".concat(requestId);
            data = {
              $jsonp: {
                method: method,
                callback: callback
              },
              $data: data,
              $key: options.key
            };
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              var script = document.createElement('script');
              script.type = 'text/javascript';
              script.src = "".concat(trimEnd(vaultUrl), "/").concat(trimStart(url), "?").concat(serializeData(data));
              var errorTimeout = setTimeout(function () {
                window[callback]({
                  $error: "Request timed out after ".concat(timeout / 1000, " seconds"),
                  $status: 500
                });
              }, timeout);

              window[callback] = function (result) {
                clearTimeout(errorTimeout);

                if (result && result.$error) {
                  var err = new Error(result.$error);
                  err.code = 'request_error';
                  err.status = result.$status;
                  reject(err);
                } else if (!result || result.$status >= 300) {
                  var _err = new Error('A connection error occurred while making the request');

                  _err.code = 'connection_error';
                  _err.status = result.$status;
                  reject(_err);
                } else {
                  resolve(options.useCamelCase ? toCamel(result.$data) : result.$data);
                }

                delete window[callback];
                script.parentNode.removeChild(script);
              };

              document.getElementsByTagName('head')[0].appendChild(script);
            }));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _vaultRequest.apply(this, arguments);
}

function vaultRequestId() {
  window.__swell_vault_request_id = window.__swell_vault_request_id || 0;
  window.__swell_vault_request_id++;
  return window.__swell_vault_request_id;
}

function serializeData(data) {
  var key;
  var s = [];

  var add = function add(key, value) {
    // If value is a function, invoke it and return its value
    if (typeof value === 'function') {
      value = value();
    } else if (value == null) {
      value = '';
    }

    s[s.length] = encodeURIComponent(key) + '=' + encodeURIComponent(value);
  };

  for (var _key in data) {
    buildParams(_key, data[_key], add);
  }

  return s.join('&').replace(' ', '+');
}

var rbracket = /\[\]$/;

function buildParams(key, obj, add) {
  var name;

  if (obj instanceof Array) {
    for (var i = 0; i < obj.length; i++) {
      if (rbracket.test(key)) {
        // Treat each array item as a scalar.
        add(key, v);
      } else {
        // Item is non-scalar (array or object), encode its numeric index.
        buildParams(key + '[' + ((typeof v === "undefined" ? "undefined" : (0, _typeof2["default"])(v)) === 'object' && v != null ? i : '') + ']', v, add);
      }
    }
  } else if (obj && (0, _typeof2["default"])(obj) === 'object') {
    // Serialize object item.
    for (name in obj) {
      buildParams(key + '[' + name + ']', obj[name], add);
    }
  } else {
    // Serialize scalar item.
    add(key, obj);
  }
}

function base64Encode(string) {
  if (typeof btoa !== 'undefined') {
    return btoa(string);
  }

  return Buffer.from(string).toString('base64');
}

function getLocationParams(location) {
  var url = location.search;
  var query = url.substr(1);
  var result = {};
  query.split('&').forEach(function (part) {
    var item = part.split('=');
    result[item[0]] = decodeURIComponent(item[1]);
  });
  return result;
}

function removeUrlParams() {
  var url = window.location.origin + window.location.pathname;
  window.history.pushState({
    path: url
  }, '', url);
}

module.exports = {
  set: set,
  get: get,
  uniq: uniq,
  find: find,
  round: round,
  findIndex: findIndex,
  camelCase: camelCase,
  cloneDeep: cloneDeep,
  merge: merge,
  setOptions: setOptions,
  getOptions: getOptions,
  toCamel: toCamel,
  toCamelPath: toCamelPath,
  toSnake: toSnake,
  trimBoth: trimBoth,
  trimStart: trimStart,
  trimEnd: trimEnd,
  stringifyQuery: stringifyQuery,
  isServer: isServer,
  isFunction: isFunction,
  isObject: isObject,
  isEqual: isEqual,
  snakeCase: snakeCase,
  map: map,
  reduce: reduce,
  base64Encode: base64Encode,
  defaultMethods: defaultMethods,
  vaultRequest: vaultRequest,
  getLocationParams: getLocationParams,
  removeUrlParams: removeUrlParams
};