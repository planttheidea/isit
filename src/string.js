import {isitEqual} from './arithmetic';
import {
  isitArray,
  isitString,
} from './type';

const DATA_URL_REGEXP = /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i; // eslint-disable-line
const DOUBLE_BYTE_REGEXP = /[^\u0000-\u00ff]/;
const HTML_REGEXP = /<(\"[^\"]*\"|'[^']*'|[^'\">])*>/;

/**
 * All necessary values for computation of getArrayOfWords is taken from lodash,
 * found at https://raw.githubusercontent.com/lodash/lodash/master/lodash.js
 */
const RS_ASTRAL_RANGE = '\\ud800-\\udfff';
const RS_COMBO_MARKS_RANGE = '\\u0300-\\u036f\\ufe20-\\ufe23';
const RS_COMBO_SYMBOLS_RANGE = '\\u20d0-\\u20f0';
const RS_DINGBAT_RANGE = '\\u2700-\\u27bf';
const RS_LOWER_RANGE = 'a-z\\xdf-\\xf6\\xf8-\\xff';
const RS_MATH_OP_RANGE = '\\xac\\xb1\\xd7\\xf7';
const RS_NON_CHAR_RANGE = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf';
const RS_QUOTE_RANGE = '\\u2018\\u2019\\u201c\\u201d';
const RS_SPACE_RANGE =
  ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000';
const RS_UPPER_RANGE = 'A-Z\\xc0-\\xd6\\xd8-\\xde';
const RS_VAR_RANGE = '\\ufe0e\\ufe0f';
const RS_BREAK_RANGE = RS_MATH_OP_RANGE + RS_NON_CHAR_RANGE + RS_QUOTE_RANGE + RS_SPACE_RANGE;

const RS_BREAK = `[${RS_BREAK_RANGE}]`;
const RS_COMBO = `[${RS_COMBO_MARKS_RANGE + RS_COMBO_SYMBOLS_RANGE}]`;
const RS_DIGITS = '\\d+';
const RS_DINGBAT = `[${RS_DINGBAT_RANGE}]`;
const RS_LOWER = `[${RS_LOWER_RANGE}]`;
const RS_MISC = `[^${RS_ASTRAL_RANGE +
  RS_BREAK_RANGE +
  RS_DIGITS +
  RS_DINGBAT_RANGE +
  RS_LOWER_RANGE +
  RS_UPPER_RANGE}]`;
const RS_FITZ = '\\ud83c[\\udffb-\\udfff]';
const RS_MODIFIER = `(?:${RS_COMBO}|${RS_FITZ})`;
const RS_NON_ASTRAL = `[^${RS_ASTRAL_RANGE}]`;
const RS_REGIONAL = '(?:\\ud83c[\\udde6-\\uddff]){2}';
const RS_SURR_PAIR = '[\\ud800-\\udbff][\\udc00-\\udfff]';
const RS_UPPER = `[${RS_UPPER_RANGE}]`;
const RS_ZWJ = '\\u200d';

const RS_LOWER_MISC = `(?:${RS_LOWER}|${RS_MISC})`;
const RS_UPPER_MISC = `(?:${RS_UPPER}|${RS_MISC})`;
const RE_OPT_MOD = `${RS_MODIFIER}?`;
const RS_OPT_VAR = `[${RS_VAR_RANGE}]?`;
const RS_OPT_JOIN = `(?:${RS_ZWJ}(?:${[RS_NON_ASTRAL, RS_REGIONAL, RS_SURR_PAIR].join('|')})${RS_OPT_VAR +
  RE_OPT_MOD})*`;
const RS_SEQ = RS_OPT_VAR + RE_OPT_MOD + RS_OPT_JOIN;
const RS_EMOJI = `(?:${[RS_DINGBAT, RS_REGIONAL, RS_SURR_PAIR].join('|')})${RS_SEQ}`;

const HAS_COMPLEX_WORD = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
const COMPLEX_WORD = RegExp(
  [
    `${RS_UPPER}?${RS_LOWER}+(?=${[RS_BREAK, RS_UPPER, '$'].join('|')})`,
    `${RS_UPPER_MISC}+(?=${[RS_BREAK, RS_UPPER + RS_LOWER_MISC, '$'].join('|')})`,
    `${RS_UPPER}?${RS_LOWER_MISC}+`,
    `${RS_UPPER}+`,
    RS_DIGITS,
    RS_EMOJI,
  ].join('|'),
  'g'
);
const SIMPLE_WORD = /[a-zA-Z0-9]+/g;

const getArrayOfWords = (string) => {
  const pattern = HAS_COMPLEX_WORD.test(string) ? COMPLEX_WORD : SIMPLE_WORD;

  return string.match(pattern) || [];
};

/**
 * Converts string passed to camelCase spelling
 *
 * @param {any} string
 * @returns {string}
 */
const toCamelCase = (string) => {
  const arrayOfWords = getArrayOfWords(string);

  let camelCaseString = '';

  arrayOfWords.forEach((word, index) => {
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
const toKebabCase = (string) => {
  const arrayOfWords = getArrayOfWords(string);

  let kebabCaseString = '';

  arrayOfWords.forEach((word, index) => {
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
const toSnakeCase = (string) => {
  const arrayOfWords = getArrayOfWords(string);

  let snakeCaseString = '';

  arrayOfWords.forEach((word, index) => {
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
const toStartCase = (string) => {
  const arrayOfWords = getArrayOfWords(string);

  let startCaseString = '';

  arrayOfWords.forEach((word, index) => {
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
export const isitCamelCase = (object) => isitString(object) && object === toCamelCase(object);

/**
 * Checks to see if the string object is capitalized, meaning
 * only that the first letter is uppercase
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitCapitalized = (object) => {
  if (!isitString(object)) {
    return false;
  }

  const words = object.split(' ');
  const capitalized = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));

  return isitEqual(words, capitalized);
};

/**
 * Checks to see if object is a valid data url
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitDataUrl = (object) => DATA_URL_REGEXP.test(object);

/**
 * Checks to see if object is a double byte integer
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitDoubleByte = (object) => DOUBLE_BYTE_REGEXP.test(object);

/**
 * Checks if string object ends with the string value endingString
 *
 * @param {any} object
 * @param {string} endingString
 * @returns {boolean}
 */
export const isitEndWith = (object, endingString) => {
  if (!isitString(object) || !isitString(endingString)) {
    return false;
  }

  const index = object.lastIndexOf(endingString);

  return index !== -1 && index === object.length - endingString.length;
};

/**
 * Alias function for endWith
 */
export const isitEndsWith = isitEndWith;

/**
 * Checks to see if object is valid HTML
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitHtml = (object) => HTML_REGEXP.test(object);

/**
 * Checks if string object has the string value substring contained
 * within it
 *
 * @param {any} object
 * @param {string} substring
 * @returns {boolean}
 */
export const isitInclude = (object, substring) =>
  (isitArray(object) || isitString(object)) && isitString(substring) && object.indexOf(substring) !== -1;

/**
 * Alias function for include
 */
export const isitIncludes = isitInclude;

/**
 * Checks to see if string object is spelled as proper kebab-case spelling
 *
 * @param {string} object
 * @returns {boolean}
 */
export const isitKebabCase = (object) => isitString(object) && object.toLowerCase() === toKebabCase(object);

/**
 * Checks to see if string object is all lowercase
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitLowerCase = (object) => isitString(object) && object === object.toLowerCase();

/**
 * Checks to see if string object is spelled identically
 * forwards and backwards, for example: tacocat
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitPalindrome = (object) => {
  if (!isitString(object)) {
    return false;
  }

  const spacelessString = object.replace(/\s/g, '');

  return (
    spacelessString ===
    spacelessString
      .split('')
      .reverse()
      .join('')
  );
};

/**
 * Checks to see if string object is spelling in proper
 * snake_case spelling
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitSnakeCase = (object) => isitString(object) && object.toLowerCase() === toSnakeCase(object);

/**
 * Checks to see if string object is spelled in proper
 * Start Case spelling (meaning first letter of each word is
 * capitalized, and the rest of the word is lowercase)
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitStartCase = (object) => isitString(object) && object === toStartCase(object);

/**
 * Checks to see if string object starts with string value
 * of substring
 *
 * @param {any} object
 * @param {string} substring
 * @returns {boolean}
 */
export const isitStartWith = (object, substring) =>
  isitString(object) && isitString(substring) && object.indexOf(substring) === 0;

/**
 * Alias function for startWith
 */
export const isitStartsWith = isitStartWith;

/**
 * Checks to see if string object is all uppercase
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitUpperCase = (object) => isitString(object) && object === object.toUpperCase();

/**
 * Functions we don't want to show in any or all
 */
export const multiParamFunctions = ['endWith', 'include', 'startWith'];

export default {
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
  upperCase: isitUpperCase,
};
