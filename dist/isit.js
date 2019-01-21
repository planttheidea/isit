(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("isit", [], factory);
	else if(typeof exports === 'object')
		exports["isit"] = factory();
	else
		root["isit"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/arithmetic.js":
/*!***************************!*\
  !*** ./src/arithmetic.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.multiParamFunctions = exports.isitWithin = exports.isitUnder = exports.isitPositive = exports.isitOver = exports.isitOdd = exports.isitNegative = exports.isitInteger = exports.isitInfinite = exports.isitFinite = exports.isitEven = exports.isitEqual = exports.isitDecimal = exports.isitBelow = exports.isitAbove = undefined;

var _type = __webpack_require__(/*! ./type */ "./src/type.js");

var EPSILON = Number.EPSILON || 2.220446049250313e-16;
var GET_OWN_PROPERTY_NAMES = Object.getOwnPropertyNames;

/**
 * Checks to see if object is higher in value than a minimum numeric value
 *
 * @param {any} object
 * @param {number} minimumValue
 * @returns {boolean}
 */
var isitAbove = exports.isitAbove = function isitAbove(object, minimumValue) {
  if (!(0, _type.isitNumber)(object) || !(0, _type.isitNumber)(minimumValue)) {
    return false;
  }

  return object > minimumValue;
};

/**
 * Checks to see if object is lower in value than a maximum numeric value
 *
 * @param {any} object
 * @param {number} maximumValue
 * @returns {boolean}
 */
var isitBelow = exports.isitBelow = function isitBelow(object, maximumValue) {
  if (!(0, _type.isitNumber)(object) || !(0, _type.isitNumber)(maximumValue)) {
    return false;
  }

  return object < maximumValue;
};

/**
 * Checks to see if object is a decimal (meaning float)
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitDecimal = exports.isitDecimal = function isitDecimal(object) {
  return (0, _type.isitNumber)(object) && object % 1 !== 0;
};

/**
 * Checks to see if objects are of the same type and equal in value,
 * which is checked deeply for objects and arrays
 *
 * @param {any} object1
 * @param {any} object2
 * @returns {boolean}
 */
var isitEqual = exports.isitEqual = function isitEqual(object1, object2) {
  if (!(0, _type.isitSameType)(object1, object2)) {
    return false;
  }

  if ((0, _type.isitUndefined)(object1)) {
    return (0, _type.isitUndefined)(object2);
  }

  if ((0, _type.isitNull)(object1)) {
    return (0, _type.isitNull)(object2);
  }

  if (isitDecimal(object1)) {
    return Math.abs(object1 - object2) < EPSILON;
  }

  if ((0, _type.isitNumber)(object1)) {
    return object1 === object2 && 1 / object1 === 1 / object2;
  }

  if ((0, _type.isitString)(object1) || (0, _type.isitRegExp)(object1)) {
    return '' + object1 === '' + object2;
  }

  if ((0, _type.isitBoolean)(object1)) {
    return object1 === object2;
  }

  if ((0, _type.isitArray)(object1)) {
    if (object1.length !== object2.length) {
      return false;
    }

    for (var index = 0, length = object1.length; index < length; index++) {
      if (!isitEqual(object1[index], object2[index])) {
        return false;
      }
    }

    return true;
  }

  if ((0, _type.isitObject)(object1)) {
    var object1Properties = GET_OWN_PROPERTY_NAMES(object1);
    var object2Properties = GET_OWN_PROPERTY_NAMES(object2);

    if (!isitEqual(object1Properties, object2Properties)) {
      return false;
    }

    for (var _index = 0, _length = object1Properties.length; _index < _length; _index++) {
      if (!isitEqual(object1[_index], object2[_index])) {
        return false;
      }
    }

    return true;
  }

  return false;
};

/**
 * Checks if object is an even integer
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitEven = exports.isitEven = function isitEven(object) {
  return (0, _type.isitNumber)(object) && object % 2 === 0;
};

/**
 * Checks to see if object is not either positive or negative Infinity
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitFinite = exports.isitFinite = function isitFinite(object) {
  return object !== Number.POSITIVE_INFINITY && object !== Number.NEGATIVE_INFINITY && !(0, _type.isitNaN)(object);
};

/**
 * Checks to see if object is either positive or negative Infinity
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitInfinite = exports.isitInfinite = function isitInfinite(object) {
  return !isitFinite(object);
};

/**
 * Checks to see if object is an integer
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitInteger = exports.isitInteger = function isitInteger(object) {
  return (0, _type.isitNumber)(object) && object % 1 === 0;
};

/**
 * Checks to see if object is a negative number
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitNegative = exports.isitNegative = function isitNegative(object) {
  return (0, _type.isitNumber)(object) && object < 0;
};

/**
 * Checks to see if object is an odd integer
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitOdd = exports.isitOdd = function isitOdd(object) {
  return (0, _type.isitNumber)(object) && object % 2 === 1;
};

/**
 * Alias for isitAbove
 *
 * @type {function()}
 */
var isitOver = exports.isitOver = isitAbove;

/**
 * Checks to see if object is a positive number
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitPositive = exports.isitPositive = function isitPositive(object) {
  return (0, _type.isitNumber)(object) && object > 0;
};

/**
 * Alias for isitBelow
 *
 * @type {function()}
 */
var isitUnder = exports.isitUnder = isitBelow;

/**
 * Checks to see if object is a numeric value is at least the
 * minimum numeric value, and is at most the maximum numeric value
 *
 * @param {any} object
 * @param {number} minimum
 * @param {number} maximum
 * @returns {boolean}
 */
var isitWithin = exports.isitWithin = function isitWithin(object, minimum, maximum) {
  return (0, _type.isitNumber)(object) && (0, _type.isitNumber)(minimum) && (0, _type.isitNumber)(maximum) && object >= minimum && object <= maximum;
};

/**
 * Functions we don't want to appear in any or all
 */
var multiParamFunctions = exports.multiParamFunctions = ['above', 'below', 'equal', 'under', 'within'];

exports.default = {
  above: isitAbove,
  below: isitBelow,
  decimal: isitDecimal,
  equal: isitEqual,
  even: isitEven,
  finite: isitFinite,
  infinite: isitInfinite,
  integer: isitInteger,
  negative: isitNegative,
  odd: isitOdd,
  over: isitOver,
  positive: isitPositive,
  under: isitUnder,
  within: isitWithin
};

/***/ }),

/***/ "./src/array.js":
/*!**********************!*\
  !*** ./src/array.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.multiParamFunctions = exports.isitSorted = exports.isitInArray = undefined;

var _type = __webpack_require__(/*! ./type */ "./src/type.js");

var checkSortedAsc = function checkSortedAsc(array) {
  for (var index = 0, length = array.length; index < length; index++) {
    var current = array[index];
    var next = array[index + 1];

    if (typeof next !== 'undefined' && current > next) {
      return false;
    }
  }

  return true;
};

var checkSortedDesc = function checkSortedDesc(array) {
  for (var index = array.length; index--;) {
    var current = array[index];
    var next = array[index - 1];

    if (typeof next !== 'undefined' && current > next) {
      return false;
    }
  }

  return true;
};

/**
 * Checks to see if item exists as a value in
 * the object array
 *
 * @param {any} object
 * @param {any} item
 * @returns {boolean}
 */
var isitInArray = exports.isitInArray = function isitInArray(object, item) {
  return (0, _type.isitArray)(object) && object.indexOf(item) !== -1;
};

/**
 * Checks to see if the object array is already sorted
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitSorted = exports.isitSorted = function isitSorted(object) {
  if (!(0, _type.isitArray)(object)) {
    return false;
  }

  var shallowClone = [].concat(object);

  shallowClone.sort();

  return checkSortedAsc(object, shallowClone) || checkSortedDesc(object, shallowClone);
};

/**
 * Functions we dont want to show up in any or all
 */
var multiParamFunctions = exports.multiParamFunctions = ['inArray'];

exports.default = {
  inArray: isitInArray,
  sorted: isitSorted
};

/***/ }),

/***/ "./src/environment.js":
/*!****************************!*\
  !*** ./src/environment.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/**
 * Make sure window and navigator exists, else all will blow up
 */
var HAS_WINDOW = typeof window !== 'undefined';
var NAVIGATOR_IN_WINDOW = HAS_WINDOW && 'navigator' in window;

/**
 * Returns property from navigator object exists, else returns false
 *
 * @param {string} property
 * @returns {boolean|string}
 */
var hasNavigatorProperty = function hasNavigatorProperty(property) {
  return NAVIGATOR_IN_WINDOW && property in navigator && navigator[property].toLowerCase();
};

/**
 * Used in pretty much all the checkers
 */
var USER_AGENT = hasNavigatorProperty('userAgent');
var VENDOR = hasNavigatorProperty('vendor');
var APP_VERSION = hasNavigatorProperty('appVersion');

/**
 * RegExps used for testing
 */
var ANDROID_REGEXP = /android/i;
var APPLE_COMPUTER_REGEXP = /apple computer/i;
var APPLE_WEBKIT_REGEXP = /applewebkit/i;
var BB10_REGEXP = /BB10/i;
var BLACKBERRY_REGEXP = /blackberry/i;
var CHROME_REGEXP = /chrome/i;
var CHROME_OR_CHROMIUM_REGEXP = /chrome|chromium/i;
var EDGE_REGEXP = /edge/i;
var FIREFOX_REGEXP = /firefox/i;
var GECKO_REGEXP = /gecko/i;
var GOOGLE_INC_REGEXP = /google inc/i;
var IPAD_REGEXP = /ipad/i;
var IPHONE_REGEXP = /iphone/i;
var IPOD_REGEXP = /ipod/i;
var LIKE_GECKO_REGEXP = /like gecko/i;
var LINUX_REGEXP = /linux/i;
var MAC_REGEXP = /mac/i;
var MOBILE_REGEXP = /mobile/i;
var MSIE_REGEXP = /msie/i;
var OPERA_LEGACY_REGEXP = /^Opera\//;
var OPERA_MODERN_REGEXP = /\x20OPR\//;
var PHONE_REGEXP = /phone/i;
var RV11_REGEXP = /rv:11/;
var SAFARI_REGEXP = /safari/i;
var TOUCH_REGEXP = /touch/i;
var TRIDENT_REGEXP = /trident/i;
var UNIX_REGEXP = /X11/;
var WIN_REGEXP = /win/i;
var WINDOWS_NT_REGEXP = /windows nt/i;

/**
 * Checks if device used is running on Android
 *
 * @param {string} userAgent
 * @returns {boolean}
 */
var isitAndroid = exports.isitAndroid = function isitAndroid() {
  var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : USER_AGENT;
  return ANDROID_REGEXP.test(userAgent);
};

/**
 * Checks if device used is running on Android and a mobile phone
 *
 * @param {string} userAgent
 * @returns {boolean}
 */
var isitAndroidPhone = exports.isitAndroidPhone = function isitAndroidPhone() {
  var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : USER_AGENT;
  return isitAndroid(userAgent) && MOBILE_REGEXP.test(userAgent);
};

/**
 * Checks if device used is running on Android and a mobile phone
 *
 * @param {string} userAgent
 * @returns {boolean}
 */
var isitAndroidTablet = exports.isitAndroidTablet = function isitAndroidTablet() {
  var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : USER_AGENT;
  return isitAndroid(userAgent) && !MOBILE_REGEXP.test(userAgent);
};

/**
 * Checks if device used is a Blackberry
 *
 * @param {string} userAgent
 * @returns {boolean}
 */
var isitBlackberry = exports.isitBlackberry = function isitBlackberry() {
  var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : USER_AGENT;
  return BLACKBERRY_REGEXP.test(userAgent) || BB10_REGEXP.test(userAgent);
};

/**
 * Checks if the browser is using the blink rendering engine
 *
 * @param {string} userAgent
 * @returns {boolean}
 */
var isitBlink = exports.isitBlink = function isitBlink() {
  var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : USER_AGENT;
  return CHROME_REGEXP.test(userAgent);
};

/**
 * Checks if you are running in a browser
 *
 * @returns {boolean}
 */
var isitBrowser = exports.isitBrowser = function isitBrowser() {
  return typeof window !== 'undefined';
};

/**
 * Checks if the browser used is Google Chrome
 *
 * @param {string} userAgent
 * @param {string} vendor
 * @returns {boolean}
 */
var isitChrome = exports.isitChrome = function isitChrome() {
  var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : USER_AGENT;
  var vendor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : VENDOR;
  return CHROME_OR_CHROMIUM_REGEXP.test(userAgent) && GOOGLE_INC_REGEXP.test(vendor);
};

/**
 * Checks if device used is an iPad
 *
 * @param {string} userAgent
 * @returns {boolean}
 */
var isitIpad = exports.isitIpad = function isitIpad() {
  var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : USER_AGENT;
  return IPAD_REGEXP.test(userAgent);
};

/**
 * Checks if device used is an iPhone
 *
 * @param {string} userAgent
 * @returns {boolean}
 */
var isitIphone = exports.isitIphone = function isitIphone() {
  var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : USER_AGENT;
  return IPHONE_REGEXP.test(userAgent) && !IPOD_REGEXP.test(userAgent);
};

/**
 * Checks if device used is an iPod
 *
 * @param {string} userAgent
 * @returns {boolean}
 */
var isitIpod = exports.isitIpod = function isitIpod() {
  var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : USER_AGENT;
  return IPOD_REGEXP.test(userAgent);
};

/**
 * Checks if operating system used is iOS
 *
 * @param {string} userAgent
 * @returns {boolean}
 */
var isitIos = exports.isitIos = function isitIos() {
  var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : USER_AGENT;
  return isitIpad(userAgent) || isitIphone(userAgent) || isitIpod(userAgent);
};

/**
 * Checks if operating system used is Windows-based
 *
 * @param {string} appVersion
 * @returns {boolean}
 */
var isitWindows = exports.isitWindows = function isitWindows() {
  var appVersion = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : APP_VERSION;
  return WIN_REGEXP.test(appVersion);
};

/**
 * Checks if deviced used is a Windows phone
 *
 * @param {string} userAgent
 * @param {string} appVersion
 * @returns {boolean}
 */
var isitWindowsPhone = exports.isitWindowsPhone = function isitWindowsPhone() {
  var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : USER_AGENT;
  var appVersion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : APP_VERSION;
  return isitWindows(appVersion) && PHONE_REGEXP.test(userAgent);
};

/**
 * Checks if device used is a Windows tablet
 *
 * @param {string} userAgent
 * @param {string} appVersion
 * @returns {boolean}
 */
var isitWindowsTablet = exports.isitWindowsTablet = function isitWindowsTablet() {
  var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : USER_AGENT;
  var appVersion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : APP_VERSION;
  return isitWindows(appVersion) && !isitWindowsPhone(userAgent, appVersion) && TOUCH_REGEXP.test(userAgent);
};

/**
 * Checks if device used is a mobile device (phone or tablet)
 *
 * @param {string} userAgent
 * @returns {boolean}
 */
var isitMobile = exports.isitMobile = function isitMobile() {
  var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : USER_AGENT;
  return isitIphone(userAgent) || isitIpad(userAgent) || isitAndroidPhone(userAgent) || isitWindowsPhone(userAgent) || isitIpod(userAgent) || isitBlackberry(userAgent);
};

/**
 * Checks if device used is a tablet
 *
 * @param {string} userAgent
 * @param {string} appVersion
 * @returns {boolean}
 */
var isitTablet = exports.isitTablet = function isitTablet() {
  var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : USER_AGENT;
  var appVersion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : APP_VERSION;
  return isitIpad(userAgent) || isitAndroidTablet(userAgent) || isitWindowsTablet(userAgent, appVersion);
};

/**
 * Checks if the device used is a desktop
 *
 * @param {string} userAgent
 * @returns {boolean}
 */
var isitDesktop = exports.isitDesktop = function isitDesktop() {
  var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : USER_AGENT;
  return !isitMobile(userAgent) && !isitTablet(userAgent);
};

/**
 * Checks if the browser used is Microsoft Edge
 *
 * @param {string} userAgent
 * @returns {boolean}
 */
var isitEdge = exports.isitEdge = function isitEdge() {
  var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : USER_AGENT;
  return EDGE_REGEXP.test(userAgent);
};

/**
 * Checks if the browser used is Mozilla Firefox
 *
 * @param {string} userAgent
 * @returns {boolean}
 */
var isitFirefox = exports.isitFirefox = function isitFirefox() {
  var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : USER_AGENT;
  return FIREFOX_REGEXP.test(userAgent);
};

/**
 * Checks if the rendering agent used is Gecko
 *
 * @param {string} userAgent
 * @returns {boolean}
 */
var isitGecko = exports.isitGecko = function isitGecko() {
  var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : USER_AGENT;
  return GECKO_REGEXP.test(userAgent) && !LIKE_GECKO_REGEXP.test(userAgent);
};

/**
 * Checks if the browser used is Internet Explorer,
 * and optionally checks if it is a specific version
 *
 * @param {number|string} version
 * @param {string} userAgent
 * @returns {boolean}
 */
var isitIe = exports.isitIe = function isitIe(version) {
  var userAgent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : USER_AGENT;

  if (!version) {
    return MSIE_REGEXP.test(userAgent) || WINDOWS_NT_REGEXP.test(userAgent) && RV11_REGEXP.test(userAgent);
  }

  /**
   * the reason for the fallback is because IE11 is weird, in that
   * only certain versions contained MSIE in its user agent
   */
  return new RegExp('msie ' + version, 'i').test(userAgent) || WINDOWS_NT_REGEXP.test(userAgent) && RV11_REGEXP.test(userAgent);
};

/**
 * Checks if operating system used is Linux-based
 *
 * @param {string} appVersion
 * @returns {boolean}
 */
var isitLinux = exports.isitLinux = function isitLinux() {
  var appVersion = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : APP_VERSION;
  return LINUX_REGEXP.test(appVersion) || UNIX_REGEXP.test(appVersion);
};

/**
 * Checks if operating system used is Mac-based
 *
 * @param {string} appVersion
 * @returns {boolean}
 */
var isitMac = exports.isitMac = function isitMac() {
  var appVersion = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : APP_VERSION;
  return MAC_REGEXP.test(appVersion);
};

/**
 * Checks if environment code is running in is node.js
 *
 * @returns {boolean}
 */
var isitNode = exports.isitNode = function isitNode() {
  return !isitBrowser();
};

/**
 * Checks if your browser is currently offline
 *
 * @returns {boolean}
 */
var isitOnline = exports.isitOnline = function isitOnline() {
  return NAVIGATOR_IN_WINDOW && navigator.onLine;
};

/**
 * Checks if your browser is currently online
 *
 * @returns {boolean}
 */
var isitOffline = exports.isitOffline = function isitOffline() {
  return !isitOnline();
};

/**
 * Checks if browser used is Opera
 *
 * @param {string} userAgent
 * @returns {boolean}
 */
var isitOpera = exports.isitOpera = function isitOpera() {
  var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : USER_AGENT;
  return (
    // Opera 12 and older versions
    OPERA_LEGACY_REGEXP.test(userAgent)
    // Opera 15+
    || OPERA_MODERN_REGEXP.test(userAgent)
  );
};

/**
 * Checks if rendering engine used is Presto,
 * which basically amounts to being legacy Opera
 *
 * @param {string} userAgent
 * @returns {boolean}
 */
var isitPresto = exports.isitPresto = function isitPresto() {
  var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : USER_AGENT;
  return OPERA_LEGACY_REGEXP.test(userAgent);
};

/**
 * Checks if browser used is Safari
 *
 * @param {string} userAgent
 * @param {string} vendor
 * @returns {boolean}
 */
var isitSafari = exports.isitSafari = function isitSafari() {
  var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : USER_AGENT;
  var vendor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : VENDOR;
  return SAFARI_REGEXP.test(userAgent) && APPLE_COMPUTER_REGEXP.test(vendor);
};

/**
 * Checks if rendering engine used is Trident
 *
 * @param {string} userAgent
 * @returns {boolean}
 */
var isitTrident = exports.isitTrident = function isitTrident() {
  var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : USER_AGENT;
  return TRIDENT_REGEXP.test(userAgent) || /msie [6-9]/i.test(userAgent);
};

/**
 * Checks if device and browser used supports touch
 *
 * @returns {boolean}
 */
var isitTouchDevice = exports.isitTouchDevice = function isitTouchDevice() {
  return HAS_WINDOW && 'ontouchstart' in window || 'DocumentTouch' in window && document instanceof window.DocumentTouch;
};

/**
 * Checks if rendering engine used is Webkit
 *
 * @param {string} userAgent
 * @returns {boolean}
 */
var isitWebkit = exports.isitWebkit = function isitWebkit() {
  var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : USER_AGENT;
  return APPLE_WEBKIT_REGEXP.test(userAgent);
};

exports.default = {
  android: isitAndroid,
  androidPhone: isitAndroidPhone,
  androidTablet: isitAndroidTablet,
  blackberry: isitBlackberry,
  blink: isitBlink,
  browser: isitBrowser,
  chrome: isitChrome,
  desktop: isitDesktop,
  edge: isitEdge,
  firefox: isitFirefox,
  gecko: isitGecko,
  ie: isitIe,
  ios: isitIos,
  ipad: isitIpad,
  iphone: isitIphone,
  ipod: isitIpod,
  linux: isitLinux,
  mac: isitMac,
  mobile: isitMobile,
  node: isitNode,
  offline: isitOffline,
  online: isitOnline,
  opera: isitOpera,
  presto: isitPresto,
  safari: isitSafari,
  tablet: isitTablet,
  touchDevice: isitTouchDevice,
  trident: isitTrident,
  webkit: isitWebkit,
  windows: isitWindows,
  windowsPhone: isitWindowsPhone,
  windowsTablet: isitWindowsTablet
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _arithmetic = __webpack_require__(/*! ./arithmetic */ "./src/arithmetic.js");

var _arithmetic2 = _interopRequireDefault(_arithmetic);

var _array = __webpack_require__(/*! ./array */ "./src/array.js");

var _array2 = _interopRequireDefault(_array);

var _environment = __webpack_require__(/*! ./environment */ "./src/environment.js");

var _environment2 = _interopRequireDefault(_environment);

var _object = __webpack_require__(/*! ./object */ "./src/object.js");

var _object2 = _interopRequireDefault(_object);

var _presence = __webpack_require__(/*! ./presence */ "./src/presence.js");

var _presence2 = _interopRequireDefault(_presence);

var _regexp = __webpack_require__(/*! ./regexp */ "./src/regexp.js");

var _regexp2 = _interopRequireDefault(_regexp);

var _string = __webpack_require__(/*! ./string */ "./src/string.js");

var _string2 = _interopRequireDefault(_string);

var _time = __webpack_require__(/*! ./time */ "./src/time.js");

var _time2 = _interopRequireDefault(_time);

var _type = __webpack_require__(/*! ./type */ "./src/type.js");

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get exclude all the multi-parameter functions and all environment functions
 * from being included in the all or any loop
 */
var noAllOrAnyFunctions = [].concat(_arithmetic.multiParamFunctions, _array.multiParamFunctions, Object.keys(_environment2.default).map(function (key) {
  return key;
}), _object.multiParamFunctions, _string.multiParamFunctions, _time.multiParamFunctions);

/**
 * If parameters is an array with a single item, and the first item is itself an array,
 * return the array item, else return the array itself
 *
 * @param {Array} parameters
 * @returns {Array}
 */
var getAnyAllObjectParameters = function getAnyAllObjectParameters(parameters) {
  if (parameters.length === 1 && (0, _type.isitArray)(parameters[0])) {
    return parameters[0];
  }

  return parameters;
};

/**
 * Check if all arguments passed return true to function it relates to
 *
 * @param {Function} func
 * @returns {Function}
 */
var isitAll = function isitAll(func) {
  return function () {
    for (var _len = arguments.length, objects = Array(_len), _key = 0; _key < _len; _key++) {
      objects[_key] = arguments[_key];
    }

    objects = getAnyAllObjectParameters(objects);

    for (var index = 0, length = objects.length; index < length; index++) {
      if (!func(objects[index])) {
        return false;
      }
    }

    return true;
  };
};

/**
 * Check if any of the arguments passed return true to function it relates to
 *
 * @param {Function} func
 * @returns {Function}
 */
var isitAny = function isitAny(func) {
  return function () {
    for (var _len2 = arguments.length, objects = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      objects[_key2] = arguments[_key2];
    }

    objects = getAnyAllObjectParameters(objects);

    for (var index = 0, length = objects.length; index < length; index++) {
      if (func(objects[index])) {
        return true;
      }
    }

    return false;
  };
};

/**
 * Check if the func applied to the object returns false
 *
 * @param {Function} func
 * @returns {Function}
 */
var isitNot = function isitNot(func) {
  return function () {
    return !func.apply(undefined, arguments);
  };
};

var isit = _extends({}, _type2.default, _presence2.default, _regexp2.default, _string2.default, _arithmetic2.default, _object2.default, _array2.default, _environment2.default, _time2.default),
    all = {},
    any = {},
    not = {};

/**
 * Apply appropriate keys to all, any, and not
 */
for (var key in isit) {
  var isitFunction = isit[key];

  if (noAllOrAnyFunctions.indexOf(key) === -1) {
    all[key] = isitAll(isitFunction);
    any[key] = isitAny(isitFunction);
  }

  not[key] = isitNot(isitFunction);
}

isit.all = all;
isit.any = any;
isit.not = not;

/**
 * Shim for old functionality, as no longer needed
 *
 * @returns {object}
 */
isit.setNamespace = function () {
  return undefined;
};

exports.default = isit;
module.exports = exports['default'];

/***/ }),

/***/ "./src/object.js":
/*!***********************!*\
  !*** ./src/object.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.multiParamFunctions = exports.isitWindowObject = exports.isitPropertyDefined = exports.isitPropertyCount = exports.isitJquery = exports.isitDomNodeList = exports.isitDomNode = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _type = __webpack_require__(/*! ./type */ "./src/type.js");

var toString = Object.prototype.toString;

var NODE_LIST_REGEXP = /^\[object (HTMLCollection|NodeList)\]$/;

/**
 * Checks if object is an HTML element
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitDomNode = exports.isitDomNode = function isitDomNode(object) {
  return !(0, _type.isitUndefined)(object) && !(0, _type.isitNull)(object) && object.nodeType > 0;
};

/**
 * Checks if object is an HTMLCollection, for example
 * returned isArrayFrom document.querySelectorAll
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitDomNodeList = exports.isitDomNodeList = function isitDomNodeList(object) {
  return !(0, _type.isitUndefined)(object) && !(0, _type.isitNull)(object) && NODE_LIST_REGEXP.test(toString.call(object));
};

/**
 * Checks if object is a jQuery object
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitJquery = exports.isitJquery = function isitJquery(object) {
  if ((0, _type.isitFunction)(object)) {
    var $object = object();

    return (0, _type.isitObject)($object) && !!$object.jquery;
  }

  return !!Object.getPrototypeOf(object).jquery;
};

/**
 * Checks if the number of keys in the object object
 * equals the count numeric value
 *
 * @param {any} object
 * @param {number} count
 * @returns {boolean}
 */
var isitPropertyCount = exports.isitPropertyCount = function isitPropertyCount(object, count) {
  if (!(0, _type.isitObject)(object) || !(0, _type.isitNumber)(count)) {
    return false;
  }

  return Object.keys(object).length === count;
};

/**
 * Checks if the object object has the property property
 * (tell me that wasn't fun to read)
 *
 * @param {any} object
 * @param {any} property
 * @returns {*}
 */
var isitPropertyDefined = exports.isitPropertyDefined = function isitPropertyDefined(object, property) {
  return (0, _type.isitObject)(object) && object.hasOwnProperty(property);
};

/**
 * Checks if the object is the window
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitWindowObject = exports.isitWindowObject = function isitWindowObject(object) {
  return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && 'setInterval' in object;
};

/**
 * Functions we don't want to show up in any or all
 */
var multiParamFunctions = exports.multiParamFunctions = ['propertyCount', 'propertyDefined'];

exports.default = {
  domNode: isitDomNode,
  domNodeList: isitDomNodeList,
  jquery: isitJquery,
  propertyCount: isitPropertyCount,
  propertyDefined: isitPropertyDefined,
  windowObject: isitWindowObject
};

/***/ }),

/***/ "./src/presence.js":
/*!*************************!*\
  !*** ./src/presence.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isitTruthy = exports.isitSpace = exports.isitFalsy = exports.isitExisty = exports.isitEmpty = exports.isitWhitespace = undefined;

var _type = __webpack_require__(/*! ./type */ "./src/type.js");

var WHITESPACE_REGEXP = /^\s\s*/;

/**
 * Checks to see if object is solely whitespace (has no character values)
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitWhitespace = exports.isitWhitespace = function isitWhitespace(object) {
  return WHITESPACE_REGEXP.test(object);
};

/**
 * Checks to see if the object is empty from a deep value perspective
 *  - if an array, checks if it has a length
 *  - if an object, checks to see if there are any propertyies on it
 *  - if regex, looks at the string value to determine if its an empty regex
 *  - if arguments, checks if length exists after being converted to an array
 *  - if undefined, null, or whitespace
 *  - if the conversion of the object via .toString() is empty
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitEmpty = exports.isitEmpty = function isitEmpty(object) {
  if ((0, _type.isitArray)(object)) {
    return object.length === 0;
  }

  if ((0, _type.isitObject)(object)) {
    var propertyNames = Object.getOwnPropertyNames(object);

    return propertyNames.length === 0;
  }

  if ((0, _type.isitRegExp)(object)) {
    var objectString = object.toString();

    return objectString === '/(?:)/' || objectString === '//';
  }

  if ((0, _type.isitArguments)(object)) {
    return Array.prototype.slice.call(object).length === 0;
  }

  return (0, _type.isitUndefined)(object) || (0, _type.isitNull)(object) || isitWhitespace(object) || object.toString() === '';
};

/**
 * Checks to see if the object is not undefined and not null
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitExisty = exports.isitExisty = function isitExisty(object) {
  return object !== undefined && object !== null;
};

/**
 * Checks to see if object is falsy based on classic JavaScript rules
 *  - undefined
 *  - null
 *  - 0
 *  - ''
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitFalsy = exports.isitFalsy = function isitFalsy(object) {
  return !object;
};

/**
 * Checks to see if object is equal to a single empty space
 * (legacy from previous version, better function to use is .whitespace())
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitSpace = exports.isitSpace = function isitSpace(object) {
  return object === ' ';
};

/**
 * Checks to see if object is truthy based on classic JavaScript rules
 * - not undefined
 * - not null
 * - !-- 0
 * - string with length
 * - not NaN
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitTruthy = exports.isitTruthy = function isitTruthy(object) {
  return isitExisty(object) && object !== false && !(0, _type.isitNaN)(object) && object !== '' && object !== 0;
};

exports.default = {
  empty: isitEmpty,
  existy: isitExisty,
  falsy: isitFalsy,
  space: isitSpace,
  truthy: isitTruthy,
  whitespace: isitWhitespace
};

/***/ }),

/***/ "./src/regexp.js":
/*!***********************!*\
  !*** ./src/regexp.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
// regex values to test a variety of values

// Steven Levithan, Jan Goyvaerts: Regular Expressions Cookbook
// Scott Gonzalez: Email address validation

// eppPhone match extensible provisioning protocol format
// nanpPhone match north american number plan format
// dateString match m/d/yy and mm/dd/yyyy, allowing any combination of one or two digits for the day and month, and two
// or four digits for the year
// time match hours, minutes, and seconds, 24-hour clock

/* eslint-disable max-len */
var regexps = {
  affirmative: /^(?:1|t(?:rue)?|y(?:es)?|ok(?:ay)?)$/,
  alphaNumeric: /^[A-Za-z0-9]+$/,
  caPostalCode: /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]\s?[0-9][A-Z][0-9]$/,
  creditCard: /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/,
  dateString: /^(1[0-2]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\/(?:[0-9]{2})?[0-9]{2}$/,
  email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
  eppPhone: /^\+[0-9]{1,3}\.[0-9]{4,14}(?:x.+)?$/,
  hexColor: /^#[0-9a-f]{3}(?:[0-9a-f]{3})?$/,
  hexadecimal: /^[0-9a-fA-F]+$/,
  ip: /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
  ipv4: /^(?:(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/,
  ipv6: /^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
  isoDateString: /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])-?[1-7]|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s](([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)?(\15([0-5]\d))?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/,
  nanpPhone: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
  socialSecurityNumber: /^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/,
  timeString: /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$/,
  ukPostCode: /^[A-Z]{1,2}[0-9RCHNQ][0-9A-Z]?\s?[0-9][ABD-HJLNP-UW-Z]{2}$|^[A-Z]{2}-?[0-9]{4}$/,
  url: /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i,
  usZipCode: /^[0-9]{5}(?:-[0-9]{4})?$/
};
/* eslint-enable */

/**
 * Checks to see if object is affirmative
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitAffirmative = exports.isitAffirmative = function isitAffirmative(object) {
  return regexps.affirmative.test(object);
};

/**
 * Checks to see if object is alphanumeric
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitAlphaNumeric = exports.isitAlphaNumeric = function isitAlphaNumeric(object) {
  return regexps.alphaNumeric.test(object);
};

/**
 * Checks to see if object is a valid Canadian postale code
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitCaPostalCode = exports.isitCaPostalCode = function isitCaPostalCode(object) {
  return regexps.caPostalCode.test(object);
};

/**
 * Checks to see if object is a valid credit card number
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitCreditCard = exports.isitCreditCard = function isitCreditCard(object) {
  return regexps.creditCard.test(object);
};

/**
 * Checks to see if object is a valid date string
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitDateString = exports.isitDateString = function isitDateString(object) {
  return regexps.dateString.test(object);
};

/**
 * Checks to see if object is a valid email address
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitEmail = exports.isitEmail = function isitEmail(object) {
  return regexps.email.test(object);
};

/**
 * Checks to see if object is a valid EPP phone number
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitEppPhone = exports.isitEppPhone = function isitEppPhone(object) {
  return regexps.eppPhone.test(object);
};

/**
 * Checks to see if object is a valid hexadecimal
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitHexadecimal = exports.isitHexadecimal = function isitHexadecimal(object) {
  return regexps.hexadecimal.test(object);
};

/**
 * Checks to see if object is a valid hex color
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitHexColor = exports.isitHexColor = function isitHexColor(object) {
  return regexps.hexColor.test(object);
};

/**
 * Checks to see if object is a valid IP address
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitIpAddress = exports.isitIpAddress = function isitIpAddress(object) {
  return regexps.ip.test(object);
};

/**
 * Checks to see if object is a valid IPv4 address
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitIpv4Address = exports.isitIpv4Address = function isitIpv4Address(object) {
  return regexps.ipv4.test(object);
};

/**
 * Checks to see if object is a valid IPv6 address
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitIpv6Address = exports.isitIpv6Address = function isitIpv6Address(object) {
  return regexps.ipv6.test(object);
};

/**
 * Checks to see if object is a valid ISO date string
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitIsoDateString = exports.isitIsoDateString = function isitIsoDateString(object) {
  return regexps.isoDateString.test(object);
};

/**
 * Checks to see if object is a valid NANP phone address
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitNanpPhone = exports.isitNanpPhone = function isitNanpPhone(object) {
  return regexps.nanpPhone.test(object);
};

/**
 * Checks to see if object is a valid social security number
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitSocialSecurityNumber = exports.isitSocialSecurityNumber = function isitSocialSecurityNumber(object) {
  return regexps.socialSecurityNumber.test(object);
};

/**
 * Checks to see if object is a valid time string
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitTimeString = exports.isitTimeString = function isitTimeString(object) {
  return regexps.timeString.test(object);
};

/**
 * Checks to see if object is a valid UK postal code
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitUkPostCode = exports.isitUkPostCode = function isitUkPostCode(object) {
  return regexps.ukPostCode.test(object);
};

/**
 * Checks to see if object is a valid URL
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitUrl = exports.isitUrl = function isitUrl(object) {
  return regexps.url.test(object);
};

/**
 * Checks to see if object is a valid US zip code
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitUsZipCode = exports.isitUsZipCode = function isitUsZipCode(object) {
  return regexps.usZipCode.test(object);
};

/**
 * Override the default RegExp value if you don't like it
 *
 * @param {RegExp} regExp
 * @param {string} regExpName
 */
var setRegExp = exports.setRegExp = function setRegExp(regExp, regExpName) {
  if (regexps.hasOwnProperty(regExpName)) {
    regexps[regExpName] = regExp;
  }
};

exports.default = {
  affirmative: isitAffirmative,
  alphaNumeric: isitAlphaNumeric,
  caPostalCode: isitCaPostalCode,
  creditCard: isitCreditCard,
  dateString: isitDateString,
  email: isitEmail,
  eppPhone: isitEppPhone,
  hexColor: isitHexColor,
  hexadecimal: isitHexadecimal,
  ip: isitIpAddress,
  ipv4: isitIpv4Address,
  ipv6: isitIpv6Address,
  isoDateString: isitIsoDateString,
  nanpPhone: isitNanpPhone,
  setRegExp: setRegExp,
  socialSecurityNumber: isitSocialSecurityNumber,
  timeString: isitTimeString,
  ukPostCode: isitUkPostCode,
  url: isitUrl,
  usZipCode: isitUsZipCode
};

/***/ }),

/***/ "./src/string.js":
/*!***********************!*\
  !*** ./src/string.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.multiParamFunctions = exports.isitUpperCase = exports.isitStartsWith = exports.isitStartWith = exports.isitStartCase = exports.isitSnakeCase = exports.isitPalindrome = exports.isitLowerCase = exports.isitKebabCase = exports.isitIncludes = exports.isitInclude = exports.isitHtml = exports.isitEndsWith = exports.isitEndWith = exports.isitDoubleByte = exports.isitDataUrl = exports.isitCapitalized = exports.isitCamelCase = undefined;

var _arithmetic = __webpack_require__(/*! ./arithmetic */ "./src/arithmetic.js");

var _type = __webpack_require__(/*! ./type */ "./src/type.js");

var DATA_URL_REGEXP = /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i; // eslint-disable-line
var DOUBLE_BYTE_REGEXP = /[^\u0000-\u00ff]/;
var HTML_REGEXP = /<(\"[^\"]*\"|'[^']*'|[^'\">])*>/;

/**
 * All necessary values for computation of getArrayOfWords is taken from lodash,
 * found at https://raw.githubusercontent.com/lodash/lodash/master/lodash.js
 */
var RS_ASTRAL_RANGE = '\\ud800-\\udfff';
var RS_COMBO_MARKS_RANGE = '\\u0300-\\u036f\\ufe20-\\ufe23';
var RS_COMBO_SYMBOLS_RANGE = '\\u20d0-\\u20f0';
var RS_DINGBAT_RANGE = '\\u2700-\\u27bf';
var RS_LOWER_RANGE = 'a-z\\xdf-\\xf6\\xf8-\\xff';
var RS_MATH_OP_RANGE = '\\xac\\xb1\\xd7\\xf7';
var RS_NON_CHAR_RANGE = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf';
var RS_QUOTE_RANGE = '\\u2018\\u2019\\u201c\\u201d';
var RS_SPACE_RANGE = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000';
var RS_UPPER_RANGE = 'A-Z\\xc0-\\xd6\\xd8-\\xde';
var RS_VAR_RANGE = '\\ufe0e\\ufe0f';
var RS_BREAK_RANGE = RS_MATH_OP_RANGE + RS_NON_CHAR_RANGE + RS_QUOTE_RANGE + RS_SPACE_RANGE;

var RS_BREAK = '[' + RS_BREAK_RANGE + ']';
var RS_COMBO = '[' + (RS_COMBO_MARKS_RANGE + RS_COMBO_SYMBOLS_RANGE) + ']';
var RS_DIGITS = '\\d+';
var RS_DINGBAT = '[' + RS_DINGBAT_RANGE + ']';
var RS_LOWER = '[' + RS_LOWER_RANGE + ']';
var RS_MISC = '[^' + (RS_ASTRAL_RANGE + RS_BREAK_RANGE + RS_DIGITS + RS_DINGBAT_RANGE + RS_LOWER_RANGE + RS_UPPER_RANGE) + ']';
var RS_FITZ = '\\ud83c[\\udffb-\\udfff]';
var RS_MODIFIER = '(?:' + RS_COMBO + '|' + RS_FITZ + ')';
var RS_NON_ASTRAL = '[^' + RS_ASTRAL_RANGE + ']';
var RS_REGIONAL = '(?:\\ud83c[\\udde6-\\uddff]){2}';
var RS_SURR_PAIR = '[\\ud800-\\udbff][\\udc00-\\udfff]';
var RS_UPPER = '[' + RS_UPPER_RANGE + ']';
var RS_ZWJ = '\\u200d';

var RS_LOWER_MISC = '(?:' + RS_LOWER + '|' + RS_MISC + ')';
var RS_UPPER_MISC = '(?:' + RS_UPPER + '|' + RS_MISC + ')';
var RE_OPT_MOD = RS_MODIFIER + '?';
var RS_OPT_VAR = '[' + RS_VAR_RANGE + ']?';
var RS_OPT_JOIN = '(?:' + RS_ZWJ + '(?:' + [RS_NON_ASTRAL, RS_REGIONAL, RS_SURR_PAIR].join('|') + ')' + (RS_OPT_VAR + RE_OPT_MOD) + ')*';
var RS_SEQ = RS_OPT_VAR + RE_OPT_MOD + RS_OPT_JOIN;
var RS_EMOJI = '(?:' + [RS_DINGBAT, RS_REGIONAL, RS_SURR_PAIR].join('|') + ')' + RS_SEQ;

var HAS_COMPLEX_WORD = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
var COMPLEX_WORD = RegExp([RS_UPPER + '?' + RS_LOWER + '+(?=' + [RS_BREAK, RS_UPPER, '$'].join('|') + ')', RS_UPPER_MISC + '+(?=' + [RS_BREAK, RS_UPPER + RS_LOWER_MISC, '$'].join('|') + ')', RS_UPPER + '?' + RS_LOWER_MISC + '+', RS_UPPER + '+', RS_DIGITS, RS_EMOJI].join('|'), 'g');
var SIMPLE_WORD = /[a-zA-Z0-9]+/g;

var getArrayOfWords = function getArrayOfWords(string) {
  var pattern = HAS_COMPLEX_WORD.test(string) ? COMPLEX_WORD : SIMPLE_WORD;

  return string.match(pattern) || [];
};

/**
 * Converts string passed to camelCase spelling
 *
 * @param {any} string
 * @returns {string}
 */
var toCamelCase = function toCamelCase(string) {
  var arrayOfWords = getArrayOfWords(string);

  var camelCaseString = '';

  arrayOfWords.forEach(function (word, index) {
    camelCaseString += index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  return camelCaseString;
};

/**
 * Converts string passed to kebab-case spelling
 *
 * @param {any} string
 * @returns {string}
 */
var toKebabCase = function toKebabCase(string) {
  var arrayOfWords = getArrayOfWords(string);

  var kebabCaseString = '';

  arrayOfWords.forEach(function (word, index) {
    if (index !== 0) {
      kebabCaseString += '-';
    }

    kebabCaseString += word.toLowerCase();
  });

  return kebabCaseString;
};
/**
 * Converts string passed to snake_case spelling
 *
 * @param {any} string
 * @returns {string}
 */
var toSnakeCase = function toSnakeCase(string) {
  var arrayOfWords = getArrayOfWords(string);

  var snakeCaseString = '';

  arrayOfWords.forEach(function (word, index) {
    if (index !== 0) {
      snakeCaseString += '_';
    }

    snakeCaseString += word.toLowerCase();
  });

  return snakeCaseString;
};

/**
 * Converts string passed to Start Case spelling
 *
 * @param {any} string
 * @returns {string}
 */
var toStartCase = function toStartCase(string) {
  var arrayOfWords = getArrayOfWords(string);

  var startCaseString = '';

  arrayOfWords.forEach(function (word, index) {
    if (index !== 0) {
      startCaseString += ' ';
    }

    startCaseString += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  return startCaseString;
};

/**
 * Checks to see if the string object is spelled in proper
 * camelCase spelling
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitCamelCase = exports.isitCamelCase = function isitCamelCase(object) {
  return (0, _type.isitString)(object) && object === toCamelCase(object);
};

/**
 * Checks to see if the string object is capitalized, meaning
 * only that the first letter is uppercase
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitCapitalized = exports.isitCapitalized = function isitCapitalized(object) {
  if (!(0, _type.isitString)(object)) {
    return false;
  }

  var words = object.split(' ');
  var capitalized = words.map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return (0, _arithmetic.isitEqual)(words, capitalized);
};

/**
 * Checks to see if object is a valid data url
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitDataUrl = exports.isitDataUrl = function isitDataUrl(object) {
  return DATA_URL_REGEXP.test(object);
};

/**
 * Checks to see if object is a double byte integer
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitDoubleByte = exports.isitDoubleByte = function isitDoubleByte(object) {
  return DOUBLE_BYTE_REGEXP.test(object);
};

/**
 * Checks if string object ends with the string value endingString
 *
 * @param {any} object
 * @param {string} endingString
 * @returns {boolean}
 */
var isitEndWith = exports.isitEndWith = function isitEndWith(object, endingString) {
  if (!(0, _type.isitString)(object) || !(0, _type.isitString)(endingString)) {
    return false;
  }

  var index = object.lastIndexOf(endingString);

  return index !== -1 && index === object.length - endingString.length;
};

/**
 * Alias function for endWith
 */
var isitEndsWith = exports.isitEndsWith = isitEndWith;

/**
 * Checks to see if object is valid HTML
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitHtml = exports.isitHtml = function isitHtml(object) {
  return HTML_REGEXP.test(object);
};

/**
 * Checks if string object has the string value substring contained
 * within it
 *
 * @param {any} object
 * @param {string} substring
 * @returns {boolean}
 */
var isitInclude = exports.isitInclude = function isitInclude(object, substring) {
  return ((0, _type.isitArray)(object) || (0, _type.isitString)(object)) && (0, _type.isitString)(substring) && object.indexOf(substring) !== -1;
};

/**
 * Alias function for include
 */
var isitIncludes = exports.isitIncludes = isitInclude;

/**
 * Checks to see if string object is spelled as proper kebab-case spelling
 *
 * @param {string} object
 * @returns {boolean}
 */
var isitKebabCase = exports.isitKebabCase = function isitKebabCase(object) {
  return (0, _type.isitString)(object) && object.toLowerCase() === toKebabCase(object);
};

/**
 * Checks to see if string object is all lowercase
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitLowerCase = exports.isitLowerCase = function isitLowerCase(object) {
  return (0, _type.isitString)(object) && object === object.toLowerCase();
};

/**
 * Checks to see if string object is spelled identically
 * forwards and backwards, for example: tacocat
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitPalindrome = exports.isitPalindrome = function isitPalindrome(object) {
  if (!(0, _type.isitString)(object)) {
    return false;
  }

  var spacelessString = object.replace(/\s/g, '');

  return spacelessString === spacelessString.split('').reverse().join('');
};

/**
 * Checks to see if string object is spelling in proper
 * snake_case spelling
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitSnakeCase = exports.isitSnakeCase = function isitSnakeCase(object) {
  return (0, _type.isitString)(object) && object.toLowerCase() === toSnakeCase(object);
};

/**
 * Checks to see if string object is spelled in proper
 * Start Case spelling (meaning first letter of each word is
 * capitalized, and the rest of the word is lowercase)
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitStartCase = exports.isitStartCase = function isitStartCase(object) {
  return (0, _type.isitString)(object) && object === toStartCase(object);
};

/**
 * Checks to see if string object starts with string value
 * of substring
 *
 * @param {any} object
 * @param {string} substring
 * @returns {boolean}
 */
var isitStartWith = exports.isitStartWith = function isitStartWith(object, substring) {
  return (0, _type.isitString)(object) && (0, _type.isitString)(substring) && object.indexOf(substring) === 0;
};

/**
 * Alias function for startWith
 */
var isitStartsWith = exports.isitStartsWith = isitStartWith;

/**
 * Checks to see if string object is all uppercase
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitUpperCase = exports.isitUpperCase = function isitUpperCase(object) {
  return (0, _type.isitString)(object) && object === object.toUpperCase();
};

/**
 * Functions we don't want to show in any or all
 */
var multiParamFunctions = exports.multiParamFunctions = ['endWith', 'include', 'startWith'];

exports.default = {
  camelCase: isitCamelCase,
  capitalized: isitCapitalized,
  dataUrl: isitDataUrl,
  doubleByte: isitDoubleByte,
  endWith: isitEndWith,
  endsWith: isitEndsWith,
  html: isitHtml,
  include: isitInclude,
  includes: isitIncludes,
  kebabCase: isitKebabCase,
  lowerCase: isitLowerCase,
  palindrome: isitPalindrome,
  snakeCase: isitSnakeCase,
  startCase: isitStartCase,
  startWith: isitStartWith,
  startsWith: isitStartsWith,
  upperCase: isitUpperCase
};

/***/ }),

/***/ "./src/time.js":
/*!*********************!*\
  !*** ./src/time.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.multiParamFunctions = exports.isitYesterday = exports.isitYear = exports.isitWeekend = exports.isitWeekday = exports.isitTomorrow = exports.isitToday = exports.isitQuarterOfYear = exports.isitPast = exports.isitMonth = exports.isitLeapYear = exports.isitInNextYear = exports.isitInNextWeek = exports.isitInNextMonth = exports.isitInLastYear = exports.isitInLastWeek = exports.isitInLastMonth = exports.isitInDateRange = exports.isitFuture = exports.isitDaylightSavingsTime = exports.isitDayLightSavingTime = exports.isitDay = undefined;

var _type = __webpack_require__(/*! ./type */ "./src/type.js");

/**
 * String values for the days of the week
 */
var DAY_STRINGS = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

/**
 * String values for the months of the year
 */
var MONTH_STRINGS = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

/**
 * Checks to see if date object is the same day of the week as
 * the string dayString
 *
 * @param {any} object
 * @param {string} dayString
 * @returns {boolean}
 */
var isitDay = exports.isitDay = function isitDay(object) {
  var dayString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DAY_STRINGS[new Date().getDay()];
  return (0, _type.isitDate)(object) && (0, _type.isitString)(dayString) && dayString.toLowerCase() === DAY_STRINGS[object.getDay()];
};

/**
 * Checks to see if the date object is in daylight savings time of year
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitDayLightSavingTime = exports.isitDayLightSavingTime = function isitDayLightSavingTime(object) {
  if (!(0, _type.isitDate)(object)) {
    return false;
  }

  var objectYear = object.getFullYear();
  var january = new Date(objectYear, 0, 1);
  var july = new Date(objectYear, 6, 1);

  return object.getTimezoneOffset() < Math.max(january.getTimezoneOffset(), july.getTimezoneOffset());
};

/**
 * Function alias for proper spelling
 */
var isitDaylightSavingsTime = exports.isitDaylightSavingsTime = isitDayLightSavingTime;

/**
 * Checks to see if the date object is in the future
 * compared to now
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitFuture = exports.isitFuture = function isitFuture(object) {
  return (0, _type.isitDate)(object) && object.valueOf() > Date.now();
};

/**
 * Checks to see if the date object is at least the minimumDate,
 * and at most the maximumDate
 *
 * @param {any} object
 * @param {date} minimumDate
 * @param {date} maximumDate
 * @returns {boolean}
 */
var isitInDateRange = exports.isitInDateRange = function isitInDateRange(object, minimumDate, maximumDate) {
  if (!(0, _type.isitDate)(object) || !(0, _type.isitDate)(minimumDate) || !(0, _type.isitDate)(maximumDate)) {
    return false;
  }

  var objectTime = object.getTime();

  return objectTime >= minimumDate.getTime() && objectTime <= maximumDate.getTime();
};

/**
 * Checks to see if date object is within the last month relative to now
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitInLastMonth = exports.isitInLastMonth = function isitInLastMonth(object) {
  if (!(0, _type.isitDate)(object)) {
    return false;
  }

  var today = new Date();
  var oneMonthAgo = new Date(new Date().setMonth(new Date().getMonth() - 1));

  return isitInDateRange(object, oneMonthAgo, today);
};

/**
 * Checks to see if date object is within the last week relative to now
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitInLastWeek = exports.isitInLastWeek = function isitInLastWeek(object) {
  if (!(0, _type.isitDate)(object)) {
    return false;
  }

  var today = new Date();
  var sevenDaysAgo = new Date(new Date().setDate(new Date().getDate() - 7));

  return isitInDateRange(object, sevenDaysAgo, today);
};

/**
 * Checks to see if date object is within the last year relative to now
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitInLastYear = exports.isitInLastYear = function isitInLastYear(object) {
  if (!(0, _type.isitDate)(object)) {
    return false;
  }

  var today = new Date();
  var oneYearAgo = new Date(new Date().setFullYear(new Date().getFullYear() - 1));

  return isitInDateRange(object, oneYearAgo, today);
};

/**
 * Checks to see if date object is within the next month relative to now
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitInNextMonth = exports.isitInNextMonth = function isitInNextMonth(object) {
  if (!(0, _type.isitDate)(object)) {
    return false;
  }

  var today = new Date();
  var oneMonthFromNow = new Date(new Date().setMonth(new Date().getMonth() + 1));

  return isitInDateRange(object, today, oneMonthFromNow);
};

/**
 * Checks to see if date object is within the next week relative to now
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitInNextWeek = exports.isitInNextWeek = function isitInNextWeek(object) {
  if (!(0, _type.isitDate)(object)) {
    return false;
  }

  var today = new Date();
  var sevenDaysFromNow = new Date(new Date().setDate(new Date().getDate() + 7));

  return isitInDateRange(object, today, sevenDaysFromNow);
};

/**
 * Checks to see if date object is within the next year relative to now
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitInNextYear = exports.isitInNextYear = function isitInNextYear(object) {
  if (!(0, _type.isitDate)(object)) {
    return false;
  }

  var today = new Date();
  var oneYearFromNow = new Date(new Date().setFullYear(new Date().getFullYear() + 1));

  return isitInDateRange(object, today, oneYearFromNow);
};

/**
 * Checks if number object is considered a leap year
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitLeapYear = exports.isitLeapYear = function isitLeapYear(object) {
  return (0, _type.isitNumber)(object) && (object % 4 === 0 && object % 100 !== 0 || object % 400 === 0);
};

/**
 * Checks to see if date object is the same month of the year
 * as monthString
 *
 * @param {any} object
 * @param {string} monthString
 * @returns {boolean}
 */
var isitMonth = exports.isitMonth = function isitMonth(object) {
  var monthString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : MONTH_STRINGS[new Date().getMonth()];
  return (0, _type.isitDate)(object) && (0, _type.isitString)(monthString) && monthString.toLowerCase() === MONTH_STRINGS[object.getMonth()];
};

/**
 * Checks to see if date object is in the past relative to now
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitPast = exports.isitPast = function isitPast(object) {
  return (0, _type.isitDate)(object) && object.valueOf() < Date.now();
};

/**
 * Checks to see if date object is in the same quarter as
 * quarterNumber
 *
 * @param {any} object
 * @param {number} quarterNumber
 * @returns {boolean}
 */
var isitQuarterOfYear = exports.isitQuarterOfYear = function isitQuarterOfYear(object, quarterNumber) {
  if (!(0, _type.isitDate)(object)) {
    return false;
  }

  quarterNumber = +quarterNumber;

  return (0, _type.isitNumber)(quarterNumber) && !(0, _type.isitNaN)(quarterNumber) && quarterNumber === Math.floor((object.getMonth() + 3) / 3);
};

/**
 * Checks to see if date object is today
 *
 * @param {any} object
 * @param {date} today
 * @returns {boolean}
 */
var isitToday = exports.isitToday = function isitToday(object) {
  var today = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();

  if (!(0, _type.isitDate)(object)) {
    return false;
  }

  if (false) {}

  return object.toDateString() === today.toDateString();
};

/**
 * Checks to see if date object is tomorrow
 *
 * @param {any} object
 * @param {date} tomorrow
 * @returns {boolean}
 */
var isitTomorrow = exports.isitTomorrow = function isitTomorrow(object) {
  var tomorrow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date(new Date().setDate(new Date().getDate() + 1));

  if (!(0, _type.isitDate)(object)) {
    return false;
  }

  var now = Date.now();

  if (false) {}

  return object.toDateString() === tomorrow.toDateString();
};

/**
 * Checks to see if date object falls on neither Saturday nor Sunday
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitWeekday = exports.isitWeekday = function isitWeekday(object) {
  if (!(0, _type.isitDate)(object)) {
    return false;
  }

  var day = object.getDay();

  return day !== 0 && day !== 6;
};

/**
 * Checks to see if date object falls on either Saturday or Sunday
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitWeekend = exports.isitWeekend = function isitWeekend(object) {
  if (!(0, _type.isitDate)(object)) {
    return false;
  }

  var day = object.getDay();

  return day === 0 || day === 6;
};

/**
 * Checks to see if date object is the same year
 * as yearNumber
 *
 * @param {any} object
 * @param {number} yearNumber
 * @returns {boolean}
 */
var isitYear = exports.isitYear = function isitYear(object) {
  var yearNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date().getFullYear();

  if (!(0, _type.isitDate)(object)) {
    return false;
  }

  yearNumber = +yearNumber;

  return (0, _type.isitNumber)(yearNumber) && !(0, _type.isitNaN)(yearNumber) && yearNumber === object.getFullYear();
};

/**
 * Checks to see if date object is yesterday
 *
 * @param {any} object
 * @param {date} yesterday
 * @returns {boolean}
 */
var isitYesterday = exports.isitYesterday = function isitYesterday(object) {
  var yesterday = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date(new Date().setDate(new Date().getDate() - 1));

  if (!(0, _type.isitDate)(object)) {
    return false;
  }

  var now = Date.now();

  if (false) {}

  return object.toDateString() === yesterday.toDateString();
};

/**
 * Functions we don't want to show up in any or all
 */
var multiParamFunctions = exports.multiParamFunctions = ['day', 'inDateRange', 'month', 'quarterOfYear', 'year'];

exports.default = {
  day: isitDay,
  dayLightSavingTime: isitDayLightSavingTime,
  daylightSavingsTime: isitDaylightSavingsTime,
  future: isitFuture,
  inDateRange: isitInDateRange,
  inLastMonth: isitInLastMonth,
  inLastWeek: isitInLastWeek,
  inLastYear: isitInLastYear,
  inNextMonth: isitInNextMonth,
  inNextWeek: isitInNextWeek,
  inNextYear: isitInNextYear,
  leapYear: isitLeapYear,
  month: isitMonth,
  past: isitPast,
  quarterOfYear: isitQuarterOfYear,
  today: isitToday,
  tomorrow: isitTomorrow,
  weekday: isitWeekday,
  weekend: isitWeekend,
  year: isitYear,
  yesterday: isitYesterday
};

/***/ }),

/***/ "./src/type.js":
/*!*********************!*\
  !*** ./src/type.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Get the toString of the object
 *
 * @param {any} object
 * @returns {string}
 */
var toString = function toString(object) {
  return Object.prototype.toString.call(object);
};

/**
 * Get the full toString value string based on type
 *
 * @param {string} type
 * @returns {string}
 */
var getObjectToStringValue = function getObjectToStringValue(type) {
  return '[object ' + type + ']';
};

/**
 * Checks to see if object is null
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitNull = exports.isitNull = function isitNull(object) {
  return object === null;
};

/**
 * Checks to see if object is an arguments object
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitArguments = exports.isitArguments = function isitArguments(object) {
  return !isitNull(object) && toString(object) === getObjectToStringValue('Arguments') || !!(object && (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && 'callee' in object);
};

/**
 * Checks to see if object is an array
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitArray = exports.isitArray = function isitArray(object) {
  return toString(object) === getObjectToStringValue('Array');
};

/**
 * Checks to see if object is a boolean
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitBoolean = exports.isitBoolean = function isitBoolean(object) {
  return object === true || object === false || toString(object) === getObjectToStringValue('Boolean');
};

/**
 * Checks to see if object is a string
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitString = exports.isitString = function isitString(object) {
  return toString(object) === getObjectToStringValue('String');
};

/**
 * Checks to see if object is a character (string with length of 1)
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitChar = exports.isitChar = function isitChar(object) {
  return isitString(object) && object.length === 1;
};

/**
 * Checks to see if object is a date
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitDate = exports.isitDate = function isitDate(object) {
  return toString(object) === getObjectToStringValue('Date');
};

/**
 * Checks to see if object is an error
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitError = exports.isitError = function isitError(object) {
  return toString(object) === getObjectToStringValue('Error');
};

/**
 * Checks to see if object is a function
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitFunction = exports.isitFunction = function isitFunction(object) {
  return toString(object) === getObjectToStringValue('Function') || typeof object === 'function';
};

/**
 * Checks to see if object is a JSON string
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitJSON = exports.isitJSON = function isitJSON(object) {
  try {
    JSON.parse(object);

    return true;
  } catch (ex) {
    return false;
  }
};

/**
 * Checks to see if object is a NaN
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitNaN = exports.isitNaN = function isitNaN(object) {
  return object !== object;
};

/**
 * Checks to see if object is a number
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitNumber = exports.isitNumber = function isitNumber(object) {
  return !isitNaN(object) && toString(object) === getObjectToStringValue('Number');
};

/**
 * Checks to see if object is an object
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitObject = exports.isitObject = function isitObject(object) {
  return toString(object) === getObjectToStringValue('Object') && !!object;
};

/**
 * Checks to see if object is a regex
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitRegExp = exports.isitRegExp = function isitRegExp(object) {
  return toString(object) === getObjectToStringValue('RegExp');
};

/**
 * Checks to see if objects are the same type
 *
 * @param {any} object1
 * @param {any} object2
 * @returns {boolean}
 */
var isitSameType = exports.isitSameType = function isitSameType(object1, object2) {
  if (isitNaN(object1) && isitNaN(object2)) {
    return isitNaN(object1) === isitNaN(object2);
  }

  return toString(object1) === toString(object2);
};

/**
 * Checks to see if object is a Symbol
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitSymbol = exports.isitSymbol = function isitSymbol(object) {
  return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'symbol';
};

/**
 * Checks to see if object is a TypedArray
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitTypedArray = exports.isitTypedArray = function isitTypedArray(object) {
  var objectToString = toString(object);

  return objectToString === getObjectToStringValue('Int8Array') || objectToString === getObjectToStringValue('Uint8Array') || objectToString === getObjectToStringValue('Uint8ClampedArray') || objectToString === getObjectToStringValue('Int16Array') || objectToString === getObjectToStringValue('Uint16Array') || objectToString === getObjectToStringValue('Int32Array') || objectToString === getObjectToStringValue('Uint32Array') || objectToString === getObjectToStringValue('Float32Array') || objectToString === getObjectToStringValue('Float64Array');
};

/**
 * Checks to see if object is undefined
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitUndefined = exports.isitUndefined = function isitUndefined(object) {
  return object === void 0;
};

exports.default = {
  arguments: isitArguments,
  array: isitArray,
  boolean: isitBoolean,
  char: isitChar,
  date: isitDate,
  error: isitError,
  function: isitFunction,
  json: isitJSON,
  nan: isitNaN,
  null: isitNull,
  number: isitNumber,
  object: isitObject,
  regexp: isitRegExp,
  sameType: isitSameType,
  string: isitString,
  symbol: isitSymbol,
  typedArray: isitTypedArray,
  undefined: isitUndefined
};

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/tquetano/git/isit.js/src/index.js */"./src/index.js");


/***/ })

/******/ });
});
//# sourceMappingURL=isit.js.map