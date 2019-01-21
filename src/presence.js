import {
  isitArguments,
  isitArray,
  isitNaN,
  isitNull,
  isitObject,
  isitRegExp,
  isitUndefined,
} from './type';

const WHITESPACE_REGEXP = /^\s\s*/;

/**
 * Checks to see if object is solely whitespace (has no character values)
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitWhitespace = (object) => WHITESPACE_REGEXP.test(object);

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
export const isitEmpty = (object) => {
  if (isitArray(object)) {
    return object.length === 0;
  }

  if (isitObject(object)) {
    const propertyNames = Object.getOwnPropertyNames(object);

    return propertyNames.length === 0;
  }

  if (isitRegExp(object)) {
    const objectString = object.toString();

    return objectString === '/(?:)/' || objectString === '//';
  }

  if (isitArguments(object)) {
    return Array.prototype.slice.call(object).length === 0;
  }

  return isitUndefined(object) || isitNull(object) || isitWhitespace(object) || object.toString() === '';
};

/**
 * Checks to see if the object is not undefined and not null
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitExisty = (object) => object !== undefined && object !== null;

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
export const isitFalsy = (object) => !object;

/**
 * Checks to see if object is equal to a single empty space
 * (legacy from previous version, better function to use is .whitespace())
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitSpace = (object) => object === ' ';

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
export const isitTruthy = (object) =>
  isitExisty(object) && object !== false && !isitNaN(object) && object !== '' && object !== 0;

export default {
  empty: isitEmpty,
  existy: isitExisty,
  falsy: isitFalsy,
  space: isitSpace,
  truthy: isitTruthy,
  whitespace: isitWhitespace,
};
