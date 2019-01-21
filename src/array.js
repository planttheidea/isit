import {isitArray} from './type';

const checkSortedAsc = (array) => {
  for (let index = 0, length = array.length; index < length; index++) {
    const current = array[index];
    const next = array[index + 1];

    if (typeof next !== 'undefined' && current > next) {
      return false;
    }
  }

  return true;
};

const checkSortedDesc = (array) => {
  for (let index = array.length; index--;) {
    const current = array[index];
    const next = array[index - 1];

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
export const isitInArray = (object, item) => isitArray(object) && object.indexOf(item) !== -1;

/**
 * Checks to see if the object array is already sorted
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitSorted = (object) => {
  if (!isitArray(object)) {
    return false;
  }

  const shallowClone = [...object];

  shallowClone.sort();

  return checkSortedAsc(object, shallowClone) || checkSortedDesc(object, shallowClone);
};

/**
 * Functions we dont want to show up in any or all
 */
export const multiParamFunctions = ['inArray'];

export default {
  inArray: isitInArray,
  sorted: isitSorted,
};
