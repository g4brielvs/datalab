/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/americas-finance-guide/deficit/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/libs/ffg/src/deficit/trends/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_advance-string-index.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_advance-string-index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_fix-re-wks.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! ./es6.regexp.exec */ "./node_modules/core-js/modules/es6.regexp.exec.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_flags.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_flags.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-regexp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-regexp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec-abstract.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec-abstract.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_species-constructor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_species-constructor.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_strict-method.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_strict-method.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-define.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-define.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-ext.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-ext.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.sort.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.sort.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.name.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.name.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var test = {};
test[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.exec.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.exec.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.flags.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.flags.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && /./g.flags != 'g') __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js")
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.match.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.match.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");

// @@match logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.split.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.split.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var callRegExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! ./es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.symbol.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var $GOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/modules/es7.symbol.async-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./src/libs/ffg/components/tabs/tabs.js":
/*!**********************************************!*\
  !*** ./src/libs/ffg/components/tabs/tabs.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

__webpack_require__(/*! core-js/modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");

__webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");

__webpack_require__(/*! core-js/modules/es6.array.sort */ "./node_modules/core-js/modules/es6.array.sort.js");

__webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");

__webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

__webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");

__webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");

!function (t) {
  var n = {};

  function e(r) {
    if (n[r]) return n[r].exports;
    var i = n[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports;
  }

  e.m = t, e.c = n, e.d = function (t, n, r) {
    e.o(t, n) || Object.defineProperty(t, n, {
      enumerable: !0,
      get: r
    });
  }, e.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, e.t = function (t, n) {
    if (1 & n && (t = e(t)), 8 & n) return t;
    if (4 & n && "object" == (0, _typeof2["default"])(t) && t && t.__esModule) return t;
    var r = Object.create(null);
    if (e.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: t
    }), 2 & n && "string" != typeof t) for (var i in t) {
      e.d(r, i, function (n) {
        return t[n];
      }.bind(null, i));
    }
    return r;
  }, e.n = function (t) {
    var n = t && t.__esModule ? function () {
      return t["default"];
    } : function () {
      return t;
    };
    return e.d(n, "a", n), n;
  }, e.o = function (t, n) {
    return Object.prototype.hasOwnProperty.call(t, n);
  }, e.p = "/assets/ffg/components/tabs/", e(e.s = 0);
}([function (t, n, e) {
  "use strict";

  e.r(n);

  var r = "http://www.w3.org/1999/xhtml",
      i = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: r,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  },
      o = function o(t) {
    var n = t += "",
        e = n.indexOf(":");
    return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), i.hasOwnProperty(n) ? {
      space: i[n],
      local: t
    } : t;
  };

  var u = function u(t) {
    var n = o(t);
    return (n.local ? function (t) {
      return function () {
        return this.ownerDocument.createElementNS(t.space, t.local);
      };
    } : function (t) {
      return function () {
        var n = this.ownerDocument,
            e = this.namespaceURI;
        return e === r && n.documentElement.namespaceURI === r ? n.createElement(t) : n.createElementNS(e, t);
      };
    })(n);
  };

  function c() {}

  var a = function a(t) {
    return null == t ? c : function () {
      return this.querySelector(t);
    };
  };

  function s() {
    return [];
  }

  var l = function l(t) {
    return new Array(t.length);
  };

  function f(t, n) {
    this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
  }

  f.prototype = {
    constructor: f,
    appendChild: function appendChild(t) {
      return this._parent.insertBefore(t, this._next);
    },
    insertBefore: function insertBefore(t, n) {
      return this._parent.insertBefore(t, n);
    },
    querySelector: function querySelector(t) {
      return this._parent.querySelector(t);
    },
    querySelectorAll: function querySelectorAll(t) {
      return this._parent.querySelectorAll(t);
    }
  };
  var h = "$";

  function p(t, n, e, r, i, o) {
    for (var u, c = 0, a = n.length, s = o.length; c < s; ++c) {
      (u = n[c]) ? (u.__data__ = o[c], r[c] = u) : e[c] = new f(t, o[c]);
    }

    for (; c < a; ++c) {
      (u = n[c]) && (i[c] = u);
    }
  }

  function d(t, n, e, r, i, o, u) {
    var c,
        a,
        s,
        l = {},
        p = n.length,
        d = o.length,
        _ = new Array(p);

    for (c = 0; c < p; ++c) {
      (a = n[c]) && (_[c] = s = h + u.call(a, a.__data__, c, n), s in l ? i[c] = a : l[s] = a);
    }

    for (c = 0; c < d; ++c) {
      (a = l[s = h + u.call(t, o[c], c, o)]) ? (r[c] = a, a.__data__ = o[c], l[s] = null) : e[c] = new f(t, o[c]);
    }

    for (c = 0; c < p; ++c) {
      (a = n[c]) && l[_[c]] === a && (i[c] = a);
    }
  }

  function _(t, n) {
    return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
  }

  function v(t) {
    return function () {
      this.removeAttribute(t);
    };
  }

  function y(t) {
    return function () {
      this.removeAttributeNS(t.space, t.local);
    };
  }

  function m(t, n) {
    return function () {
      this.setAttribute(t, n);
    };
  }

  function g(t, n) {
    return function () {
      this.setAttributeNS(t.space, t.local, n);
    };
  }

  function w(t, n) {
    return function () {
      var e = n.apply(this, arguments);
      null == e ? this.removeAttribute(t) : this.setAttribute(t, e);
    };
  }

  function b(t, n) {
    return function () {
      var e = n.apply(this, arguments);
      null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
    };
  }

  var x = function x(t) {
    return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
  };

  function A(t) {
    return function () {
      this.style.removeProperty(t);
    };
  }

  function S(t, n, e) {
    return function () {
      this.style.setProperty(t, n, e);
    };
  }

  function N(t, n, e) {
    return function () {
      var r = n.apply(this, arguments);
      null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
    };
  }

  function E(t, n) {
    return t.style.getPropertyValue(n) || x(t).getComputedStyle(t, null).getPropertyValue(n);
  }

  function O(t) {
    return function () {
      delete this[t];
    };
  }

  function P(t, n) {
    return function () {
      this[t] = n;
    };
  }

  function C(t, n) {
    return function () {
      var e = n.apply(this, arguments);
      null == e ? delete this[t] : this[t] = e;
    };
  }

  function L(t) {
    return t.trim().split(/^|\s+/);
  }

  function j(t) {
    return t.classList || new M(t);
  }

  function M(t) {
    this._node = t, this._names = L(t.getAttribute("class") || "");
  }

  function T(t, n) {
    for (var e = j(t), r = -1, i = n.length; ++r < i;) {
      e.add(n[r]);
    }
  }

  function I(t, n) {
    for (var e = j(t), r = -1, i = n.length; ++r < i;) {
      e.remove(n[r]);
    }
  }

  function q(t) {
    return function () {
      T(this, t);
    };
  }

  function B(t) {
    return function () {
      I(this, t);
    };
  }

  function D(t, n) {
    return function () {
      (n.apply(this, arguments) ? T : I)(this, t);
    };
  }

  M.prototype = {
    add: function add(t) {
      this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
    },
    remove: function remove(t) {
      var n = this._names.indexOf(t);

      n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
    },
    contains: function contains(t) {
      return this._names.indexOf(t) >= 0;
    }
  };

  function k() {
    this.textContent = "";
  }

  function H(t) {
    return function () {
      this.textContent = t;
    };
  }

  function R(t) {
    return function () {
      var n = t.apply(this, arguments);
      this.textContent = null == n ? "" : n;
    };
  }

  function U() {
    this.innerHTML = "";
  }

  function V(t) {
    return function () {
      this.innerHTML = t;
    };
  }

  function z(t) {
    return function () {
      var n = t.apply(this, arguments);
      this.innerHTML = null == n ? "" : n;
    };
  }

  function X() {
    this.nextSibling && this.parentNode.appendChild(this);
  }

  function $() {
    this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }

  function F() {
    return null;
  }

  function G() {
    var t = this.parentNode;
    t && t.removeChild(this);
  }

  function J() {
    return this.parentNode.insertBefore(this.cloneNode(!1), this.nextSibling);
  }

  function K() {
    return this.parentNode.insertBefore(this.cloneNode(!0), this.nextSibling);
  }

  var Q = {},
      W = null;
  "undefined" != typeof document && ("onmouseenter" in document.documentElement || (Q = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  }));

  function Y(t, n, e) {
    return t = Z(t, n, e), function (n) {
      var e = n.relatedTarget;
      e && (e === this || 8 & e.compareDocumentPosition(this)) || t.call(this, n);
    };
  }

  function Z(t, n, e) {
    return function (r) {
      var i = W;
      W = r;

      try {
        t.call(this, this.__data__, n, e);
      } finally {
        W = i;
      }
    };
  }

  function tt(t) {
    return t.trim().split(/^|\s+/).map(function (t) {
      var n = "",
          e = t.indexOf(".");
      return e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), {
        type: t,
        name: n
      };
    });
  }

  function nt(t) {
    return function () {
      var n = this.__on;

      if (n) {
        for (var e, r = 0, i = -1, o = n.length; r < o; ++r) {
          e = n[r], t.type && e.type !== t.type || e.name !== t.name ? n[++i] = e : this.removeEventListener(e.type, e.listener, e.capture);
        }

        ++i ? n.length = i : delete this.__on;
      }
    };
  }

  function et(t, n, e) {
    var r = Q.hasOwnProperty(t.type) ? Y : Z;
    return function (i, o, u) {
      var c,
          a = this.__on,
          s = r(n, o, u);
      if (a) for (var l = 0, f = a.length; l < f; ++l) {
        if ((c = a[l]).type === t.type && c.name === t.name) return this.removeEventListener(c.type, c.listener, c.capture), this.addEventListener(c.type, c.listener = s, c.capture = e), void (c.value = n);
      }
      this.addEventListener(t.type, s, e), c = {
        type: t.type,
        name: t.name,
        value: n,
        listener: s,
        capture: e
      }, a ? a.push(c) : this.__on = [c];
    };
  }

  function rt(t, n, e) {
    var r = x(t),
        i = r.CustomEvent;
    "function" == typeof i ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
  }

  var it = [null];

  function ot(t, n) {
    this._groups = t, this._parents = n;
  }

  function ut() {
    return new ot([[document.documentElement]], it);
  }

  ot.prototype = ut.prototype = {
    constructor: ot,
    select: function select(t) {
      "function" != typeof t && (t = a(t));

      for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i) {
        for (var o, u, c = n[i], s = c.length, l = r[i] = new Array(s), f = 0; f < s; ++f) {
          (o = c[f]) && (u = t.call(o, o.__data__, f, c)) && ("__data__" in o && (u.__data__ = o.__data__), l[f] = u);
        }
      }

      return new ot(r, this._parents);
    },
    selectAll: function selectAll(t) {
      var n;
      "function" != typeof t && (t = null == (n = t) ? s : function () {
        return this.querySelectorAll(n);
      });

      for (var e = this._groups, r = e.length, i = [], o = [], u = 0; u < r; ++u) {
        for (var c, a = e[u], l = a.length, f = 0; f < l; ++f) {
          (c = a[f]) && (i.push(t.call(c, c.__data__, f, a)), o.push(c));
        }
      }

      return new ot(i, o);
    },
    filter: function filter(t) {
      var n;
      "function" != typeof t && (n = t, t = function t() {
        return this.matches(n);
      });

      for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
        for (var u, c = e[o], a = c.length, s = i[o] = [], l = 0; l < a; ++l) {
          (u = c[l]) && t.call(u, u.__data__, l, c) && s.push(u);
        }
      }

      return new ot(i, this._parents);
    },
    data: function data(t, n) {
      if (!t) return v = new Array(this.size()), l = -1, this.each(function (t) {
        v[++l] = t;
      }), v;
      var e,
          r = n ? d : p,
          i = this._parents,
          o = this._groups;
      "function" != typeof t && (e = t, t = function t() {
        return e;
      });

      for (var u = o.length, c = new Array(u), a = new Array(u), s = new Array(u), l = 0; l < u; ++l) {
        var f = i[l],
            h = o[l],
            _ = h.length,
            v = t.call(f, f && f.__data__, l, i),
            y = v.length,
            m = a[l] = new Array(y),
            g = c[l] = new Array(y);
        r(f, h, m, g, s[l] = new Array(_), v, n);

        for (var w, b, x = 0, A = 0; x < y; ++x) {
          if (w = m[x]) {
            for (x >= A && (A = x + 1); !(b = g[A]) && ++A < y;) {
              ;
            }

            w._next = b || null;
          }
        }
      }

      return (c = new ot(c, i))._enter = a, c._exit = s, c;
    },
    enter: function enter() {
      return new ot(this._enter || this._groups.map(l), this._parents);
    },
    exit: function exit() {
      return new ot(this._exit || this._groups.map(l), this._parents);
    },
    join: function join(t, n, e) {
      var r = this.enter(),
          i = this,
          o = this.exit();
      return r = "function" == typeof t ? t(r) : r.append(t + ""), null != n && (i = n(i)), null == e ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
    },
    merge: function merge(t) {
      for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), u = new Array(r), c = 0; c < o; ++c) {
        for (var a, s = n[c], l = e[c], f = s.length, h = u[c] = new Array(f), p = 0; p < f; ++p) {
          (a = s[p] || l[p]) && (h[p] = a);
        }
      }

      for (; c < r; ++c) {
        u[c] = n[c];
      }

      return new ot(u, this._parents);
    },
    order: function order() {
      for (var t = this._groups, n = -1, e = t.length; ++n < e;) {
        for (var r, i = t[n], o = i.length - 1, u = i[o]; --o >= 0;) {
          (r = i[o]) && (u && 4 ^ r.compareDocumentPosition(u) && u.parentNode.insertBefore(r, u), u = r);
        }
      }

      return this;
    },
    sort: function sort(t) {
      function n(n, e) {
        return n && e ? t(n.__data__, e.__data__) : !n - !e;
      }

      t || (t = _);

      for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
        for (var u, c = e[o], a = c.length, s = i[o] = new Array(a), l = 0; l < a; ++l) {
          (u = c[l]) && (s[l] = u);
        }

        s.sort(n);
      }

      return new ot(i, this._parents).order();
    },
    call: function call() {
      var t = arguments[0];
      return arguments[0] = this, t.apply(null, arguments), this;
    },
    nodes: function nodes() {
      var t = new Array(this.size()),
          n = -1;
      return this.each(function () {
        t[++n] = this;
      }), t;
    },
    node: function node() {
      for (var t = this._groups, n = 0, e = t.length; n < e; ++n) {
        for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
          var u = r[i];
          if (u) return u;
        }
      }

      return null;
    },
    size: function size() {
      var t = 0;
      return this.each(function () {
        ++t;
      }), t;
    },
    empty: function empty() {
      return !this.node();
    },
    each: function each(t) {
      for (var n = this._groups, e = 0, r = n.length; e < r; ++e) {
        for (var i, o = n[e], u = 0, c = o.length; u < c; ++u) {
          (i = o[u]) && t.call(i, i.__data__, u, o);
        }
      }

      return this;
    },
    attr: function attr(t, n) {
      var e = o(t);

      if (arguments.length < 2) {
        var r = this.node();
        return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
      }

      return this.each((null == n ? e.local ? y : v : "function" == typeof n ? e.local ? b : w : e.local ? g : m)(e, n));
    },
    style: function style(t, n, e) {
      return arguments.length > 1 ? this.each((null == n ? A : "function" == typeof n ? N : S)(t, n, null == e ? "" : e)) : E(this.node(), t);
    },
    property: function property(t, n) {
      return arguments.length > 1 ? this.each((null == n ? O : "function" == typeof n ? C : P)(t, n)) : this.node()[t];
    },
    classed: function classed(t, n) {
      var e = L(t + "");

      if (arguments.length < 2) {
        for (var r = j(this.node()), i = -1, o = e.length; ++i < o;) {
          if (!r.contains(e[i])) return !1;
        }

        return !0;
      }

      return this.each(("function" == typeof n ? D : n ? q : B)(e, n));
    },
    text: function text(t) {
      return arguments.length ? this.each(null == t ? k : ("function" == typeof t ? R : H)(t)) : this.node().textContent;
    },
    html: function html(t) {
      return arguments.length ? this.each(null == t ? U : ("function" == typeof t ? z : V)(t)) : this.node().innerHTML;
    },
    raise: function raise() {
      return this.each(X);
    },
    lower: function lower() {
      return this.each($);
    },
    append: function append(t) {
      var n = "function" == typeof t ? t : u(t);
      return this.select(function () {
        return this.appendChild(n.apply(this, arguments));
      });
    },
    insert: function insert(t, n) {
      var e = "function" == typeof t ? t : u(t),
          r = null == n ? F : "function" == typeof n ? n : a(n);
      return this.select(function () {
        return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
      });
    },
    remove: function remove() {
      return this.each(G);
    },
    clone: function clone(t) {
      return this.select(t ? K : J);
    },
    datum: function datum(t) {
      return arguments.length ? this.property("__data__", t) : this.node().__data__;
    },
    on: function on(t, n, e) {
      var r,
          i,
          o = tt(t + ""),
          u = o.length;

      if (!(arguments.length < 2)) {
        for (c = n ? et : nt, null == e && (e = !1), r = 0; r < u; ++r) {
          this.each(c(o[r], n, e));
        }

        return this;
      }

      var c = this.node().__on;

      if (c) for (var a, s = 0, l = c.length; s < l; ++s) {
        for (r = 0, a = c[s]; r < u; ++r) {
          if ((i = o[r]).type === a.type && i.name === a.name) return a.value;
        }
      }
    },
    dispatch: function dispatch(t, n) {
      return this.each(("function" == typeof n ? function (t, n) {
        return function () {
          return rt(this, t, n.apply(this, arguments));
        };
      } : function (t, n) {
        return function () {
          return rt(this, t, n);
        };
      })(t, n));
    }
  };

  var ct = function ct(t) {
    return "string" == typeof t ? new ot([[document.querySelector(t)]], [document.documentElement]) : new ot([[t]], it);
  },
      at = 0;

  function st() {
    this._ = "@" + (++at).toString(36);
  }

  st.prototype = function () {
    return new st();
  }.prototype = {
    constructor: st,
    get: function get(t) {
      for (var n = this._; !(n in t);) {
        if (!(t = t.parentNode)) return;
      }

      return t[n];
    },
    set: function set(t, n) {
      return t[this._] = n;
    },
    remove: function remove(t) {
      return this._ in t && delete t[this._];
    },
    toString: function toString() {
      return this._;
    }
  };

  e.d(n, "default", function () {
    return gt;
  });
  var lt = {
    select: ct,
    selectAll: function selectAll(t) {
      return "string" == typeof t ? new ot([document.querySelectorAll(t)], [document.documentElement]) : new ot([null == t ? [] : t], it);
    }
  },
      ft = "SECTION",
      ht = "accordion__heading",
      pt = "accordion--open",
      dt = "cg-tabs__container",
      _t = "cg-tabs__tab";

  function vt(t, n) {
    var e,
        r,
        i = t.selectAll("." + _t);
    i.on("click", function () {
      i.classed("active", !1), t.select(".active").classed("active", !1), (e = lt.select(this)).classed("active", !0), t.select(e.attr("tabSelector")).classed("active", !0), n.selectedTabIdx = e.attr("tabIdx");
    }), r = n.selectedTabIdx || 0, i._groups[0][r].click();
  }

  function yt(t, n) {
    var e,
        r = t.insert("div", ":first-child");
    r.classed(dt, !0);

    for (var i = 0, o = n.tabs.length; i < o; i++) {
      e = n.tabs[i], r.append("button").classed(_t, !0).attr("tabSelector", e.selector).attr("tabIdx", i).append("div").text(e.name);
    }
  }

  function mt(t, n, e) {
    t.parentNode.className.match(pt) && (yt(n, e), vt(n, e)), t.addEventListener("click", function () {
      this.parentNode.className.match(pt) ? (yt(n, e), vt(n, e)) : (function (t) {
        t.select(".".concat(dt)).remove();
      }(n), function (t) {
        t.selectAll(".active").classed("active", !1);
      }(n));
    });
  }

  function gt(t, n) {
    var e = lt.select(t),
        r = n,
        i = r.tabs;

    if (e && i && i.length) {
      var o = function (t) {
        for (var n = t.node().parentNode; n && n.nodeName !== ft;) {
          n = n.parentNode;
        }

        return n && (n = lt.select(n).select(".".concat(ht)).node()), n;
      }(e);

      o ? mt(o, e, r) : (yt(e, r), vt(e, r));
    }
  }
}]);

/***/ }),

/***/ "./src/libs/ffg/src/deficit/trends/index.js":
/*!**************************************************!*\
  !*** ./src/libs/ffg/src/deficit/trends/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _tabs = _interopRequireDefault(__webpack_require__(/*! ../../../components/tabs/tabs */ "./src/libs/ffg/components/tabs/tabs.js"));

var tabContainer = '#surplusComponent',
    config = {
  accessibilityAttributes: {
    title: '2019 Federal Deficit Trends over Time',
    desc: 'In 2000 and 2001 the federal government experienced surpluses of $237 billion and $127 billion respectively. Since 2001, the federal government has not had another surplus. While the annual deficit did not exceed $500 billion from 2002 to 2008, the annual deficit increased substantially in response to the Great Recession with annual deficits exceeding $1 trillion from 2009 to 2012. The annual deficit declined from 2012 to 2015, falling below the $500 billion mark in 2015. Since then, however, the annual deficit has grown each year to $984 billion in 2019.'
  },
  tabs: [{
    name: 'Surplus',
    selector: '.deficit--surplus__surplus'
  }, {
    name: 'Balanced Budget',
    selector: '.deficit--surplus__balanced'
  }, {
    name: 'Deficit',
    selector: '.deficit--surplus__deficit'
  }],
  selectedTabIdx: 0
};
(0, _tabs["default"])(tabContainer, config);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FkdmFuY2Utc3RyaW5nLWluZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19lbnVtLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZpeC1yZS13a3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZmxhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZnVuY3Rpb24tdG8tc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLXJlZ2V4cC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX21ldGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZ2V4cC1leGVjLWFic3RyYWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZ2V4cC1leGVjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc3RyaWN0LW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL193a3MtZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3drcy1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LnNvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuZnVuY3Rpb24ubmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5leGVjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5mbGFncy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAubWF0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLnNwbGl0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC50by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicy9mZmcvY29tcG9uZW50cy90YWJzL3RhYnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYnMvZmZnL3NyYy9kZWZpY2l0L3RyZW5kcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJ0IiwibiIsImUiLCJyIiwiZXhwb3J0cyIsImkiLCJsIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwiX19lc01vZHVsZSIsImNyZWF0ZSIsImJpbmQiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwic3ZnIiwieGh0bWwiLCJ4bGluayIsInhtbCIsInhtbG5zIiwiaW5kZXhPZiIsInNsaWNlIiwic3BhY2UiLCJsb2NhbCIsInUiLCJvd25lckRvY3VtZW50IiwiY3JlYXRlRWxlbWVudE5TIiwibmFtZXNwYWNlVVJJIiwiZG9jdW1lbnRFbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImEiLCJxdWVyeVNlbGVjdG9yIiwiQXJyYXkiLCJsZW5ndGgiLCJmIiwiX25leHQiLCJfcGFyZW50IiwiX19kYXRhX18iLCJjb25zdHJ1Y3RvciIsImFwcGVuZENoaWxkIiwiaW5zZXJ0QmVmb3JlIiwicXVlcnlTZWxlY3RvckFsbCIsImgiLCJfIiwiTmFOIiwidiIsInJlbW92ZUF0dHJpYnV0ZSIsInkiLCJyZW1vdmVBdHRyaWJ1dGVOUyIsInNldEF0dHJpYnV0ZSIsImciLCJzZXRBdHRyaWJ1dGVOUyIsInciLCJhcHBseSIsImFyZ3VtZW50cyIsImIiLCJ4IiwiZGVmYXVsdFZpZXciLCJkb2N1bWVudCIsIkEiLCJzdHlsZSIsInJlbW92ZVByb3BlcnR5IiwiUyIsInNldFByb3BlcnR5IiwiTiIsIkUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIk8iLCJQIiwiQyIsIkwiLCJ0cmltIiwic3BsaXQiLCJqIiwiY2xhc3NMaXN0IiwiTSIsIl9ub2RlIiwiX25hbWVzIiwiZ2V0QXR0cmlidXRlIiwiVCIsImFkZCIsIkkiLCJyZW1vdmUiLCJxIiwiQiIsIkQiLCJwdXNoIiwiam9pbiIsInNwbGljZSIsImNvbnRhaW5zIiwiayIsInRleHRDb250ZW50IiwiSCIsIlIiLCJVIiwiaW5uZXJIVE1MIiwiViIsInoiLCJYIiwibmV4dFNpYmxpbmciLCJwYXJlbnROb2RlIiwiJCIsInByZXZpb3VzU2libGluZyIsImZpcnN0Q2hpbGQiLCJGIiwiRyIsInJlbW92ZUNoaWxkIiwiSiIsImNsb25lTm9kZSIsIksiLCJRIiwiVyIsIm1vdXNlZW50ZXIiLCJtb3VzZWxlYXZlIiwiWSIsIloiLCJyZWxhdGVkVGFyZ2V0IiwiY29tcGFyZURvY3VtZW50UG9zaXRpb24iLCJ0dCIsIm1hcCIsInR5cGUiLCJuYW1lIiwibnQiLCJfX29uIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImxpc3RlbmVyIiwiY2FwdHVyZSIsImV0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJ0IiwiQ3VzdG9tRXZlbnQiLCJjcmVhdGVFdmVudCIsImluaXRFdmVudCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiZGV0YWlsIiwiZGlzcGF0Y2hFdmVudCIsIml0Iiwib3QiLCJfZ3JvdXBzIiwiX3BhcmVudHMiLCJ1dCIsInNlbGVjdCIsInNlbGVjdEFsbCIsImZpbHRlciIsIm1hdGNoZXMiLCJkYXRhIiwic2l6ZSIsImVhY2giLCJfZW50ZXIiLCJfZXhpdCIsImVudGVyIiwiZXhpdCIsImFwcGVuZCIsIm1lcmdlIiwib3JkZXIiLCJNYXRoIiwibWluIiwic29ydCIsIm5vZGVzIiwibm9kZSIsImVtcHR5IiwiYXR0ciIsImdldEF0dHJpYnV0ZU5TIiwicHJvcGVydHkiLCJjbGFzc2VkIiwidGV4dCIsImh0bWwiLCJyYWlzZSIsImxvd2VyIiwiaW5zZXJ0IiwiY2xvbmUiLCJkYXR1bSIsIm9uIiwiZGlzcGF0Y2giLCJjdCIsImF0Iiwic3QiLCJ0b1N0cmluZyIsInNldCIsImd0IiwibHQiLCJmdCIsImh0IiwicHQiLCJkdCIsIl90IiwidnQiLCJzZWxlY3RlZFRhYklkeCIsImNsaWNrIiwieXQiLCJ0YWJzIiwic2VsZWN0b3IiLCJtdCIsImNsYXNzTmFtZSIsIm1hdGNoIiwiY29uY2F0Iiwibm9kZU5hbWUiLCJ0YWJDb250YWluZXIiLCJjb25maWciLCJhY2Nlc3NpYmlsaXR5QXR0cmlidXRlcyIsInRpdGxlIiwiZGVzYyJdLCJtYXBw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LE1BQXZCLEUiLCJmaWxlIjoidHJlbmRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvc3RhdGljL2FtZXJpY2FzLWZpbmFuY2UtZ3VpZGUvZGVmaWNpdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbGlicy9mZmcvc3JjL2RlZmljaXQvdHJlbmRzL2luZGV4LmpzXCIpO1xuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZjIob2JqKTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YyKFN5bWJvbC5pdGVyYXRvcikgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuIC8vIGBBZHZhbmNlU3RyaW5nSW5kZXhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYWR2YW5jZXN0cmluZ2luZGV4XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChTLCBpbmRleCwgdW5pY29kZSkge1xuICByZXR1cm4gaW5kZXggKyAodW5pY29kZSA/IGF0KFMsIGluZGV4KS5sZW5ndGggOiAxKTtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcbiIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIEFSRyA9IGNvZihmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcbiIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjYuOScgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuIiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgcmVzdWx0ID0gZ2V0S2V5cyhpdCk7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZiAoZ2V0U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdCk7XG4gICAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChzeW1ib2xzLmxlbmd0aCA+IGkpIGlmIChpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIHx8IChnbG9iYWxbbmFtZV0gPSB7fSkgOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdO1xuICB2YXIgZXhwb3J0cyA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICB2YXIgZXhwUHJvdG8gPSBleHBvcnRzW1BST1RPVFlQRV0gfHwgKGV4cG9ydHNbUFJPVE9UWVBFXSA9IHt9KTtcbiAgdmFyIGtleSwgb3duLCBvdXQsIGV4cDtcbiAgaWYgKElTX0dMT0JBTCkgc291cmNlID0gbmFtZTtcbiAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IChvd24gPyB0YXJnZXQgOiBzb3VyY2UpW2tleV07XG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICBleHAgPSBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHRlbmQgZ2xvYmFsXG4gICAgaWYgKHRhcmdldCkgcmVkZWZpbmUodGFyZ2V0LCBrZXksIG91dCwgdHlwZSAmICRleHBvcnQuVSk7XG4gICAgLy8gZXhwb3J0XG4gICAgaWYgKGV4cG9ydHNba2V5XSAhPSBvdXQpIGhpZGUoZXhwb3J0cywga2V5LCBleHApO1xuICAgIGlmIChJU19QUk9UTyAmJiBleHBQcm90b1trZXldICE9IG91dCkgZXhwUHJvdG9ba2V5XSA9IG91dDtcbiAgfVxufTtcbmdsb2JhbC5jb3JlID0gY29yZTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnJlcXVpcmUoJy4vZXM2LnJlZ2V4cC5leGVjJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgcmVnZXhwRXhlYyA9IHJlcXVpcmUoJy4vX3JlZ2V4cC1leGVjJyk7XG5cbnZhciBTUEVDSUVTID0gd2tzKCdzcGVjaWVzJyk7XG5cbnZhciBSRVBMQUNFX1NVUFBPUlRTX05BTUVEX0dST1VQUyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vICNyZXBsYWNlIG5lZWRzIGJ1aWx0LWluIHN1cHBvcnQgZm9yIG5hbWVkIGdyb3Vwcy5cbiAgLy8gI21hdGNoIHdvcmtzIGZpbmUgYmVjYXVzZSBpdCBqdXN0IHJldHVybiB0aGUgZXhlYyByZXN1bHRzLCBldmVuIGlmIGl0IGhhc1xuICAvLyBhIFwiZ3JvcHNcIiBwcm9wZXJ0eS5cbiAgdmFyIHJlID0gLy4vO1xuICByZS5leGVjID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICByZXN1bHQuZ3JvdXBzID0geyBhOiAnNycgfTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICByZXR1cm4gJycucmVwbGFjZShyZSwgJyQ8YT4nKSAhPT0gJzcnO1xufSk7XG5cbnZhciBTUExJVF9XT1JLU19XSVRIX09WRVJXUklUVEVOX0VYRUMgPSAoZnVuY3Rpb24gKCkge1xuICAvLyBDaHJvbWUgNTEgaGFzIGEgYnVnZ3kgXCJzcGxpdFwiIGltcGxlbWVudGF0aW9uIHdoZW4gUmVnRXhwI2V4ZWMgIT09IG5hdGl2ZUV4ZWNcbiAgdmFyIHJlID0gLyg/OikvO1xuICB2YXIgb3JpZ2luYWxFeGVjID0gcmUuZXhlYztcbiAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9yaWdpbmFsRXhlYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9O1xuICB2YXIgcmVzdWx0ID0gJ2FiJy5zcGxpdChyZSk7XG4gIHJldHVybiByZXN1bHQubGVuZ3RoID09PSAyICYmIHJlc3VsdFswXSA9PT0gJ2EnICYmIHJlc3VsdFsxXSA9PT0gJ2InO1xufSkoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBsZW5ndGgsIGV4ZWMpIHtcbiAgdmFyIFNZTUJPTCA9IHdrcyhLRVkpO1xuXG4gIHZhciBERUxFR0FURVNfVE9fU1lNQk9MID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTdHJpbmcgbWV0aG9kcyBjYWxsIHN5bWJvbC1uYW1lZCBSZWdFcCBtZXRob2RzXG4gICAgdmFyIE8gPSB7fTtcbiAgICBPW1NZTUJPTF0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9O1xuICAgIHJldHVybiAnJ1tLRVldKE8pICE9IDc7XG4gIH0pO1xuXG4gIHZhciBERUxFR0FURVNfVE9fRVhFQyA9IERFTEVHQVRFU19UT19TWU1CT0wgPyAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIFN5bWJvbC1uYW1lZCBSZWdFeHAgbWV0aG9kcyBjYWxsIC5leGVjXG4gICAgdmFyIGV4ZWNDYWxsZWQgPSBmYWxzZTtcbiAgICB2YXIgcmUgPSAvYS87XG4gICAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHsgZXhlY0NhbGxlZCA9IHRydWU7IHJldHVybiBudWxsOyB9O1xuICAgIGlmIChLRVkgPT09ICdzcGxpdCcpIHtcbiAgICAgIC8vIFJlZ0V4cFtAQHNwbGl0XSBkb2Vzbid0IGNhbGwgdGhlIHJlZ2V4J3MgZXhlYyBtZXRob2QsIGJ1dCBmaXJzdCBjcmVhdGVzXG4gICAgICAvLyBhIG5ldyBvbmUuIFdlIG5lZWQgdG8gcmV0dXJuIHRoZSBwYXRjaGVkIHJlZ2V4IHdoZW4gY3JlYXRpbmcgdGhlIG5ldyBvbmUuXG4gICAgICByZS5jb25zdHJ1Y3RvciA9IHt9O1xuICAgICAgcmUuY29uc3RydWN0b3JbU1BFQ0lFU10gPSBmdW5jdGlvbiAoKSB7IHJldHVybiByZTsgfTtcbiAgICB9XG4gICAgcmVbU1lNQk9MXSgnJyk7XG4gICAgcmV0dXJuICFleGVjQ2FsbGVkO1xuICB9KSA6IHVuZGVmaW5lZDtcblxuICBpZiAoXG4gICAgIURFTEVHQVRFU19UT19TWU1CT0wgfHxcbiAgICAhREVMRUdBVEVTX1RPX0VYRUMgfHxcbiAgICAoS0VZID09PSAncmVwbGFjZScgJiYgIVJFUExBQ0VfU1VQUE9SVFNfTkFNRURfR1JPVVBTKSB8fFxuICAgIChLRVkgPT09ICdzcGxpdCcgJiYgIVNQTElUX1dPUktTX1dJVEhfT1ZFUldSSVRURU5fRVhFQylcbiAgKSB7XG4gICAgdmFyIG5hdGl2ZVJlZ0V4cE1ldGhvZCA9IC8uL1tTWU1CT0xdO1xuICAgIHZhciBmbnMgPSBleGVjKFxuICAgICAgZGVmaW5lZCxcbiAgICAgIFNZTUJPTCxcbiAgICAgICcnW0tFWV0sXG4gICAgICBmdW5jdGlvbiBtYXliZUNhbGxOYXRpdmUobmF0aXZlTWV0aG9kLCByZWdleHAsIHN0ciwgYXJnMiwgZm9yY2VTdHJpbmdNZXRob2QpIHtcbiAgICAgICAgaWYgKHJlZ2V4cC5leGVjID09PSByZWdleHBFeGVjKSB7XG4gICAgICAgICAgaWYgKERFTEVHQVRFU19UT19TWU1CT0wgJiYgIWZvcmNlU3RyaW5nTWV0aG9kKSB7XG4gICAgICAgICAgICAvLyBUaGUgbmF0aXZlIFN0cmluZyBtZXRob2QgYWxyZWFkeSBkZWxlZ2F0ZXMgdG8gQEBtZXRob2QgKHRoaXNcbiAgICAgICAgICAgIC8vIHBvbHlmaWxsZWQgZnVuY3Rpb24pLCBsZWFzaW5nIHRvIGluZmluaXRlIHJlY3Vyc2lvbi5cbiAgICAgICAgICAgIC8vIFdlIGF2b2lkIGl0IGJ5IGRpcmVjdGx5IGNhbGxpbmcgdGhlIG5hdGl2ZSBAQG1ldGhvZCBtZXRob2QuXG4gICAgICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlLCB2YWx1ZTogbmF0aXZlUmVnRXhwTWV0aG9kLmNhbGwocmVnZXhwLCBzdHIsIGFyZzIpIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUsIHZhbHVlOiBuYXRpdmVNZXRob2QuY2FsbChzdHIsIHJlZ2V4cCwgYXJnMikgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBkb25lOiBmYWxzZSB9O1xuICAgICAgfVxuICAgICk7XG4gICAgdmFyIHN0cmZuID0gZm5zWzBdO1xuICAgIHZhciByeGZuID0gZm5zWzFdO1xuXG4gICAgcmVkZWZpbmUoU3RyaW5nLnByb3RvdHlwZSwgS0VZLCBzdHJmbik7XG4gICAgaGlkZShSZWdFeHAucHJvdG90eXBlLCBTWU1CT0wsIGxlbmd0aCA9PSAyXG4gICAgICAvLyAyMS4yLjUuOCBSZWdFeHAucHJvdG90eXBlW0BAcmVwbGFjZV0oc3RyaW5nLCByZXBsYWNlVmFsdWUpXG4gICAgICAvLyAyMS4yLjUuMTEgUmVnRXhwLnByb3RvdHlwZVtAQHNwbGl0XShzdHJpbmcsIGxpbWl0KVxuICAgICAgPyBmdW5jdGlvbiAoc3RyaW5nLCBhcmcpIHsgcmV0dXJuIHJ4Zm4uY2FsbChzdHJpbmcsIHRoaXMsIGFyZyk7IH1cbiAgICAgIC8vIDIxLjIuNS42IFJlZ0V4cC5wcm90b3R5cGVbQEBtYXRjaF0oc3RyaW5nKVxuICAgICAgLy8gMjEuMi41LjkgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF0oc3RyaW5nKVxuICAgICAgOiBmdW5jdGlvbiAoc3RyaW5nKSB7IHJldHVybiByeGZuLmNhbGwoc3RyaW5nLCB0aGlzKTsgfVxuICAgICk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG4vLyAyMS4yLjUuMyBnZXQgUmVnRXhwLnByb3RvdHlwZS5mbGFnc1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRoYXQgPSBhbk9iamVjdCh0aGlzKTtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuICBpZiAodGhhdC5nbG9iYWwpIHJlc3VsdCArPSAnZyc7XG4gIGlmICh0aGF0Lmlnbm9yZUNhc2UpIHJlc3VsdCArPSAnaSc7XG4gIGlmICh0aGF0Lm11bHRpbGluZSkgcmVzdWx0ICs9ICdtJztcbiAgaWYgKHRoYXQudW5pY29kZSkgcmVzdWx0ICs9ICd1JztcbiAgaWYgKHRoYXQuc3RpY2t5KSByZXN1bHQgKz0gJ3knO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ25hdGl2ZS1mdW5jdGlvbi10by1zdHJpbmcnLCBGdW5jdGlvbi50b1N0cmluZyk7XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZiAodHlwZW9mIF9fZyA9PSAnbnVtYmVyJykgX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwidmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuIiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcbiIsIi8vIDcuMi44IElzUmVnRXhwKGFyZ3VtZW50KVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgTUFUQ0ggPSByZXF1aXJlKCcuL193a3MnKSgnbWF0Y2gnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBpc1JlZ0V4cDtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiAoKGlzUmVnRXhwID0gaXRbTUFUQ0hdKSAhPT0gdW5kZWZpbmVkID8gISFpc1JlZ0V4cCA6IGNvZihpdCkgPT0gJ1JlZ0V4cCcpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG4iLCJ2YXIgTUVUQSA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBzZXREZXNjID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBpZCA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24gKGl0KSB7XG4gIHNldERlc2MoaXQsIE1FVEEsIHsgdmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IH0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSkgc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6IE1FVEEsXG4gIE5FRUQ6IGZhbHNlLFxuICBmYXN0S2V5OiBmYXN0S2V5LFxuICBnZXRXZWFrOiBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07XG4iLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGRQcyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBFbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpO1xuICB2YXIgaSA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgdmFyIGx0ID0gJzwnO1xuICB2YXIgZ3QgPSAnPic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZSAoaS0tKSBkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHkoKTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBQO1xuICB3aGlsZSAobGVuZ3RoID4gaSkgZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXMoTywgUCkpIHJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG4iLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGdPUE4gPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmY7XG52YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uIChpdCkge1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcbiIsIi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG4iLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgaWYgKGtleSAhPSBJRV9QUk9UTykgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuIiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgU1JDID0gcmVxdWlyZSgnLi9fdWlkJykoJ3NyYycpO1xudmFyICR0b1N0cmluZyA9IHJlcXVpcmUoJy4vX2Z1bmN0aW9uLXRvLXN0cmluZycpO1xudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgVFBMID0gKCcnICsgJHRvU3RyaW5nKS5zcGxpdChUT19TVFJJTkcpO1xuXG5yZXF1aXJlKCcuL19jb3JlJykuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gJHRvU3RyaW5nLmNhbGwoaXQpO1xufTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsLCBzYWZlKSB7XG4gIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nO1xuICBpZiAoaXNGdW5jdGlvbikgaGFzKHZhbCwgJ25hbWUnKSB8fCBoaWRlKHZhbCwgJ25hbWUnLCBrZXkpO1xuICBpZiAoT1trZXldID09PSB2YWwpIHJldHVybjtcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsIFNSQykgfHwgaGlkZSh2YWwsIFNSQywgT1trZXldID8gJycgKyBPW2tleV0gOiBUUEwuam9pbihTdHJpbmcoa2V5KSkpO1xuICBpZiAoTyA9PT0gZ2xvYmFsKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2UgaWYgKCFzYWZlKSB7XG4gICAgZGVsZXRlIE9ba2V5XTtcbiAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgfSBlbHNlIGlmIChPW2tleV0pIHtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSB7XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH1cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxufSkoRnVuY3Rpb24ucHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzW1NSQ10gfHwgJHRvU3RyaW5nLmNhbGwodGhpcyk7XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgYnVpbHRpbkV4ZWMgPSBSZWdFeHAucHJvdG90eXBlLmV4ZWM7XG5cbiAvLyBgUmVnRXhwRXhlY2AgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWdleHBleGVjXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChSLCBTKSB7XG4gIHZhciBleGVjID0gUi5leGVjO1xuICBpZiAodHlwZW9mIGV4ZWMgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgcmVzdWx0ID0gZXhlYy5jYWxsKFIsIFMpO1xuICAgIGlmICh0eXBlb2YgcmVzdWx0ICE9PSAnb2JqZWN0Jykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUmVnRXhwIGV4ZWMgbWV0aG9kIHJldHVybmVkIHNvbWV0aGluZyBvdGhlciB0aGFuIGFuIE9iamVjdCBvciBudWxsJyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgaWYgKGNsYXNzb2YoUikgIT09ICdSZWdFeHAnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUmVnRXhwI2V4ZWMgY2FsbGVkIG9uIGluY29tcGF0aWJsZSByZWNlaXZlcicpO1xuICB9XG4gIHJldHVybiBidWlsdGluRXhlYy5jYWxsKFIsIFMpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJlZ2V4cEZsYWdzID0gcmVxdWlyZSgnLi9fZmxhZ3MnKTtcblxudmFyIG5hdGl2ZUV4ZWMgPSBSZWdFeHAucHJvdG90eXBlLmV4ZWM7XG4vLyBUaGlzIGFsd2F5cyByZWZlcnMgdG8gdGhlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbiwgYmVjYXVzZSB0aGVcbi8vIFN0cmluZyNyZXBsYWNlIHBvbHlmaWxsIHVzZXMgLi9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljLmpzLFxuLy8gd2hpY2ggbG9hZHMgdGhpcyBmaWxlIGJlZm9yZSBwYXRjaGluZyB0aGUgbWV0aG9kLlxudmFyIG5hdGl2ZVJlcGxhY2UgPSBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2U7XG5cbnZhciBwYXRjaGVkRXhlYyA9IG5hdGl2ZUV4ZWM7XG5cbnZhciBMQVNUX0lOREVYID0gJ2xhc3RJbmRleCc7XG5cbnZhciBVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgcmUxID0gL2EvLFxuICAgICAgcmUyID0gL2IqL2c7XG4gIG5hdGl2ZUV4ZWMuY2FsbChyZTEsICdhJyk7XG4gIG5hdGl2ZUV4ZWMuY2FsbChyZTIsICdhJyk7XG4gIHJldHVybiByZTFbTEFTVF9JTkRFWF0gIT09IDAgfHwgcmUyW0xBU1RfSU5ERVhdICE9PSAwO1xufSkoKTtcblxuLy8gbm9ucGFydGljaXBhdGluZyBjYXB0dXJpbmcgZ3JvdXAsIGNvcGllZCBmcm9tIGVzNS1zaGltJ3MgU3RyaW5nI3NwbGl0IHBhdGNoLlxudmFyIE5QQ0dfSU5DTFVERUQgPSAvKCk/Py8uZXhlYygnJylbMV0gIT09IHVuZGVmaW5lZDtcblxudmFyIFBBVENIID0gVVBEQVRFU19MQVNUX0lOREVYX1dST05HIHx8IE5QQ0dfSU5DTFVERUQ7XG5cbmlmIChQQVRDSCkge1xuICBwYXRjaGVkRXhlYyA9IGZ1bmN0aW9uIGV4ZWMoc3RyKSB7XG4gICAgdmFyIHJlID0gdGhpcztcbiAgICB2YXIgbGFzdEluZGV4LCByZUNvcHksIG1hdGNoLCBpO1xuXG4gICAgaWYgKE5QQ0dfSU5DTFVERUQpIHtcbiAgICAgIHJlQ29weSA9IG5ldyBSZWdFeHAoJ14nICsgcmUuc291cmNlICsgJyQoPyFcXFxccyknLCByZWdleHBGbGFncy5jYWxsKHJlKSk7XG4gICAgfVxuICAgIGlmIChVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcpIGxhc3RJbmRleCA9IHJlW0xBU1RfSU5ERVhdO1xuXG4gICAgbWF0Y2ggPSBuYXRpdmVFeGVjLmNhbGwocmUsIHN0cik7XG5cbiAgICBpZiAoVVBEQVRFU19MQVNUX0lOREVYX1dST05HICYmIG1hdGNoKSB7XG4gICAgICByZVtMQVNUX0lOREVYXSA9IHJlLmdsb2JhbCA/IG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoIDogbGFzdEluZGV4O1xuICAgIH1cbiAgICBpZiAoTlBDR19JTkNMVURFRCAmJiBtYXRjaCAmJiBtYXRjaC5sZW5ndGggPiAxKSB7XG4gICAgICAvLyBGaXggYnJvd3NlcnMgd2hvc2UgYGV4ZWNgIG1ldGhvZHMgZG9uJ3QgY29uc2lzdGVudGx5IHJldHVybiBgdW5kZWZpbmVkYFxuICAgICAgLy8gZm9yIE5QQ0csIGxpa2UgSUU4LiBOT1RFOiBUaGlzIGRvZXNuJyB3b3JrIGZvciAvKC4/KT8vXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9vcC1mdW5jXG4gICAgICBuYXRpdmVSZXBsYWNlLmNhbGwobWF0Y2hbMF0sIHJlQ29weSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aCAtIDI7IGkrKykge1xuICAgICAgICAgIGlmIChhcmd1bWVudHNbaV0gPT09IHVuZGVmaW5lZCkgbWF0Y2hbaV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBtYXRjaDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwYXRjaGVkRXhlYztcbiIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKSBkZWYoaXQsIFRBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWcgfSk7XG59O1xuIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCJ2YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246IGNvcmUudmVyc2lvbixcbiAgbW9kZTogcmVxdWlyZSgnLi9fbGlicmFyeScpID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMTkgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknXG59KTtcbiIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywgRCkge1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yO1xuICB2YXIgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG1ldGhvZCwgYXJnKSB7XG4gIHJldHVybiAhIW1ldGhvZCAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtY2FsbFxuICAgIGFyZyA/IG1ldGhvZC5jYWxsKG51bGwsIGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSwgMSkgOiBtZXRob2QuY2FsbChudWxsKTtcbiAgfSk7XG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFRPX1NUUklORykge1xuICByZXR1cm4gZnVuY3Rpb24gKHRoYXQsIHBvcykge1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpO1xuICAgIHZhciBpID0gdG9JbnRlZ2VyKHBvcyk7XG4gICAgdmFyIGwgPSBzLmxlbmd0aDtcbiAgICB2YXIgYSwgYjtcbiAgICBpZiAoaSA8IDAgfHwgaSA+PSBsKSByZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG4iLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG4iLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsInZhciBpZCA9IDA7XG52YXIgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuICBpZiAobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSkgZGVmaW5lUHJvcGVydHkoJFN5bWJvbCwgbmFtZSwgeyB2YWx1ZTogd2tzRXh0LmYobmFtZSkgfSk7XG59O1xuIiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7XG4iLCJ2YXIgc3RvcmUgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sO1xudmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciAkc29ydCA9IFtdLnNvcnQ7XG52YXIgdGVzdCA9IFsxLCAyLCAzXTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBJRTgtXG4gIHRlc3Quc29ydCh1bmRlZmluZWQpO1xufSkgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gVjggYnVnXG4gIHRlc3Quc29ydChudWxsKTtcbiAgLy8gT2xkIFdlYktpdFxufSkgfHwgIXJlcXVpcmUoJy4vX3N0cmljdC1tZXRob2QnKSgkc29ydCkpLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMy4yNSBBcnJheS5wcm90b3R5cGUuc29ydChjb21wYXJlZm4pXG4gIHNvcnQ6IGZ1bmN0aW9uIHNvcnQoY29tcGFyZWZuKSB7XG4gICAgcmV0dXJuIGNvbXBhcmVmbiA9PT0gdW5kZWZpbmVkXG4gICAgICA/ICRzb3J0LmNhbGwodG9PYmplY3QodGhpcykpXG4gICAgICA6ICRzb3J0LmNhbGwodG9PYmplY3QodGhpcyksIGFGdW5jdGlvbihjb21wYXJlZm4pKTtcbiAgfVxufSk7XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIEZQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBuYW1lUkUgPSAvXlxccypmdW5jdGlvbiAoW14gKF0qKS87XG52YXIgTkFNRSA9ICduYW1lJztcblxuLy8gMTkuMi40LjIgbmFtZVxuTkFNRSBpbiBGUHJvdG8gfHwgcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiBkUChGUHJvdG8sIE5BTUUsIHtcbiAgY29uZmlndXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuICgnJyArIHRoaXMpLm1hdGNoKG5hbWVSRSlbMV07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIHRlc3QgPSB7fTtcbnRlc3RbcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyldID0gJ3onO1xuaWYgKHRlc3QgKyAnJyAhPSAnW29iamVjdCB6XScpIHtcbiAgcmVxdWlyZSgnLi9fcmVkZWZpbmUnKShPYmplY3QucHJvdG90eXBlLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gJ1tvYmplY3QgJyArIGNsYXNzb2YodGhpcykgKyAnXSc7XG4gIH0sIHRydWUpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHJlZ2V4cEV4ZWMgPSByZXF1aXJlKCcuL19yZWdleHAtZXhlYycpO1xucmVxdWlyZSgnLi9fZXhwb3J0Jykoe1xuICB0YXJnZXQ6ICdSZWdFeHAnLFxuICBwcm90bzogdHJ1ZSxcbiAgZm9yY2VkOiByZWdleHBFeGVjICE9PSAvLi8uZXhlY1xufSwge1xuICBleGVjOiByZWdleHBFeGVjXG59KTtcbiIsIi8vIDIxLjIuNS4zIGdldCBSZWdFeHAucHJvdG90eXBlLmZsYWdzKClcbmlmIChyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmIC8uL2cuZmxhZ3MgIT0gJ2cnKSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mKFJlZ0V4cC5wcm90b3R5cGUsICdmbGFncycsIHtcbiAgY29uZmlndXJhYmxlOiB0cnVlLFxuICBnZXQ6IHJlcXVpcmUoJy4vX2ZsYWdzJylcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGFkdmFuY2VTdHJpbmdJbmRleCA9IHJlcXVpcmUoJy4vX2FkdmFuY2Utc3RyaW5nLWluZGV4Jyk7XG52YXIgcmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4vX3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG5cbi8vIEBAbWF0Y2ggbG9naWNcbnJlcXVpcmUoJy4vX2ZpeC1yZS13a3MnKSgnbWF0Y2gnLCAxLCBmdW5jdGlvbiAoZGVmaW5lZCwgTUFUQ0gsICRtYXRjaCwgbWF5YmVDYWxsTmF0aXZlKSB7XG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUubWF0Y2hgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUubWF0Y2hcbiAgICBmdW5jdGlvbiBtYXRjaChyZWdleHApIHtcbiAgICAgIHZhciBPID0gZGVmaW5lZCh0aGlzKTtcbiAgICAgIHZhciBmbiA9IHJlZ2V4cCA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiByZWdleHBbTUFUQ0hdO1xuICAgICAgcmV0dXJuIGZuICE9PSB1bmRlZmluZWQgPyBmbi5jYWxsKHJlZ2V4cCwgTykgOiBuZXcgUmVnRXhwKHJlZ2V4cClbTUFUQ0hdKFN0cmluZyhPKSk7XG4gICAgfSxcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQG1hdGNoXWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQG1hdGNoXG4gICAgZnVuY3Rpb24gKHJlZ2V4cCkge1xuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZSgkbWF0Y2gsIHJlZ2V4cCwgdGhpcyk7XG4gICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG4gICAgICB2YXIgcnggPSBhbk9iamVjdChyZWdleHApO1xuICAgICAgdmFyIFMgPSBTdHJpbmcodGhpcyk7XG4gICAgICBpZiAoIXJ4Lmdsb2JhbCkgcmV0dXJuIHJlZ0V4cEV4ZWMocngsIFMpO1xuICAgICAgdmFyIGZ1bGxVbmljb2RlID0gcngudW5pY29kZTtcbiAgICAgIHJ4Lmxhc3RJbmRleCA9IDA7XG4gICAgICB2YXIgQSA9IFtdO1xuICAgICAgdmFyIG4gPSAwO1xuICAgICAgdmFyIHJlc3VsdDtcbiAgICAgIHdoaWxlICgocmVzdWx0ID0gcmVnRXhwRXhlYyhyeCwgUykpICE9PSBudWxsKSB7XG4gICAgICAgIHZhciBtYXRjaFN0ciA9IFN0cmluZyhyZXN1bHRbMF0pO1xuICAgICAgICBBW25dID0gbWF0Y2hTdHI7XG4gICAgICAgIGlmIChtYXRjaFN0ciA9PT0gJycpIHJ4Lmxhc3RJbmRleCA9IGFkdmFuY2VTdHJpbmdJbmRleChTLCB0b0xlbmd0aChyeC5sYXN0SW5kZXgpLCBmdWxsVW5pY29kZSk7XG4gICAgICAgIG4rKztcbiAgICAgIH1cbiAgICAgIHJldHVybiBuID09PSAwID8gbnVsbCA6IEE7XG4gICAgfVxuICBdO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpc1JlZ0V4cCA9IHJlcXVpcmUoJy4vX2lzLXJlZ2V4cCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIGFkdmFuY2VTdHJpbmdJbmRleCA9IHJlcXVpcmUoJy4vX2FkdmFuY2Utc3RyaW5nLWluZGV4Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBjYWxsUmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4vX3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG52YXIgcmVnZXhwRXhlYyA9IHJlcXVpcmUoJy4vX3JlZ2V4cC1leGVjJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyICRtaW4gPSBNYXRoLm1pbjtcbnZhciAkcHVzaCA9IFtdLnB1c2g7XG52YXIgJFNQTElUID0gJ3NwbGl0JztcbnZhciBMRU5HVEggPSAnbGVuZ3RoJztcbnZhciBMQVNUX0lOREVYID0gJ2xhc3RJbmRleCc7XG52YXIgTUFYX1VJTlQzMiA9IDB4ZmZmZmZmZmY7XG5cbi8vIGJhYmVsLW1pbmlmeSB0cmFuc3BpbGVzIFJlZ0V4cCgneCcsICd5JykgLT4gL3gveSBhbmQgaXQgY2F1c2VzIFN5bnRheEVycm9yXG52YXIgU1VQUE9SVFNfWSA9ICFmYWlscyhmdW5jdGlvbiAoKSB7IFJlZ0V4cChNQVhfVUlOVDMyLCAneScpOyB9KTtcblxuLy8gQEBzcGxpdCBsb2dpY1xucmVxdWlyZSgnLi9fZml4LXJlLXdrcycpKCdzcGxpdCcsIDIsIGZ1bmN0aW9uIChkZWZpbmVkLCBTUExJVCwgJHNwbGl0LCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgdmFyIGludGVybmFsU3BsaXQ7XG4gIGlmIChcbiAgICAnYWJiYydbJFNQTElUXSgvKGIpKi8pWzFdID09ICdjJyB8fFxuICAgICd0ZXN0J1skU1BMSVRdKC8oPzopLywgLTEpW0xFTkdUSF0gIT0gNCB8fFxuICAgICdhYidbJFNQTElUXSgvKD86YWIpKi8pW0xFTkdUSF0gIT0gMiB8fFxuICAgICcuJ1skU1BMSVRdKC8oLj8pKC4/KS8pW0xFTkdUSF0gIT0gNCB8fFxuICAgICcuJ1skU1BMSVRdKC8oKSgpLylbTEVOR1RIXSA+IDEgfHxcbiAgICAnJ1skU1BMSVRdKC8uPy8pW0xFTkdUSF1cbiAgKSB7XG4gICAgLy8gYmFzZWQgb24gZXM1LXNoaW0gaW1wbGVtZW50YXRpb24sIG5lZWQgdG8gcmV3b3JrIGl0XG4gICAgaW50ZXJuYWxTcGxpdCA9IGZ1bmN0aW9uIChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgICB2YXIgc3RyaW5nID0gU3RyaW5nKHRoaXMpO1xuICAgICAgaWYgKHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkICYmIGxpbWl0ID09PSAwKSByZXR1cm4gW107XG4gICAgICAvLyBJZiBgc2VwYXJhdG9yYCBpcyBub3QgYSByZWdleCwgdXNlIG5hdGl2ZSBzcGxpdFxuICAgICAgaWYgKCFpc1JlZ0V4cChzZXBhcmF0b3IpKSByZXR1cm4gJHNwbGl0LmNhbGwoc3RyaW5nLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgICAgIHZhciBvdXRwdXQgPSBbXTtcbiAgICAgIHZhciBmbGFncyA9IChzZXBhcmF0b3IuaWdub3JlQ2FzZSA/ICdpJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLm11bHRpbGluZSA/ICdtJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLnVuaWNvZGUgPyAndScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci5zdGlja3kgPyAneScgOiAnJyk7XG4gICAgICB2YXIgbGFzdExhc3RJbmRleCA9IDA7XG4gICAgICB2YXIgc3BsaXRMaW1pdCA9IGxpbWl0ID09PSB1bmRlZmluZWQgPyBNQVhfVUlOVDMyIDogbGltaXQgPj4+IDA7XG4gICAgICAvLyBNYWtlIGBnbG9iYWxgIGFuZCBhdm9pZCBgbGFzdEluZGV4YCBpc3N1ZXMgYnkgd29ya2luZyB3aXRoIGEgY29weVxuICAgICAgdmFyIHNlcGFyYXRvckNvcHkgPSBuZXcgUmVnRXhwKHNlcGFyYXRvci5zb3VyY2UsIGZsYWdzICsgJ2cnKTtcbiAgICAgIHZhciBtYXRjaCwgbGFzdEluZGV4LCBsYXN0TGVuZ3RoO1xuICAgICAgd2hpbGUgKG1hdGNoID0gcmVnZXhwRXhlYy5jYWxsKHNlcGFyYXRvckNvcHksIHN0cmluZykpIHtcbiAgICAgICAgbGFzdEluZGV4ID0gc2VwYXJhdG9yQ29weVtMQVNUX0lOREVYXTtcbiAgICAgICAgaWYgKGxhc3RJbmRleCA+IGxhc3RMYXN0SW5kZXgpIHtcbiAgICAgICAgICBvdXRwdXQucHVzaChzdHJpbmcuc2xpY2UobGFzdExhc3RJbmRleCwgbWF0Y2guaW5kZXgpKTtcbiAgICAgICAgICBpZiAobWF0Y2hbTEVOR1RIXSA+IDEgJiYgbWF0Y2guaW5kZXggPCBzdHJpbmdbTEVOR1RIXSkgJHB1c2guYXBwbHkob3V0cHV0LCBtYXRjaC5zbGljZSgxKSk7XG4gICAgICAgICAgbGFzdExlbmd0aCA9IG1hdGNoWzBdW0xFTkdUSF07XG4gICAgICAgICAgbGFzdExhc3RJbmRleCA9IGxhc3RJbmRleDtcbiAgICAgICAgICBpZiAob3V0cHV0W0xFTkdUSF0gPj0gc3BsaXRMaW1pdCkgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlcGFyYXRvckNvcHlbTEFTVF9JTkRFWF0gPT09IG1hdGNoLmluZGV4KSBzZXBhcmF0b3JDb3B5W0xBU1RfSU5ERVhdKys7IC8vIEF2b2lkIGFuIGluZmluaXRlIGxvb3BcbiAgICAgIH1cbiAgICAgIGlmIChsYXN0TGFzdEluZGV4ID09PSBzdHJpbmdbTEVOR1RIXSkge1xuICAgICAgICBpZiAobGFzdExlbmd0aCB8fCAhc2VwYXJhdG9yQ29weS50ZXN0KCcnKSkgb3V0cHV0LnB1c2goJycpO1xuICAgICAgfSBlbHNlIG91dHB1dC5wdXNoKHN0cmluZy5zbGljZShsYXN0TGFzdEluZGV4KSk7XG4gICAgICByZXR1cm4gb3V0cHV0W0xFTkdUSF0gPiBzcGxpdExpbWl0ID8gb3V0cHV0LnNsaWNlKDAsIHNwbGl0TGltaXQpIDogb3V0cHV0O1xuICAgIH07XG4gIC8vIENoYWtyYSwgVjhcbiAgfSBlbHNlIGlmICgnMCdbJFNQTElUXSh1bmRlZmluZWQsIDApW0xFTkdUSF0pIHtcbiAgICBpbnRlcm5hbFNwbGl0ID0gZnVuY3Rpb24gKHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICAgIHJldHVybiBzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCAmJiBsaW1pdCA9PT0gMCA/IFtdIDogJHNwbGl0LmNhbGwodGhpcywgc2VwYXJhdG9yLCBsaW1pdCk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBpbnRlcm5hbFNwbGl0ID0gJHNwbGl0O1xuICB9XG5cbiAgcmV0dXJuIFtcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5zcGxpdGAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5zcGxpdFxuICAgIGZ1bmN0aW9uIHNwbGl0KHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICAgIHZhciBPID0gZGVmaW5lZCh0aGlzKTtcbiAgICAgIHZhciBzcGxpdHRlciA9IHNlcGFyYXRvciA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBzZXBhcmF0b3JbU1BMSVRdO1xuICAgICAgcmV0dXJuIHNwbGl0dGVyICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyBzcGxpdHRlci5jYWxsKHNlcGFyYXRvciwgTywgbGltaXQpXG4gICAgICAgIDogaW50ZXJuYWxTcGxpdC5jYWxsKFN0cmluZyhPKSwgc2VwYXJhdG9yLCBsaW1pdCk7XG4gICAgfSxcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQHNwbGl0XWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHNwbGl0XG4gICAgLy9cbiAgICAvLyBOT1RFOiBUaGlzIGNhbm5vdCBiZSBwcm9wZXJseSBwb2x5ZmlsbGVkIGluIGVuZ2luZXMgdGhhdCBkb24ndCBzdXBwb3J0XG4gICAgLy8gdGhlICd5JyBmbGFnLlxuICAgIGZ1bmN0aW9uIChyZWdleHAsIGxpbWl0KSB7XG4gICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKGludGVybmFsU3BsaXQsIHJlZ2V4cCwgdGhpcywgbGltaXQsIGludGVybmFsU3BsaXQgIT09ICRzcGxpdCk7XG4gICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG5cbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHJlZ2V4cCk7XG4gICAgICB2YXIgUyA9IFN0cmluZyh0aGlzKTtcbiAgICAgIHZhciBDID0gc3BlY2llc0NvbnN0cnVjdG9yKHJ4LCBSZWdFeHApO1xuXG4gICAgICB2YXIgdW5pY29kZU1hdGNoaW5nID0gcngudW5pY29kZTtcbiAgICAgIHZhciBmbGFncyA9IChyeC5pZ25vcmVDYXNlID8gJ2knIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChyeC5tdWx0aWxpbmUgPyAnbScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHJ4LnVuaWNvZGUgPyAndScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKFNVUFBPUlRTX1kgPyAneScgOiAnZycpO1xuXG4gICAgICAvLyBeKD8gKyByeCArICkgaXMgbmVlZGVkLCBpbiBjb21iaW5hdGlvbiB3aXRoIHNvbWUgUyBzbGljaW5nLCB0b1xuICAgICAgLy8gc2ltdWxhdGUgdGhlICd5JyBmbGFnLlxuICAgICAgdmFyIHNwbGl0dGVyID0gbmV3IEMoU1VQUE9SVFNfWSA/IHJ4IDogJ14oPzonICsgcnguc291cmNlICsgJyknLCBmbGFncyk7XG4gICAgICB2YXIgbGltID0gbGltaXQgPT09IHVuZGVmaW5lZCA/IE1BWF9VSU5UMzIgOiBsaW1pdCA+Pj4gMDtcbiAgICAgIGlmIChsaW0gPT09IDApIHJldHVybiBbXTtcbiAgICAgIGlmIChTLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGNhbGxSZWdFeHBFeGVjKHNwbGl0dGVyLCBTKSA9PT0gbnVsbCA/IFtTXSA6IFtdO1xuICAgICAgdmFyIHAgPSAwO1xuICAgICAgdmFyIHEgPSAwO1xuICAgICAgdmFyIEEgPSBbXTtcbiAgICAgIHdoaWxlIChxIDwgUy5sZW5ndGgpIHtcbiAgICAgICAgc3BsaXR0ZXIubGFzdEluZGV4ID0gU1VQUE9SVFNfWSA/IHEgOiAwO1xuICAgICAgICB2YXIgeiA9IGNhbGxSZWdFeHBFeGVjKHNwbGl0dGVyLCBTVVBQT1JUU19ZID8gUyA6IFMuc2xpY2UocSkpO1xuICAgICAgICB2YXIgZTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHogPT09IG51bGwgfHxcbiAgICAgICAgICAoZSA9ICRtaW4odG9MZW5ndGgoc3BsaXR0ZXIubGFzdEluZGV4ICsgKFNVUFBPUlRTX1kgPyAwIDogcSkpLCBTLmxlbmd0aCkpID09PSBwXG4gICAgICAgICkge1xuICAgICAgICAgIHEgPSBhZHZhbmNlU3RyaW5nSW5kZXgoUywgcSwgdW5pY29kZU1hdGNoaW5nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBBLnB1c2goUy5zbGljZShwLCBxKSk7XG4gICAgICAgICAgaWYgKEEubGVuZ3RoID09PSBsaW0pIHJldHVybiBBO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IHoubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICBBLnB1c2goeltpXSk7XG4gICAgICAgICAgICBpZiAoQS5sZW5ndGggPT09IGxpbSkgcmV0dXJuIEE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHEgPSBwID0gZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQS5wdXNoKFMuc2xpY2UocCkpO1xuICAgICAgcmV0dXJuIEE7XG4gICAgfVxuICBdO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG5yZXF1aXJlKCcuL2VzNi5yZWdleHAuZmxhZ3MnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyICRmbGFncyA9IHJlcXVpcmUoJy4vX2ZsYWdzJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgJHRvU3RyaW5nID0gLy4vW1RPX1NUUklOR107XG5cbnZhciBkZWZpbmUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgcmVxdWlyZSgnLi9fcmVkZWZpbmUnKShSZWdFeHAucHJvdG90eXBlLCBUT19TVFJJTkcsIGZuLCB0cnVlKTtcbn07XG5cbi8vIDIxLjIuNS4xNCBSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nKClcbmlmIChyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHsgcmV0dXJuICR0b1N0cmluZy5jYWxsKHsgc291cmNlOiAnYScsIGZsYWdzOiAnYicgfSkgIT0gJy9hL2InOyB9KSkge1xuICBkZWZpbmUoZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgdmFyIFIgPSBhbk9iamVjdCh0aGlzKTtcbiAgICByZXR1cm4gJy8nLmNvbmNhdChSLnNvdXJjZSwgJy8nLFxuICAgICAgJ2ZsYWdzJyBpbiBSID8gUi5mbGFncyA6ICFERVNDUklQVE9SUyAmJiBSIGluc3RhbmNlb2YgUmVnRXhwID8gJGZsYWdzLmNhbGwoUikgOiB1bmRlZmluZWQpO1xuICB9KTtcbi8vIEZGNDQtIFJlZ0V4cCN0b1N0cmluZyBoYXMgYSB3cm9uZyBuYW1lXG59IGVsc2UgaWYgKCR0b1N0cmluZy5uYW1lICE9IFRPX1NUUklORykge1xuICBkZWZpbmUoZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuICR0b1N0cmluZy5jYWxsKHRoaXMpO1xuICB9KTtcbn1cbiIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBNRVRBID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWTtcbnZhciAkZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgd2tzRGVmaW5lID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpO1xudmFyIGVudW1LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBfY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGdPUE5FeHQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbi1leHQnKTtcbnZhciAkR09QRCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJyk7XG52YXIgJEdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyICREUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BEID0gJEdPUEQuZjtcbnZhciBkUCA9ICREUC5mO1xudmFyIGdPUE4gPSBnT1BORXh0LmY7XG52YXIgJFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgJEpTT04gPSBnbG9iYWwuSlNPTjtcbnZhciBfc3RyaW5naWZ5ID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIEhJRERFTiA9IHdrcygnX2hpZGRlbicpO1xudmFyIFRPX1BSSU1JVElWRSA9IHdrcygndG9QcmltaXRpdmUnKTtcbnZhciBpc0VudW0gPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5Jyk7XG52YXIgQWxsU3ltYm9scyA9IHNoYXJlZCgnc3ltYm9scycpO1xudmFyIE9QU3ltYm9scyA9IHNoYXJlZCgnb3Atc3ltYm9scycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0W1BST1RPVFlQRV07XG52YXIgVVNFX05BVElWRSA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbicgJiYgISEkR09QUy5mO1xudmFyIFFPYmplY3QgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIHNldHRlciA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkUCh0aGlzLCAnYScsIHsgdmFsdWU6IDcgfSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbiAoaXQsIGtleSwgRCkge1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYgKHByb3RvRGVzYykgZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIGRQKGl0LCBrZXksIEQpO1xuICBpZiAocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bykgZFAoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBkUDtcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAodGFnKSB7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKSB7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8pICRkZWZpbmVQcm9wZXJ0eShPUFN5bWJvbHMsIGtleSwgRCk7XG4gIGFuT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgYW5PYmplY3QoRCk7XG4gIGlmIChoYXMoQWxsU3ltYm9scywga2V5KSkge1xuICAgIGlmICghRC5lbnVtZXJhYmxlKSB7XG4gICAgICBpZiAoIWhhcyhpdCwgSElEREVOKSkgZFAoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuICAgICAgaXRbSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pIGl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwgeyBlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKSB9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBkUChpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKSB7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgbCA9IGtleXMubGVuZ3RoO1xuICB2YXIga2V5O1xuICB3aGlsZSAobCA+IGkpICRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApIHtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpIHtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKTtcbiAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gIGl0ID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuO1xuICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG4gIGlmIChEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpIEQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgdmFyIG5hbWVzID0gZ09QTih0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSB7XG4gIHZhciBJU19PUCA9IGl0ID09PSBPYmplY3RQcm90bztcbiAgdmFyIG5hbWVzID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIChJU19PUCA/IGhhcyhPYmplY3RQcm90bywga2V5KSA6IHRydWUpKSByZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmICghVVNFX05BVElWRSkge1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCkge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCkgdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3IhJyk7XG4gICAgdmFyIHRhZyA9IHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gICAgdmFyICRzZXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmICh0aGlzID09PSBPYmplY3RQcm90bykgJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYgKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpIHRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgIH07XG4gICAgaWYgKERFU0NSSVBUT1JTICYmIHNldHRlcikgc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiAkc2V0IH0pO1xuICAgIHJldHVybiB3cmFwKHRhZyk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mID0gZ09QTkV4dC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICAkR09QUy5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZiAoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vX2xpYnJhcnknKSkge1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgU3ltYm9sOiAkU3ltYm9sIH0pO1xuXG5mb3IgKHZhciBlczZTeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGogPSAwOyBlczZTeW1ib2xzLmxlbmd0aCA+IGo7KXdrcyhlczZTeW1ib2xzW2orK10pO1xuXG5mb3IgKHZhciB3ZWxsS25vd25TeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgayA9IDA7IHdlbGxLbm93blN5bWJvbHMubGVuZ3RoID4gazspIHdrc0RlZmluZSh3ZWxsS25vd25TeW1ib2xzW2srK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKHN5bSkge1xuICAgIGlmICghaXNTeW1ib2woc3ltKSkgdGhyb3cgVHlwZUVycm9yKHN5bSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuICAgIGZvciAodmFyIGtleSBpbiBTeW1ib2xSZWdpc3RyeSkgaWYgKFN5bWJvbFJlZ2lzdHJ5W2tleV0gPT09IHN5bSkgcmV0dXJuIGtleTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSBmYWxzZTsgfVxufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyBDaHJvbWUgMzggYW5kIDM5IGBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzYCBmYWlscyBvbiBwcmltaXRpdmVzXG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zNDQzXG52YXIgRkFJTFNfT05fUFJJTUlUSVZFUyA9ICRmYWlscyhmdW5jdGlvbiAoKSB7ICRHT1BTLmYoMSk7IH0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIEZBSUxTX09OX1BSSU1JVElWRVMsICdPYmplY3QnLCB7XG4gIGdldE93blByb3BlcnR5U3ltYm9sczogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSB7XG4gICAgcmV0dXJuICRHT1BTLmYodG9PYmplY3QoaXQpKTtcbiAgfVxufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoeyBhOiBTIH0pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KSksICdKU09OJywge1xuICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCkge1xuICAgIHZhciBhcmdzID0gW2l0XTtcbiAgICB2YXIgaSA9IDE7XG4gICAgdmFyIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgICRyZXBsYWNlciA9IHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlcGxhY2VyKSAmJiBpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSkgcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgaWYgKCFpc0FycmF5KHJlcGxhY2VyKSkgcmVwbGFjZXIgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgaWYgKHR5cGVvZiAkcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykgdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmICghaXNTeW1ib2wodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgcmVxdWlyZSgnLi9faGlkZScpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpO1xuIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdhc3luY0l0ZXJhdG9yJyk7XG4iLCIhZnVuY3Rpb24odCl7dmFyIG49e307ZnVuY3Rpb24gZShyKXtpZihuW3JdKXJldHVybiBuW3JdLmV4cG9ydHM7dmFyIGk9bltyXT17aTpyLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIHRbcl0uY2FsbChpLmV4cG9ydHMsaSxpLmV4cG9ydHMsZSksaS5sPSEwLGkuZXhwb3J0c31lLm09dCxlLmM9bixlLmQ9ZnVuY3Rpb24odCxuLHIpe2Uubyh0LG4pfHxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxuLHtlbnVtZXJhYmxlOiEwLGdldDpyfSl9LGUucj1mdW5jdGlvbih0KXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxlLnQ9ZnVuY3Rpb24odCxuKXtpZigxJm4mJih0PWUodCkpLDgmbilyZXR1cm4gdDtpZig0Jm4mJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZ0JiZ0Ll9fZXNNb2R1bGUpcmV0dXJuIHQ7dmFyIHI9T2JqZWN0LmNyZWF0ZShudWxsKTtpZihlLnIociksT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6dH0pLDImbiYmXCJzdHJpbmdcIiE9dHlwZW9mIHQpZm9yKHZhciBpIGluIHQpZS5kKHIsaSxmdW5jdGlvbihuKXtyZXR1cm4gdFtuXX0uYmluZChudWxsLGkpKTtyZXR1cm4gcn0sZS5uPWZ1bmN0aW9uKHQpe3ZhciBuPXQmJnQuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiB0LmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIHR9O3JldHVybiBlLmQobixcImFcIixuKSxufSxlLm89ZnVuY3Rpb24odCxuKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsbil9LGUucD1cIi9hc3NldHMvZmZnL2NvbXBvbmVudHMvdGFicy9cIixlKGUucz0wKX0oW2Z1bmN0aW9uKHQsbixlKXtcInVzZSBzdHJpY3RcIjtlLnIobik7dmFyIHI9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCIsaT17c3ZnOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIix4aHRtbDpyLHhsaW5rOlwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLHhtbDpcImh0dHA6Ly93d3cudzMub3JnL1hNTC8xOTk4L25hbWVzcGFjZVwiLHhtbG5zOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC94bWxucy9cIn0sbz1mdW5jdGlvbih0KXt2YXIgbj10Kz1cIlwiLGU9bi5pbmRleE9mKFwiOlwiKTtyZXR1cm4gZT49MCYmXCJ4bWxuc1wiIT09KG49dC5zbGljZSgwLGUpKSYmKHQ9dC5zbGljZShlKzEpKSxpLmhhc093blByb3BlcnR5KG4pP3tzcGFjZTppW25dLGxvY2FsOnR9OnR9O3ZhciB1PWZ1bmN0aW9uKHQpe3ZhciBuPW8odCk7cmV0dXJuKG4ubG9jYWw/ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMub3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50TlModC5zcGFjZSx0LmxvY2FsKX19OmZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbigpe3ZhciBuPXRoaXMub3duZXJEb2N1bWVudCxlPXRoaXMubmFtZXNwYWNlVVJJO3JldHVybiBlPT09ciYmbi5kb2N1bWVudEVsZW1lbnQubmFtZXNwYWNlVVJJPT09cj9uLmNyZWF0ZUVsZW1lbnQodCk6bi5jcmVhdGVFbGVtZW50TlMoZSx0KX19KShuKX07ZnVuY3Rpb24gYygpe312YXIgYT1mdW5jdGlvbih0KXtyZXR1cm4gbnVsbD09dD9jOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucXVlcnlTZWxlY3Rvcih0KX19O2Z1bmN0aW9uIHMoKXtyZXR1cm5bXX12YXIgbD1mdW5jdGlvbih0KXtyZXR1cm4gbmV3IEFycmF5KHQubGVuZ3RoKX07ZnVuY3Rpb24gZih0LG4pe3RoaXMub3duZXJEb2N1bWVudD10Lm93bmVyRG9jdW1lbnQsdGhpcy5uYW1lc3BhY2VVUkk9dC5uYW1lc3BhY2VVUkksdGhpcy5fbmV4dD1udWxsLHRoaXMuX3BhcmVudD10LHRoaXMuX19kYXRhX189bn1mLnByb3RvdHlwZT17Y29uc3RydWN0b3I6ZixhcHBlbmRDaGlsZDpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5fcGFyZW50Lmluc2VydEJlZm9yZSh0LHRoaXMuX25leHQpfSxpbnNlcnRCZWZvcmU6ZnVuY3Rpb24odCxuKXtyZXR1cm4gdGhpcy5fcGFyZW50Lmluc2VydEJlZm9yZSh0LG4pfSxxdWVyeVNlbGVjdG9yOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9wYXJlbnQucXVlcnlTZWxlY3Rvcih0KX0scXVlcnlTZWxlY3RvckFsbDpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5fcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwodCl9fTt2YXIgaD1cIiRcIjtmdW5jdGlvbiBwKHQsbixlLHIsaSxvKXtmb3IodmFyIHUsYz0wLGE9bi5sZW5ndGgscz1vLmxlbmd0aDtjPHM7KytjKSh1PW5bY10pPyh1Ll9fZGF0YV9fPW9bY10scltjXT11KTplW2NdPW5ldyBmKHQsb1tjXSk7Zm9yKDtjPGE7KytjKSh1PW5bY10pJiYoaVtjXT11KX1mdW5jdGlvbiBkKHQsbixlLHIsaSxvLHUpe3ZhciBjLGEscyxsPXt9LHA9bi5sZW5ndGgsZD1vLmxlbmd0aCxfPW5ldyBBcnJheShwKTtmb3IoYz0wO2M8cDsrK2MpKGE9bltjXSkmJihfW2NdPXM9aCt1LmNhbGwoYSxhLl9fZGF0YV9fLGMsbikscyBpbiBsP2lbY109YTpsW3NdPWEpO2ZvcihjPTA7YzxkOysrYykoYT1sW3M9aCt1LmNhbGwodCxvW2NdLGMsbyldKT8ocltjXT1hLGEuX19kYXRhX189b1tjXSxsW3NdPW51bGwpOmVbY109bmV3IGYodCxvW2NdKTtmb3IoYz0wO2M8cDsrK2MpKGE9bltjXSkmJmxbX1tjXV09PT1hJiYoaVtjXT1hKX1mdW5jdGlvbiBfKHQsbil7cmV0dXJuIHQ8bj8tMTp0Pm4/MTp0Pj1uPzA6TmFOfWZ1bmN0aW9uIHYodCl7cmV0dXJuIGZ1bmN0aW9uKCl7dGhpcy5yZW1vdmVBdHRyaWJ1dGUodCl9fWZ1bmN0aW9uIHkodCl7cmV0dXJuIGZ1bmN0aW9uKCl7dGhpcy5yZW1vdmVBdHRyaWJ1dGVOUyh0LnNwYWNlLHQubG9jYWwpfX1mdW5jdGlvbiBtKHQsbil7cmV0dXJuIGZ1bmN0aW9uKCl7dGhpcy5zZXRBdHRyaWJ1dGUodCxuKX19ZnVuY3Rpb24gZyh0LG4pe3JldHVybiBmdW5jdGlvbigpe3RoaXMuc2V0QXR0cmlidXRlTlModC5zcGFjZSx0LmxvY2FsLG4pfX1mdW5jdGlvbiB3KHQsbil7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGU9bi5hcHBseSh0aGlzLGFyZ3VtZW50cyk7bnVsbD09ZT90aGlzLnJlbW92ZUF0dHJpYnV0ZSh0KTp0aGlzLnNldEF0dHJpYnV0ZSh0LGUpfX1mdW5jdGlvbiBiKHQsbil7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGU9bi5hcHBseSh0aGlzLGFyZ3VtZW50cyk7bnVsbD09ZT90aGlzLnJlbW92ZUF0dHJpYnV0ZU5TKHQuc3BhY2UsdC5sb2NhbCk6dGhpcy5zZXRBdHRyaWJ1dGVOUyh0LnNwYWNlLHQubG9jYWwsZSl9fXZhciB4PWZ1bmN0aW9uKHQpe3JldHVybiB0Lm93bmVyRG9jdW1lbnQmJnQub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlld3x8dC5kb2N1bWVudCYmdHx8dC5kZWZhdWx0Vmlld307ZnVuY3Rpb24gQSh0KXtyZXR1cm4gZnVuY3Rpb24oKXt0aGlzLnN0eWxlLnJlbW92ZVByb3BlcnR5KHQpfX1mdW5jdGlvbiBTKHQsbixlKXtyZXR1cm4gZnVuY3Rpb24oKXt0aGlzLnN0eWxlLnNldFByb3BlcnR5KHQsbixlKX19ZnVuY3Rpb24gTih0LG4sZSl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIHI9bi5hcHBseSh0aGlzLGFyZ3VtZW50cyk7bnVsbD09cj90aGlzLnN0eWxlLnJlbW92ZVByb3BlcnR5KHQpOnRoaXMuc3R5bGUuc2V0UHJvcGVydHkodCxyLGUpfX1mdW5jdGlvbiBFKHQsbil7cmV0dXJuIHQuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuKXx8eCh0KS5nZXRDb21wdXRlZFN0eWxlKHQsbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShuKX1mdW5jdGlvbiBPKHQpe3JldHVybiBmdW5jdGlvbigpe2RlbGV0ZSB0aGlzW3RdfX1mdW5jdGlvbiBQKHQsbil7cmV0dXJuIGZ1bmN0aW9uKCl7dGhpc1t0XT1ufX1mdW5jdGlvbiBDKHQsbil7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGU9bi5hcHBseSh0aGlzLGFyZ3VtZW50cyk7bnVsbD09ZT9kZWxldGUgdGhpc1t0XTp0aGlzW3RdPWV9fWZ1bmN0aW9uIEwodCl7cmV0dXJuIHQudHJpbSgpLnNwbGl0KC9efFxccysvKX1mdW5jdGlvbiBqKHQpe3JldHVybiB0LmNsYXNzTGlzdHx8bmV3IE0odCl9ZnVuY3Rpb24gTSh0KXt0aGlzLl9ub2RlPXQsdGhpcy5fbmFtZXM9TCh0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiKX1mdW5jdGlvbiBUKHQsbil7Zm9yKHZhciBlPWoodCkscj0tMSxpPW4ubGVuZ3RoOysrcjxpOyllLmFkZChuW3JdKX1mdW5jdGlvbiBJKHQsbil7Zm9yKHZhciBlPWoodCkscj0tMSxpPW4ubGVuZ3RoOysrcjxpOyllLnJlbW92ZShuW3JdKX1mdW5jdGlvbiBxKHQpe3JldHVybiBmdW5jdGlvbigpe1QodGhpcyx0KX19ZnVuY3Rpb24gQih0KXtyZXR1cm4gZnVuY3Rpb24oKXtJKHRoaXMsdCl9fWZ1bmN0aW9uIEQodCxuKXtyZXR1cm4gZnVuY3Rpb24oKXsobi5hcHBseSh0aGlzLGFyZ3VtZW50cyk/VDpJKSh0aGlzLHQpfX1NLnByb3RvdHlwZT17YWRkOmZ1bmN0aW9uKHQpe3RoaXMuX25hbWVzLmluZGV4T2YodCk8MCYmKHRoaXMuX25hbWVzLnB1c2godCksdGhpcy5fbm9kZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLHRoaXMuX25hbWVzLmpvaW4oXCIgXCIpKSl9LHJlbW92ZTpmdW5jdGlvbih0KXt2YXIgbj10aGlzLl9uYW1lcy5pbmRleE9mKHQpO24+PTAmJih0aGlzLl9uYW1lcy5zcGxpY2UobiwxKSx0aGlzLl9ub2RlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsdGhpcy5fbmFtZXMuam9pbihcIiBcIikpKX0sY29udGFpbnM6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX25hbWVzLmluZGV4T2YodCk+PTB9fTtmdW5jdGlvbiBrKCl7dGhpcy50ZXh0Q29udGVudD1cIlwifWZ1bmN0aW9uIEgodCl7cmV0dXJuIGZ1bmN0aW9uKCl7dGhpcy50ZXh0Q29udGVudD10fX1mdW5jdGlvbiBSKHQpe3JldHVybiBmdW5jdGlvbigpe3ZhciBuPXQuYXBwbHkodGhpcyxhcmd1bWVudHMpO3RoaXMudGV4dENvbnRlbnQ9bnVsbD09bj9cIlwiOm59fWZ1bmN0aW9uIFUoKXt0aGlzLmlubmVySFRNTD1cIlwifWZ1bmN0aW9uIFYodCl7cmV0dXJuIGZ1bmN0aW9uKCl7dGhpcy5pbm5lckhUTUw9dH19ZnVuY3Rpb24geih0KXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgbj10LmFwcGx5KHRoaXMsYXJndW1lbnRzKTt0aGlzLmlubmVySFRNTD1udWxsPT1uP1wiXCI6bn19ZnVuY3Rpb24gWCgpe3RoaXMubmV4dFNpYmxpbmcmJnRoaXMucGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh0aGlzKX1mdW5jdGlvbiAkKCl7dGhpcy5wcmV2aW91c1NpYmxpbmcmJnRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpcyx0aGlzLnBhcmVudE5vZGUuZmlyc3RDaGlsZCl9ZnVuY3Rpb24gRigpe3JldHVybiBudWxsfWZ1bmN0aW9uIEcoKXt2YXIgdD10aGlzLnBhcmVudE5vZGU7dCYmdC5yZW1vdmVDaGlsZCh0aGlzKX1mdW5jdGlvbiBKKCl7cmV0dXJuIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpcy5jbG9uZU5vZGUoITEpLHRoaXMubmV4dFNpYmxpbmcpfWZ1bmN0aW9uIEsoKXtyZXR1cm4gdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLmNsb25lTm9kZSghMCksdGhpcy5uZXh0U2libGluZyl9dmFyIFE9e30sVz1udWxsO1widW5kZWZpbmVkXCIhPXR5cGVvZiBkb2N1bWVudCYmKFwib25tb3VzZWVudGVyXCJpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnR8fChRPXttb3VzZWVudGVyOlwibW91c2VvdmVyXCIsbW91c2VsZWF2ZTpcIm1vdXNlb3V0XCJ9KSk7ZnVuY3Rpb24gWSh0LG4sZSl7cmV0dXJuIHQ9Wih0LG4sZSksZnVuY3Rpb24obil7dmFyIGU9bi5yZWxhdGVkVGFyZ2V0O2UmJihlPT09dGhpc3x8OCZlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKHRoaXMpKXx8dC5jYWxsKHRoaXMsbil9fWZ1bmN0aW9uIFoodCxuLGUpe3JldHVybiBmdW5jdGlvbihyKXt2YXIgaT1XO1c9cjt0cnl7dC5jYWxsKHRoaXMsdGhpcy5fX2RhdGFfXyxuLGUpfWZpbmFsbHl7Vz1pfX19ZnVuY3Rpb24gdHQodCl7cmV0dXJuIHQudHJpbSgpLnNwbGl0KC9efFxccysvKS5tYXAoZnVuY3Rpb24odCl7dmFyIG49XCJcIixlPXQuaW5kZXhPZihcIi5cIik7cmV0dXJuIGU+PTAmJihuPXQuc2xpY2UoZSsxKSx0PXQuc2xpY2UoMCxlKSkse3R5cGU6dCxuYW1lOm59fSl9ZnVuY3Rpb24gbnQodCl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIG49dGhpcy5fX29uO2lmKG4pe2Zvcih2YXIgZSxyPTAsaT0tMSxvPW4ubGVuZ3RoO3I8bzsrK3IpZT1uW3JdLHQudHlwZSYmZS50eXBlIT09dC50eXBlfHxlLm5hbWUhPT10Lm5hbWU/blsrK2ldPWU6dGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGUudHlwZSxlLmxpc3RlbmVyLGUuY2FwdHVyZSk7KytpP24ubGVuZ3RoPWk6ZGVsZXRlIHRoaXMuX19vbn19fWZ1bmN0aW9uIGV0KHQsbixlKXt2YXIgcj1RLmhhc093blByb3BlcnR5KHQudHlwZSk/WTpaO3JldHVybiBmdW5jdGlvbihpLG8sdSl7dmFyIGMsYT10aGlzLl9fb24scz1yKG4sbyx1KTtpZihhKWZvcih2YXIgbD0wLGY9YS5sZW5ndGg7bDxmOysrbClpZigoYz1hW2xdKS50eXBlPT09dC50eXBlJiZjLm5hbWU9PT10Lm5hbWUpcmV0dXJuIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihjLnR5cGUsYy5saXN0ZW5lcixjLmNhcHR1cmUpLHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihjLnR5cGUsYy5saXN0ZW5lcj1zLGMuY2FwdHVyZT1lKSx2b2lkKGMudmFsdWU9bik7dGhpcy5hZGRFdmVudExpc3RlbmVyKHQudHlwZSxzLGUpLGM9e3R5cGU6dC50eXBlLG5hbWU6dC5uYW1lLHZhbHVlOm4sbGlzdGVuZXI6cyxjYXB0dXJlOmV9LGE/YS5wdXNoKGMpOnRoaXMuX19vbj1bY119fWZ1bmN0aW9uIHJ0KHQsbixlKXt2YXIgcj14KHQpLGk9ci5DdXN0b21FdmVudDtcImZ1bmN0aW9uXCI9PXR5cGVvZiBpP2k9bmV3IGkobixlKTooaT1yLmRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiRXZlbnRcIiksZT8oaS5pbml0RXZlbnQobixlLmJ1YmJsZXMsZS5jYW5jZWxhYmxlKSxpLmRldGFpbD1lLmRldGFpbCk6aS5pbml0RXZlbnQobiwhMSwhMSkpLHQuZGlzcGF0Y2hFdmVudChpKX12YXIgaXQ9W251bGxdO2Z1bmN0aW9uIG90KHQsbil7dGhpcy5fZ3JvdXBzPXQsdGhpcy5fcGFyZW50cz1ufWZ1bmN0aW9uIHV0KCl7cmV0dXJuIG5ldyBvdChbW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudF1dLGl0KX1vdC5wcm90b3R5cGU9dXQucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpvdCxzZWxlY3Q6ZnVuY3Rpb24odCl7XCJmdW5jdGlvblwiIT10eXBlb2YgdCYmKHQ9YSh0KSk7Zm9yKHZhciBuPXRoaXMuX2dyb3VwcyxlPW4ubGVuZ3RoLHI9bmV3IEFycmF5KGUpLGk9MDtpPGU7KytpKWZvcih2YXIgbyx1LGM9bltpXSxzPWMubGVuZ3RoLGw9cltpXT1uZXcgQXJyYXkocyksZj0wO2Y8czsrK2YpKG89Y1tmXSkmJih1PXQuY2FsbChvLG8uX19kYXRhX18sZixjKSkmJihcIl9fZGF0YV9fXCJpbiBvJiYodS5fX2RhdGFfXz1vLl9fZGF0YV9fKSxsW2ZdPXUpO3JldHVybiBuZXcgb3Qocix0aGlzLl9wYXJlbnRzKX0sc2VsZWN0QWxsOmZ1bmN0aW9uKHQpe3ZhciBuO1wiZnVuY3Rpb25cIiE9dHlwZW9mIHQmJih0PW51bGw9PShuPXQpP3M6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5xdWVyeVNlbGVjdG9yQWxsKG4pfSk7Zm9yKHZhciBlPXRoaXMuX2dyb3VwcyxyPWUubGVuZ3RoLGk9W10sbz1bXSx1PTA7dTxyOysrdSlmb3IodmFyIGMsYT1lW3VdLGw9YS5sZW5ndGgsZj0wO2Y8bDsrK2YpKGM9YVtmXSkmJihpLnB1c2godC5jYWxsKGMsYy5fX2RhdGFfXyxmLGEpKSxvLnB1c2goYykpO3JldHVybiBuZXcgb3QoaSxvKX0sZmlsdGVyOmZ1bmN0aW9uKHQpe3ZhciBuO1wiZnVuY3Rpb25cIiE9dHlwZW9mIHQmJihuPXQsdD1mdW5jdGlvbigpe3JldHVybiB0aGlzLm1hdGNoZXMobil9KTtmb3IodmFyIGU9dGhpcy5fZ3JvdXBzLHI9ZS5sZW5ndGgsaT1uZXcgQXJyYXkociksbz0wO288cjsrK28pZm9yKHZhciB1LGM9ZVtvXSxhPWMubGVuZ3RoLHM9aVtvXT1bXSxsPTA7bDxhOysrbCkodT1jW2xdKSYmdC5jYWxsKHUsdS5fX2RhdGFfXyxsLGMpJiZzLnB1c2godSk7cmV0dXJuIG5ldyBvdChpLHRoaXMuX3BhcmVudHMpfSxkYXRhOmZ1bmN0aW9uKHQsbil7aWYoIXQpcmV0dXJuIHY9bmV3IEFycmF5KHRoaXMuc2l6ZSgpKSxsPS0xLHRoaXMuZWFjaChmdW5jdGlvbih0KXt2WysrbF09dH0pLHY7dmFyIGUscj1uP2Q6cCxpPXRoaXMuX3BhcmVudHMsbz10aGlzLl9ncm91cHM7XCJmdW5jdGlvblwiIT10eXBlb2YgdCYmKGU9dCx0PWZ1bmN0aW9uKCl7cmV0dXJuIGV9KTtmb3IodmFyIHU9by5sZW5ndGgsYz1uZXcgQXJyYXkodSksYT1uZXcgQXJyYXkodSkscz1uZXcgQXJyYXkodSksbD0wO2w8dTsrK2wpe3ZhciBmPWlbbF0saD1vW2xdLF89aC5sZW5ndGgsdj10LmNhbGwoZixmJiZmLl9fZGF0YV9fLGwsaSkseT12Lmxlbmd0aCxtPWFbbF09bmV3IEFycmF5KHkpLGc9Y1tsXT1uZXcgQXJyYXkoeSk7cihmLGgsbSxnLHNbbF09bmV3IEFycmF5KF8pLHYsbik7Zm9yKHZhciB3LGIseD0wLEE9MDt4PHk7Kyt4KWlmKHc9bVt4XSl7Zm9yKHg+PUEmJihBPXgrMSk7IShiPWdbQV0pJiYrK0E8eTspO3cuX25leHQ9Ynx8bnVsbH19cmV0dXJuKGM9bmV3IG90KGMsaSkpLl9lbnRlcj1hLGMuX2V4aXQ9cyxjfSxlbnRlcjpmdW5jdGlvbigpe3JldHVybiBuZXcgb3QodGhpcy5fZW50ZXJ8fHRoaXMuX2dyb3Vwcy5tYXAobCksdGhpcy5fcGFyZW50cyl9LGV4aXQ6ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IG90KHRoaXMuX2V4aXR8fHRoaXMuX2dyb3Vwcy5tYXAobCksdGhpcy5fcGFyZW50cyl9LGpvaW46ZnVuY3Rpb24odCxuLGUpe3ZhciByPXRoaXMuZW50ZXIoKSxpPXRoaXMsbz10aGlzLmV4aXQoKTtyZXR1cm4gcj1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Qocik6ci5hcHBlbmQodCtcIlwiKSxudWxsIT1uJiYoaT1uKGkpKSxudWxsPT1lP28ucmVtb3ZlKCk6ZShvKSxyJiZpP3IubWVyZ2UoaSkub3JkZXIoKTppfSxtZXJnZTpmdW5jdGlvbih0KXtmb3IodmFyIG49dGhpcy5fZ3JvdXBzLGU9dC5fZ3JvdXBzLHI9bi5sZW5ndGgsaT1lLmxlbmd0aCxvPU1hdGgubWluKHIsaSksdT1uZXcgQXJyYXkociksYz0wO2M8bzsrK2MpZm9yKHZhciBhLHM9bltjXSxsPWVbY10sZj1zLmxlbmd0aCxoPXVbY109bmV3IEFycmF5KGYpLHA9MDtwPGY7KytwKShhPXNbcF18fGxbcF0pJiYoaFtwXT1hKTtmb3IoO2M8cjsrK2MpdVtjXT1uW2NdO3JldHVybiBuZXcgb3QodSx0aGlzLl9wYXJlbnRzKX0sb3JkZXI6ZnVuY3Rpb24oKXtmb3IodmFyIHQ9dGhpcy5fZ3JvdXBzLG49LTEsZT10Lmxlbmd0aDsrK248ZTspZm9yKHZhciByLGk9dFtuXSxvPWkubGVuZ3RoLTEsdT1pW29dOy0tbz49MDspKHI9aVtvXSkmJih1JiY0XnIuY29tcGFyZURvY3VtZW50UG9zaXRpb24odSkmJnUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUocix1KSx1PXIpO3JldHVybiB0aGlzfSxzb3J0OmZ1bmN0aW9uKHQpe2Z1bmN0aW9uIG4obixlKXtyZXR1cm4gbiYmZT90KG4uX19kYXRhX18sZS5fX2RhdGFfXyk6IW4tIWV9dHx8KHQ9Xyk7Zm9yKHZhciBlPXRoaXMuX2dyb3VwcyxyPWUubGVuZ3RoLGk9bmV3IEFycmF5KHIpLG89MDtvPHI7KytvKXtmb3IodmFyIHUsYz1lW29dLGE9Yy5sZW5ndGgscz1pW29dPW5ldyBBcnJheShhKSxsPTA7bDxhOysrbCkodT1jW2xdKSYmKHNbbF09dSk7cy5zb3J0KG4pfXJldHVybiBuZXcgb3QoaSx0aGlzLl9wYXJlbnRzKS5vcmRlcigpfSxjYWxsOmZ1bmN0aW9uKCl7dmFyIHQ9YXJndW1lbnRzWzBdO3JldHVybiBhcmd1bWVudHNbMF09dGhpcyx0LmFwcGx5KG51bGwsYXJndW1lbnRzKSx0aGlzfSxub2RlczpmdW5jdGlvbigpe3ZhciB0PW5ldyBBcnJheSh0aGlzLnNpemUoKSksbj0tMTtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dFsrK25dPXRoaXN9KSx0fSxub2RlOmZ1bmN0aW9uKCl7Zm9yKHZhciB0PXRoaXMuX2dyb3VwcyxuPTAsZT10Lmxlbmd0aDtuPGU7KytuKWZvcih2YXIgcj10W25dLGk9MCxvPXIubGVuZ3RoO2k8bzsrK2kpe3ZhciB1PXJbaV07aWYodSlyZXR1cm4gdX1yZXR1cm4gbnVsbH0sc2l6ZTpmdW5jdGlvbigpe3ZhciB0PTA7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpeysrdH0pLHR9LGVtcHR5OmZ1bmN0aW9uKCl7cmV0dXJuIXRoaXMubm9kZSgpfSxlYWNoOmZ1bmN0aW9uKHQpe2Zvcih2YXIgbj10aGlzLl9ncm91cHMsZT0wLHI9bi5sZW5ndGg7ZTxyOysrZSlmb3IodmFyIGksbz1uW2VdLHU9MCxjPW8ubGVuZ3RoO3U8YzsrK3UpKGk9b1t1XSkmJnQuY2FsbChpLGkuX19kYXRhX18sdSxvKTtyZXR1cm4gdGhpc30sYXR0cjpmdW5jdGlvbih0LG4pe3ZhciBlPW8odCk7aWYoYXJndW1lbnRzLmxlbmd0aDwyKXt2YXIgcj10aGlzLm5vZGUoKTtyZXR1cm4gZS5sb2NhbD9yLmdldEF0dHJpYnV0ZU5TKGUuc3BhY2UsZS5sb2NhbCk6ci5nZXRBdHRyaWJ1dGUoZSl9cmV0dXJuIHRoaXMuZWFjaCgobnVsbD09bj9lLmxvY2FsP3k6djpcImZ1bmN0aW9uXCI9PXR5cGVvZiBuP2UubG9jYWw/Yjp3OmUubG9jYWw/ZzptKShlLG4pKX0sc3R5bGU6ZnVuY3Rpb24odCxuLGUpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPjE/dGhpcy5lYWNoKChudWxsPT1uP0E6XCJmdW5jdGlvblwiPT10eXBlb2Ygbj9OOlMpKHQsbixudWxsPT1lP1wiXCI6ZSkpOkUodGhpcy5ub2RlKCksdCl9LHByb3BlcnR5OmZ1bmN0aW9uKHQsbil7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg+MT90aGlzLmVhY2goKG51bGw9PW4/TzpcImZ1bmN0aW9uXCI9PXR5cGVvZiBuP0M6UCkodCxuKSk6dGhpcy5ub2RlKClbdF19LGNsYXNzZWQ6ZnVuY3Rpb24odCxuKXt2YXIgZT1MKHQrXCJcIik7aWYoYXJndW1lbnRzLmxlbmd0aDwyKXtmb3IodmFyIHI9aih0aGlzLm5vZGUoKSksaT0tMSxvPWUubGVuZ3RoOysraTxvOylpZighci5jb250YWlucyhlW2ldKSlyZXR1cm4hMTtyZXR1cm4hMH1yZXR1cm4gdGhpcy5lYWNoKChcImZ1bmN0aW9uXCI9PXR5cGVvZiBuP0Q6bj9xOkIpKGUsbikpfSx0ZXh0OmZ1bmN0aW9uKHQpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoP3RoaXMuZWFjaChudWxsPT10P2s6KFwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/UjpIKSh0KSk6dGhpcy5ub2RlKCkudGV4dENvbnRlbnR9LGh0bWw6ZnVuY3Rpb24odCl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/dGhpcy5lYWNoKG51bGw9PXQ/VTooXCJmdW5jdGlvblwiPT10eXBlb2YgdD96OlYpKHQpKTp0aGlzLm5vZGUoKS5pbm5lckhUTUx9LHJhaXNlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZWFjaChYKX0sbG93ZXI6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lYWNoKCQpfSxhcHBlbmQ6ZnVuY3Rpb24odCl7dmFyIG49XCJmdW5jdGlvblwiPT10eXBlb2YgdD90OnUodCk7cmV0dXJuIHRoaXMuc2VsZWN0KGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuYXBwZW5kQ2hpbGQobi5hcHBseSh0aGlzLGFyZ3VtZW50cykpfSl9LGluc2VydDpmdW5jdGlvbih0LG4pe3ZhciBlPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dDp1KHQpLHI9bnVsbD09bj9GOlwiZnVuY3Rpb25cIj09dHlwZW9mIG4/bjphKG4pO3JldHVybiB0aGlzLnNlbGVjdChmdW5jdGlvbigpe3JldHVybiB0aGlzLmluc2VydEJlZm9yZShlLmFwcGx5KHRoaXMsYXJndW1lbnRzKSxyLmFwcGx5KHRoaXMsYXJndW1lbnRzKXx8bnVsbCl9KX0scmVtb3ZlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZWFjaChHKX0sY2xvbmU6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc2VsZWN0KHQ/SzpKKX0sZGF0dW06ZnVuY3Rpb24odCl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/dGhpcy5wcm9wZXJ0eShcIl9fZGF0YV9fXCIsdCk6dGhpcy5ub2RlKCkuX19kYXRhX199LG9uOmZ1bmN0aW9uKHQsbixlKXt2YXIgcixpLG89dHQodCtcIlwiKSx1PW8ubGVuZ3RoO2lmKCEoYXJndW1lbnRzLmxlbmd0aDwyKSl7Zm9yKGM9bj9ldDpudCxudWxsPT1lJiYoZT0hMSkscj0wO3I8dTsrK3IpdGhpcy5lYWNoKGMob1tyXSxuLGUpKTtyZXR1cm4gdGhpc312YXIgYz10aGlzLm5vZGUoKS5fX29uO2lmKGMpZm9yKHZhciBhLHM9MCxsPWMubGVuZ3RoO3M8bDsrK3MpZm9yKHI9MCxhPWNbc107cjx1OysrcilpZigoaT1vW3JdKS50eXBlPT09YS50eXBlJiZpLm5hbWU9PT1hLm5hbWUpcmV0dXJuIGEudmFsdWV9LGRpc3BhdGNoOmZ1bmN0aW9uKHQsbil7cmV0dXJuIHRoaXMuZWFjaCgoXCJmdW5jdGlvblwiPT10eXBlb2Ygbj9mdW5jdGlvbih0LG4pe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBydCh0aGlzLHQsbi5hcHBseSh0aGlzLGFyZ3VtZW50cykpfX06ZnVuY3Rpb24odCxuKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gcnQodGhpcyx0LG4pfX0pKHQsbikpfX07dmFyIGN0PWZ1bmN0aW9uKHQpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0P25ldyBvdChbW2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodCldXSxbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XSk6bmV3IG90KFtbdF1dLGl0KX0sYXQ9MDtmdW5jdGlvbiBzdCgpe3RoaXMuXz1cIkBcIisoKythdCkudG9TdHJpbmcoMzYpfXN0LnByb3RvdHlwZT1mdW5jdGlvbigpe3JldHVybiBuZXcgc3R9LnByb3RvdHlwZT17Y29uc3RydWN0b3I6c3QsZ2V0OmZ1bmN0aW9uKHQpe2Zvcih2YXIgbj10aGlzLl87IShuIGluIHQpOylpZighKHQ9dC5wYXJlbnROb2RlKSlyZXR1cm47cmV0dXJuIHRbbl19LHNldDpmdW5jdGlvbih0LG4pe3JldHVybiB0W3RoaXMuX109bn0scmVtb3ZlOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl8gaW4gdCYmZGVsZXRlIHRbdGhpcy5fXX0sdG9TdHJpbmc6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ffX07ZS5kKG4sXCJkZWZhdWx0XCIsZnVuY3Rpb24oKXtyZXR1cm4gZ3R9KTt2YXIgbHQ9e3NlbGVjdDpjdCxzZWxlY3RBbGw6ZnVuY3Rpb24odCl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHQ/bmV3IG90KFtkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHQpXSxbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XSk6bmV3IG90KFtudWxsPT10P1tdOnRdLGl0KX19LGZ0PVwiU0VDVElPTlwiLGh0PVwiYWNjb3JkaW9uX19oZWFkaW5nXCIscHQ9XCJhY2NvcmRpb24tLW9wZW5cIixkdD1cImNnLXRhYnNfX2NvbnRhaW5lclwiLF90PVwiY2ctdGFic19fdGFiXCI7ZnVuY3Rpb24gdnQodCxuKXt2YXIgZSxyLGk9dC5zZWxlY3RBbGwoXCIuXCIrX3QpO2kub24oXCJjbGlja1wiLGZ1bmN0aW9uKCl7aS5jbGFzc2VkKFwiYWN0aXZlXCIsITEpLHQuc2VsZWN0KFwiLmFjdGl2ZVwiKS5jbGFzc2VkKFwiYWN0aXZlXCIsITEpLChlPWx0LnNlbGVjdCh0aGlzKSkuY2xhc3NlZChcImFjdGl2ZVwiLCEwKSx0LnNlbGVjdChlLmF0dHIoXCJ0YWJTZWxlY3RvclwiKSkuY2xhc3NlZChcImFjdGl2ZVwiLCEwKSxuLnNlbGVjdGVkVGFiSWR4PWUuYXR0cihcInRhYklkeFwiKX0pLHI9bi5zZWxlY3RlZFRhYklkeHx8MCxpLl9ncm91cHNbMF1bcl0uY2xpY2soKX1mdW5jdGlvbiB5dCh0LG4pe3ZhciBlLHI9dC5pbnNlcnQoXCJkaXZcIixcIjpmaXJzdC1jaGlsZFwiKTtyLmNsYXNzZWQoZHQsITApO2Zvcih2YXIgaT0wLG89bi50YWJzLmxlbmd0aDtpPG87aSsrKWU9bi50YWJzW2ldLHIuYXBwZW5kKFwiYnV0dG9uXCIpLmNsYXNzZWQoX3QsITApLmF0dHIoXCJ0YWJTZWxlY3RvclwiLGUuc2VsZWN0b3IpLmF0dHIoXCJ0YWJJZHhcIixpKS5hcHBlbmQoXCJkaXZcIikudGV4dChlLm5hbWUpfWZ1bmN0aW9uIG10KHQsbixlKXt0LnBhcmVudE5vZGUuY2xhc3NOYW1lLm1hdGNoKHB0KSYmKHl0KG4sZSksdnQobixlKSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbigpe3RoaXMucGFyZW50Tm9kZS5jbGFzc05hbWUubWF0Y2gocHQpPyh5dChuLGUpLHZ0KG4sZSkpOihmdW5jdGlvbih0KXt0LnNlbGVjdChcIi5cIi5jb25jYXQoZHQpKS5yZW1vdmUoKX0obiksZnVuY3Rpb24odCl7dC5zZWxlY3RBbGwoXCIuYWN0aXZlXCIpLmNsYXNzZWQoXCJhY3RpdmVcIiwhMSl9KG4pKX0pfWZ1bmN0aW9uIGd0KHQsbil7dmFyIGU9bHQuc2VsZWN0KHQpLHI9bixpPXIudGFicztpZihlJiZpJiZpLmxlbmd0aCl7dmFyIG89ZnVuY3Rpb24odCl7Zm9yKHZhciBuPXQubm9kZSgpLnBhcmVudE5vZGU7biYmbi5ub2RlTmFtZSE9PWZ0OyluPW4ucGFyZW50Tm9kZTtyZXR1cm4gbiYmKG49bHQuc2VsZWN0KG4pLnNlbGVjdChcIi5cIi5jb25jYXQoaHQpKS5ub2RlKCkpLG59KGUpO28/bXQobyxlLHIpOih5dChlLHIpLHZ0KGUscikpfX19XSk7IiwiaW1wb3J0IGluaXRUYWJzIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvdGFicy90YWJzJztcclxuXHJcbmNvbnN0IHRhYkNvbnRhaW5lciA9ICcjc3VycGx1c0NvbXBvbmVudCcsXHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgICAgYWNjZXNzaWJpbGl0eUF0dHJpYnV0ZXM6IHtcclxuICAgICAgICAgICAgdGl0bGU6ICcyMDE5IEZlZGVyYWwgRGVmaWNpdCBUcmVuZHMgb3ZlciBUaW1lJyxcclxuICAgICAgICAgICAgZGVzYzogJ0luIDIwMDAgYW5kIDIwMDEgdGhlIGZlZGVyYWwgZ292ZXJubWVudCBleHBlcmllbmNlZCBzdXJwbHVzZXMgb2YgJDIzNyBiaWxsaW9uIGFuZCAkMTI3IGJpbGxpb24gcmVzcGVjdGl2ZWx5LiBTaW5jZSAyMDAxLCB0aGUgZmVkZXJhbCBnb3Zlcm5tZW50IGhhcyBub3QgaGFkIGFub3RoZXIgc3VycGx1cy4gV2hpbGUgdGhlIGFubnVhbCBkZWZpY2l0IGRpZCBub3QgZXhjZWVkICQ1MDAgYmlsbGlvbiBmcm9tIDIwMDIgdG8gMjAwOCwgdGhlIGFubnVhbCBkZWZpY2l0IGluY3JlYXNlZCBzdWJzdGFudGlhbGx5IGluIHJlc3BvbnNlIHRvIHRoZSBHcmVhdCBSZWNlc3Npb24gd2l0aCBhbm51YWwgZGVmaWNpdHMgZXhjZWVkaW5nICQxIHRyaWxsaW9uIGZyb20gMjAwOSB0byAyMDEyLiBUaGUgYW5udWFsIGRlZmljaXQgZGVjbGluZWQgZnJvbSAyMDEyIHRvIDIwMTUsIGZhbGxpbmcgYmVsb3cgdGhlICQ1MDAgYmlsbGlvbiBtYXJrIGluIDIwMTUuIFNpbmNlIHRoZW4sIGhvd2V2ZXIsIHRoZSBhbm51YWwgZGVmaWNpdCBoYXMgZ3Jvd24gZWFjaCB5ZWFyIHRvICQ5ODQgYmlsbGlvbiBpbiAyMDE5LidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRhYnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1N1cnBsdXMnLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcuZGVmaWNpdC0tc3VycGx1c19fc3VycGx1cydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0JhbGFuY2VkIEJ1ZGdldCcsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJy5kZWZpY2l0LS1zdXJwbHVzX19iYWxhbmNlZCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0RlZmljaXQnLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcuZGVmaWNpdC0tc3VycGx1c19fZGVmaWNpdCdcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgc2VsZWN0ZWRUYWJJZHggOiAwXHJcbiAgICB9O1xyXG5cclxuaW5pdFRhYnModGFiQ29udGFpbmVyLCBjb25maWcpOyJdLCJzb3VyY2VSb290IjoiIn0=