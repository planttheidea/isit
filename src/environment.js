/**
 * Make sure window and navigator exists, else all will blow up
 */
const HAS_WINDOW = typeof window !== 'undefined';
const NAVIGATOR_IN_WINDOW = HAS_WINDOW && 'navigator' in window;

/**
 * Returns property from navigator object exists, else returns false
 *
 * @param {string} property
 * @returns {boolean|string}
 */
const hasNavigatorProperty = (property) =>
  NAVIGATOR_IN_WINDOW && property in navigator && navigator[property].toLowerCase();

/**
 * Used in pretty much all the checkers
 */
const USER_AGENT = hasNavigatorProperty('userAgent');
const VENDOR = hasNavigatorProperty('vendor');
const APP_VERSION = hasNavigatorProperty('appVersion');

/**
 * RegExps used for testing
 */
const ANDROID_REGEXP = /android/i;
const APPLE_COMPUTER_REGEXP = /apple computer/i;
const APPLE_WEBKIT_REGEXP = /applewebkit/i;
const BB10_REGEXP = /BB10/i;
const BLACKBERRY_REGEXP = /blackberry/i;
const CHROME_REGEXP = /chrome/i;
const CHROME_OR_CHROMIUM_REGEXP = /chrome|chromium/i;
const EDGE_REGEXP = /edge/i;
const FIREFOX_REGEXP = /firefox/i;
const GECKO_REGEXP = /gecko/i;
const GOOGLE_INC_REGEXP = /google inc/i;
const IPAD_REGEXP = /ipad/i;
const IPHONE_REGEXP = /iphone/i;
const IPOD_REGEXP = /ipod/i;
const LIKE_GECKO_REGEXP = /like gecko/i;
const LINUX_REGEXP = /linux/i;
const MAC_REGEXP = /mac/i;
const MOBILE_REGEXP = /mobile/i;
const MSIE_REGEXP = /msie/i;
const OPERA_LEGACY_REGEXP = /^Opera\//;
const OPERA_MODERN_REGEXP = /\x20OPR\//;
const PHONE_REGEXP = /phone/i;
const RV11_REGEXP = /rv:11/;
const SAFARI_REGEXP = /safari/i;
const TOUCH_REGEXP = /touch/i;
const TRIDENT_REGEXP = /trident/i;
const UNIX_REGEXP = /X11/;
const WIN_REGEXP = /win/i;
const WINDOWS_NT_REGEXP = /windows nt/i;

/**
 * Checks if device used is running on Android
 *
 * @param {string} userAgent
 * @returns {boolean}
 */
export const isitAndroid = (userAgent = USER_AGENT) => ANDROID_REGEXP.test(userAgent);

/**
 * Checks if device used is running on Android and a mobile phone
 *
 * @param {string} userAgent
 * @returns {boolean}
 */
export const isitAndroidPhone = (userAgent = USER_AGENT) => isitAndroid(userAgent) && MOBILE_REGEXP.test(userAgent);

/**
 * Checks if device used is running on Android and a mobile phone
 *
 * @param {string} userAgent
 * @returns {boolean}
 */
export const isitAndroidTablet = (userAgent = USER_AGENT) => isitAndroid(userAgent) && !MOBILE_REGEXP.test(userAgent);

/**
 * Checks if device used is a Blackberry
 *
 * @param {string} userAgent
 * @returns {boolean}
 */
export const isitBlackberry = (userAgent = USER_AGENT) =>
  BLACKBERRY_REGEXP.test(userAgent) || BB10_REGEXP.test(userAgent);

/**
 * Checks if the browser is using the blink rendering engine
 *
 * @param {string} userAgent
 * @returns {boolean}
 */
export const isitBlink = (userAgent = USER_AGENT) => CHROME_REGEXP.test(userAgent);

/**
 * Checks if you are running in a browser
 *
 * @returns {boolean}
 */
export const isitBrowser = () => typeof window !== 'undefined';

/**
 * Checks if the browser used is Google Chrome
 *
 * @param {string} userAgent
 * @param {string} vendor
 * @returns {boolean}
 */
export const isitChrome = (userAgent = USER_AGENT, vendor = VENDOR) =>
  CHROME_OR_CHROMIUM_REGEXP.test(userAgent) && GOOGLE_INC_REGEXP.test(vendor);

/**
 * Checks if device used is an iPad
 *
 * @param {string} userAgent
 * @returns {boolean}
 */
export const isitIpad = (userAgent = USER_AGENT) => IPAD_REGEXP.test(userAgent);

/**
 * Checks if device used is an iPhone
 *
 * @param {string} userAgent
 * @returns {boolean}
 */
export const isitIphone = (userAgent = USER_AGENT) => IPHONE_REGEXP.test(userAgent) && !IPOD_REGEXP.test(userAgent);

/**
 * Checks if device used is an iPod
 *
 * @param {string} userAgent
 * @returns {boolean}
 */
export const isitIpod = (userAgent = USER_AGENT) => IPOD_REGEXP.test(userAgent);

/**
 * Checks if operating system used is iOS
 *
 * @param {string} userAgent
 * @returns {boolean}
 */
export const isitIos = (userAgent = USER_AGENT) => isitIpad(userAgent) || isitIphone(userAgent) || isitIpod(userAgent);

/**
 * Checks if operating system used is Windows-based
 *
 * @param {string} appVersion
 * @returns {boolean}
 */
export const isitWindows = (appVersion = APP_VERSION) => WIN_REGEXP.test(appVersion);

/**
 * Checks if deviced used is a Windows phone
 *
 * @param {string} userAgent
 * @param {string} appVersion
 * @returns {boolean}
 */
export const isitWindowsPhone = (userAgent = USER_AGENT, appVersion = APP_VERSION) =>
  isitWindows(appVersion) && PHONE_REGEXP.test(userAgent);

/**
 * Checks if device used is a Windows tablet
 *
 * @param {string} userAgent
 * @param {string} appVersion
 * @returns {boolean}
 */
export const isitWindowsTablet = (userAgent = USER_AGENT, appVersion = APP_VERSION) =>
  isitWindows(appVersion) && !isitWindowsPhone(userAgent, appVersion) && TOUCH_REGEXP.test(userAgent);

/**
 * Checks if device used is a mobile device (phone or tablet)
 *
 * @param {string} userAgent
 * @returns {boolean}
 */
export const isitMobile = (userAgent = USER_AGENT) =>
  isitIphone(userAgent)
  || isitIpad(userAgent)
  || isitAndroidPhone(userAgent)
  || isitWindowsPhone(userAgent)
  || isitIpod(userAgent)
  || isitBlackberry(userAgent);

/**
 * Checks if device used is a tablet
 *
 * @param {string} userAgent
 * @param {string} appVersion
 * @returns {boolean}
 */
export const isitTablet = (userAgent = USER_AGENT, appVersion = APP_VERSION) =>
  isitIpad(userAgent) || isitAndroidTablet(userAgent) || isitWindowsTablet(userAgent, appVersion);

/**
 * Checks if the device used is a desktop
 *
 * @param {string} userAgent
 * @returns {boolean}
 */
export const isitDesktop = (userAgent = USER_AGENT) => !isitMobile(userAgent) && !isitTablet(userAgent);

/**
 * Checks if the browser used is Microsoft Edge
 *
 * @param {string} userAgent
 * @returns {boolean}
 */
export const isitEdge = (userAgent = USER_AGENT) => EDGE_REGEXP.test(userAgent);

/**
 * Checks if the browser used is Mozilla Firefox
 *
 * @param {string} userAgent
 * @returns {boolean}
 */
export const isitFirefox = (userAgent = USER_AGENT) => FIREFOX_REGEXP.test(userAgent);

/**
 * Checks if the rendering agent used is Gecko
 *
 * @param {string} userAgent
 * @returns {boolean}
 */
export const isitGecko = (userAgent = USER_AGENT) => GECKO_REGEXP.test(userAgent) && !LIKE_GECKO_REGEXP.test(userAgent);

/**
 * Checks if the browser used is Internet Explorer,
 * and optionally checks if it is a specific version
 *
 * @param {number|string} version
 * @param {string} userAgent
 * @returns {boolean}
 */
export const isitIe = (version, userAgent = USER_AGENT) => {
  if (!version) {
    return MSIE_REGEXP.test(userAgent) || (WINDOWS_NT_REGEXP.test(userAgent) && RV11_REGEXP.test(userAgent));
  }

  /**
   * the reason for the fallback is because IE11 is weird, in that
   * only certain versions contained MSIE in its user agent
   */
  return (
    new RegExp(`msie ${version}`, 'i').test(userAgent)
    || (WINDOWS_NT_REGEXP.test(userAgent) && RV11_REGEXP.test(userAgent))
  );
};

/**
 * Checks if operating system used is Linux-based
 *
 * @param {string} appVersion
 * @returns {boolean}
 */
export const isitLinux = (appVersion = APP_VERSION) => LINUX_REGEXP.test(appVersion) || UNIX_REGEXP.test(appVersion);

/**
 * Checks if operating system used is Mac-based
 *
 * @param {string} appVersion
 * @returns {boolean}
 */
export const isitMac = (appVersion = APP_VERSION) => MAC_REGEXP.test(appVersion);

/**
 * Checks if environment code is running in is node.js
 *
 * @returns {boolean}
 */
export const isitNode = () => !isitBrowser();

/**
 * Checks if your browser is currently offline
 *
 * @returns {boolean}
 */
export const isitOnline = () => NAVIGATOR_IN_WINDOW && navigator.onLine;

/**
 * Checks if your browser is currently online
 *
 * @returns {boolean}
 */
export const isitOffline = () => !isitOnline();

/**
 * Checks if browser used is Opera
 *
 * @param {string} userAgent
 * @returns {boolean}
 */
export const isitOpera = (userAgent = USER_AGENT) =>
  // Opera 12 and older versions
  OPERA_LEGACY_REGEXP.test(userAgent)
  // Opera 15+
  || OPERA_MODERN_REGEXP.test(userAgent);

/**
 * Checks if rendering engine used is Presto,
 * which basically amounts to being legacy Opera
 *
 * @param {string} userAgent
 * @returns {boolean}
 */
export const isitPresto = (userAgent = USER_AGENT) => OPERA_LEGACY_REGEXP.test(userAgent);

/**
 * Checks if browser used is Safari
 *
 * @param {string} userAgent
 * @param {string} vendor
 * @returns {boolean}
 */
export const isitSafari = (userAgent = USER_AGENT, vendor = VENDOR) =>
  SAFARI_REGEXP.test(userAgent) && APPLE_COMPUTER_REGEXP.test(vendor);

/**
 * Checks if rendering engine used is Trident
 *
 * @param {string} userAgent
 * @returns {boolean}
 */
export const isitTrident = (userAgent = USER_AGENT) => TRIDENT_REGEXP.test(userAgent) || /msie [6-9]/i.test(userAgent);

/**
 * Checks if device and browser used supports touch
 *
 * @returns {boolean}
 */
export const isitTouchDevice = () =>
  (HAS_WINDOW && 'ontouchstart' in window) || ('DocumentTouch' in window && document instanceof window.DocumentTouch);

/**
 * Checks if rendering engine used is Webkit
 *
 * @param {string} userAgent
 * @returns {boolean}
 */
export const isitWebkit = (userAgent = USER_AGENT) => APPLE_WEBKIT_REGEXP.test(userAgent);

export default {
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
  windowsTablet: isitWindowsTablet,
};
