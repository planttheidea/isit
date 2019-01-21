// regex values to test a variety of values

// Steven Levithan, Jan Goyvaerts: Regular Expressions Cookbook
// Scott Gonzalez: Email address validation

// eppPhone match extensible provisioning protocol format
// nanpPhone match north american number plan format
// dateString match m/d/yy and mm/dd/yyyy, allowing any combination of one or two digits for the day and month, and two
// or four digits for the year
// time match hours, minutes, and seconds, 24-hour clock

/* eslint-disable max-len */
let regexps = {
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
  usZipCode: /^[0-9]{5}(?:-[0-9]{4})?$/,
};
/* eslint-enable */

/**
 * Checks to see if object is affirmative
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitAffirmative = (object) => regexps.affirmative.test(object);

/**
 * Checks to see if object is alphanumeric
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitAlphaNumeric = (object) => regexps.alphaNumeric.test(object);

/**
 * Checks to see if object is a valid Canadian postale code
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitCaPostalCode = (object) => regexps.caPostalCode.test(object);

/**
 * Checks to see if object is a valid credit card number
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitCreditCard = (object) => regexps.creditCard.test(object);

/**
 * Checks to see if object is a valid date string
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitDateString = (object) => regexps.dateString.test(object);

/**
 * Checks to see if object is a valid email address
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitEmail = (object) => regexps.email.test(object);

/**
 * Checks to see if object is a valid EPP phone number
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitEppPhone = (object) => regexps.eppPhone.test(object);

/**
 * Checks to see if object is a valid hexadecimal
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitHexadecimal = (object) => regexps.hexadecimal.test(object);

/**
 * Checks to see if object is a valid hex color
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitHexColor = (object) => regexps.hexColor.test(object);

/**
 * Checks to see if object is a valid IP address
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitIpAddress = (object) => regexps.ip.test(object);

/**
 * Checks to see if object is a valid IPv4 address
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitIpv4Address = (object) => regexps.ipv4.test(object);

/**
 * Checks to see if object is a valid IPv6 address
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitIpv6Address = (object) => regexps.ipv6.test(object);

/**
 * Checks to see if object is a valid ISO date string
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitIsoDateString = (object) => regexps.isoDateString.test(object);

/**
 * Checks to see if object is a valid NANP phone address
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitNanpPhone = (object) => regexps.nanpPhone.test(object);

/**
 * Checks to see if object is a valid social security number
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitSocialSecurityNumber = (object) => regexps.socialSecurityNumber.test(object);

/**
 * Checks to see if object is a valid time string
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitTimeString = (object) => regexps.timeString.test(object);

/**
 * Checks to see if object is a valid UK postal code
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitUkPostCode = (object) => regexps.ukPostCode.test(object);

/**
 * Checks to see if object is a valid URL
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitUrl = (object) => regexps.url.test(object);

/**
 * Checks to see if object is a valid US zip code
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitUsZipCode = (object) => regexps.usZipCode.test(object);

/**
 * Override the default RegExp value if you don't like it
 *
 * @param {RegExp} regExp
 * @param {string} regExpName
 */
export const setRegExp = (regExp, regExpName) => {
  if (regexps.hasOwnProperty(regExpName)) {
    regexps[regExpName] = regExp;
  }
};

export default {
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
  setRegExp,
  socialSecurityNumber: isitSocialSecurityNumber,
  timeString: isitTimeString,
  ukPostCode: isitUkPostCode,
  url: isitUrl,
  usZipCode: isitUsZipCode,
};
