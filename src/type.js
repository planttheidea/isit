/**
 * Get the toString of the object
 *
 * @param {any} object
 * @returns {string}
 */
const toString = (object) => {
    return Object.prototype.toString.call(object);
};

/**
 * Get the full toString value string based on type
 *
 * @param {string} type
 * @returns {string}
 */
const getObjectToStringValue = (type) => {
    return `[object ${type}]`;
};

/**
 * Checks to see if object is an arguments object
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitArguments = (object) => {
    return (!isitNull(object) && toString(object) === getObjectToStringValue('Arguments')) ||
        !!(object && typeof object === 'object' && 'callee' in object);
};

/**
 * Checks to see if object is an array
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitArray = (object) => {
    return toString(object) === getObjectToStringValue('Array');
};

/**
 * Checks to see if object is a boolean
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitBoolean = (object) => {
    return object === true || object === false || toString(object) === getObjectToStringValue('Boolean');
};

/**
 * Checks to see if object is a character (string with length of 1)
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitChar = (object) => {
    return isitString(object) && object.length === 1;
};

/**
 * Checks to see if object is a date
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitDate = (object) => {
    return toString(object) === getObjectToStringValue('Date');
};

/**
 * Checks to see if object is an error
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitError = (object) => {
    return toString(object) === getObjectToStringValue('Error');
};

/**
 * Checks to see if object is a function
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitFunction = (object) => {
    return toString(object) === getObjectToStringValue('Function') || typeof object === 'function';
};

/**
 * Checks to see if object is a JSON string
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitJSON = (object) => {
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
export const isitNaN = (object) => {
    return object !== object;
};

/**
 * Checks to see if object is null
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitNull = (object) => {
    return object === null;
};

/**
 * Checks to see if object is a number
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitNumber = (object) => {
    return !isitNaN(object) && toString(object) === getObjectToStringValue('Number');
};

/**
 * Checks to see if object is an object
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitObject = (object) => {
    return toString(object) === getObjectToStringValue('Object') && !!object;
};

/**
 * Checks to see if object is a regex
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitRegExp = (object) => {
    return toString(object) === getObjectToStringValue('RegExp');
};

/**
 * Checks to see if objects are the same type
 *
 * @param {any} object1
 * @param {any} object2
 * @returns {boolean}
 */
export const isitSameType = (object1, object2) => {
    if (isitNaN(object1) && isitNaN(object2)) {
        return isitNaN(object1) === isitNaN(object2);
    }

    return toString(object1) === toString(object2);
};

/**
 * Checks to see if object is a string
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitString = (object) => {
    return toString(object) === getObjectToStringValue('String');
};

/**
 * Checks to see if object is a Symbol
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitSymbol = (object) => {
    return typeof object === 'symbol';
};

/**
 * Checks to see if object is undefined
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitUndefined = (object) => {
    return object === void 0;
};

export default {
    arguments: isitArguments,
    array: isitArray,
    boolean: isitBoolean,
    char: isitChar,
    date: isitDate,
    error: isitError,
    'function': isitFunction,
    json: isitJSON,
    nan: isitNaN,
    'null': isitNull,
    number: isitNumber,
    object: isitObject,
    regexp: isitRegExp,
    sameType: isitSameType,
    string: isitString,
    symbol: isitSymbol,
    undefined: isitUndefined
};