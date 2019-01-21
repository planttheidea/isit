import {
  isitFunction,
  isitNull,
  isitNumber,
  isitObject,
  isitUndefined,
} from './type';

const toString = Object.prototype.toString;

const NODE_LIST_REGEXP = /^\[object (HTMLCollection|NodeList)\]$/;

/**
 * Checks if object is an HTML element
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitDomNode = (object) => !isitUndefined(object) && !isitNull(object) && object.nodeType > 0;

/**
 * Checks if object is an HTMLCollection, for example
 * returned isArrayFrom document.querySelectorAll
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitDomNodeList = (object) =>
  !isitUndefined(object) && !isitNull(object) && NODE_LIST_REGEXP.test(toString.call(object));

/**
 * Checks if object is a jQuery object
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitJquery = (object) => {
  if (isitFunction(object)) {
    const $object = object();

    return isitObject($object) && !!$object.jquery;
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
export const isitPropertyCount = (object, count) => {
  if (!isitObject(object) || !isitNumber(count)) {
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
export const isitPropertyDefined = (object, property) => isitObject(object) && object.hasOwnProperty(property);

/**
 * Checks if the object is the window
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitWindowObject = (object) => typeof object === 'object' && 'setInterval' in object;

/**
 * Functions we don't want to show up in any or all
 */
export const multiParamFunctions = ['propertyCount', 'propertyDefined'];

export default {
  domNode: isitDomNode,
  domNodeList: isitDomNodeList,
  jquery: isitJquery,
  propertyCount: isitPropertyCount,
  propertyDefined: isitPropertyDefined,
  windowObject: isitWindowObject,
};
