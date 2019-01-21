import {
  isitArray,
  isitBoolean,
  isitNaN,
  isitNull,
  isitNumber,
  isitObject,
  isitRegExp,
  isitSameType,
  isitString,
  isitUndefined,
} from './type';

const EPSILON = Number.EPSILON || 2.220446049250313e-16;
const GET_OWN_PROPERTY_NAMES = Object.getOwnPropertyNames;

/**
 * Checks to see if object is higher in value than a minimum numeric value
 *
 * @param {any} object
 * @param {number} minimumValue
 * @returns {boolean}
 */
export const isitAbove = (object, minimumValue) => {
  if (!isitNumber(object) || !isitNumber(minimumValue)) {
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
export const isitBelow = (object, maximumValue) => {
  if (!isitNumber(object) || !isitNumber(maximumValue)) {
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
export const isitDecimal = (object) => isitNumber(object) && object % 1 !== 0;

/**
 * Checks to see if objects are of the same type and equal in value,
 * which is checked deeply for objects and arrays
 *
 * @param {any} object1
 * @param {any} object2
 * @returns {boolean}
 */
export const isitEqual = (object1, object2) => {
  if (!isitSameType(object1, object2)) {
    return false;
  }

  if (isitUndefined(object1)) {
    return isitUndefined(object2);
  }

  if (isitNull(object1)) {
    return isitNull(object2);
  }

  if (isitDecimal(object1)) {
    return Math.abs(object1 - object2) < EPSILON;
  }

  if (isitNumber(object1)) {
    return object1 === object2 && 1 / object1 === 1 / object2;
  }

  if (isitString(object1) || isitRegExp(object1)) {
    return `${object1}` === `${object2}`;
  }

  if (isitBoolean(object1)) {
    return object1 === object2;
  }

  if (isitArray(object1)) {
    if (object1.length !== object2.length) {
      return false;
    }

    for (let index = 0, length = object1.length; index < length; index++) {
      if (!isitEqual(object1[index], object2[index])) {
        return false;
      }
    }

    return true;
  }

  if (isitObject(object1)) {
    const object1Properties = GET_OWN_PROPERTY_NAMES(object1);
    const object2Properties = GET_OWN_PROPERTY_NAMES(object2);

    if (!isitEqual(object1Properties, object2Properties)) {
      return false;
    }

    for (let index = 0, length = object1Properties.length; index < length; index++) {
      if (!isitEqual(object1[index], object2[index])) {
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
export const isitEven = (object) => isitNumber(object) && object % 2 === 0;

/**
 * Checks to see if object is not either positive or negative Infinity
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitFinite = (object) =>
  object !== Number.POSITIVE_INFINITY && object !== Number.NEGATIVE_INFINITY && !isitNaN(object);

/**
 * Checks to see if object is either positive or negative Infinity
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitInfinite = (object) => !isitFinite(object);

/**
 * Checks to see if object is an integer
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitInteger = (object) => isitNumber(object) && object % 1 === 0;

/**
 * Checks to see if object is a negative number
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitNegative = (object) => isitNumber(object) && object < 0;

/**
 * Checks to see if object is an odd integer
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitOdd = (object) => isitNumber(object) && object % 2 === 1;

/**
 * Alias for isitAbove
 *
 * @type {function()}
 */
export const isitOver = isitAbove;

/**
 * Checks to see if object is a positive number
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitPositive = (object) => isitNumber(object) && object > 0;

/**
 * Alias for isitBelow
 *
 * @type {function()}
 */
export const isitUnder = isitBelow;

/**
 * Checks to see if object is a numeric value is at least the
 * minimum numeric value, and is at most the maximum numeric value
 *
 * @param {any} object
 * @param {number} minimum
 * @param {number} maximum
 * @returns {boolean}
 */
export const isitWithin = (object, minimum, maximum) =>
  isitNumber(object) && isitNumber(minimum) && isitNumber(maximum) && object >= minimum && object <= maximum;

/**
 * Functions we don't want to appear in any or all
 */
export const multiParamFunctions = ['above', 'below', 'equal', 'under', 'within'];

export default {
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
  within: isitWithin,
};
