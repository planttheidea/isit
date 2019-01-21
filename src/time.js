import {
  isitDate,
  isitNaN,
  isitNumber,
  isitString,
} from './type';

/**
 * String values for the days of the week
 */
const DAY_STRINGS = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

/**
 * String values for the months of the year
 */
const MONTH_STRINGS = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
];

/**
 * Checks to see if date object is the same day of the week as
 * the string dayString
 *
 * @param {any} object
 * @param {string} dayString
 * @returns {boolean}
 */
export const isitDay = (object, dayString = DAY_STRINGS[new Date().getDay()]) =>
  isitDate(object) && isitString(dayString) && dayString.toLowerCase() === DAY_STRINGS[object.getDay()];

/**
 * Checks to see if the date object is in daylight savings time of year
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitDayLightSavingTime = (object) => {
  if (!isitDate(object)) {
    return false;
  }

  const objectYear = object.getFullYear();
  const january = new Date(objectYear, 0, 1);
  const july = new Date(objectYear, 6, 1);

  return object.getTimezoneOffset() < Math.max(january.getTimezoneOffset(), july.getTimezoneOffset());
};

/**
 * Function alias for proper spelling
 */
export const isitDaylightSavingsTime = isitDayLightSavingTime;

/**
 * Checks to see if the date object is in the future
 * compared to now
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitFuture = (object) => isitDate(object) && object.valueOf() > Date.now();

/**
 * Checks to see if the date object is at least the minimumDate,
 * and at most the maximumDate
 *
 * @param {any} object
 * @param {date} minimumDate
 * @param {date} maximumDate
 * @returns {boolean}
 */
export const isitInDateRange = (object, minimumDate, maximumDate) => {
  if (!isitDate(object) || !isitDate(minimumDate) || !isitDate(maximumDate)) {
    return false;
  }

  const objectTime = object.getTime();

  return objectTime >= minimumDate.getTime() && objectTime <= maximumDate.getTime();
};

/**
 * Checks to see if date object is within the last month relative to now
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitInLastMonth = (object) => {
  if (!isitDate(object)) {
    return false;
  }

  const today = new Date();
  const oneMonthAgo = new Date(new Date().setMonth(new Date().getMonth() - 1));

  return isitInDateRange(object, oneMonthAgo, today);
};

/**
 * Checks to see if date object is within the last week relative to now
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitInLastWeek = (object) => {
  if (!isitDate(object)) {
    return false;
  }

  const today = new Date();
  const sevenDaysAgo = new Date(new Date().setDate(new Date().getDate() - 7));

  return isitInDateRange(object, sevenDaysAgo, today);
};

/**
 * Checks to see if date object is within the last year relative to now
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitInLastYear = (object) => {
  if (!isitDate(object)) {
    return false;
  }

  const today = new Date();
  const oneYearAgo = new Date(new Date().setFullYear(new Date().getFullYear() - 1));

  return isitInDateRange(object, oneYearAgo, today);
};

/**
 * Checks to see if date object is within the next month relative to now
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitInNextMonth = (object) => {
  if (!isitDate(object)) {
    return false;
  }

  const today = new Date();
  const oneMonthFromNow = new Date(new Date().setMonth(new Date().getMonth() + 1));

  return isitInDateRange(object, today, oneMonthFromNow);
};

/**
 * Checks to see if date object is within the next week relative to now
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitInNextWeek = (object) => {
  if (!isitDate(object)) {
    return false;
  }

  const today = new Date();
  const sevenDaysFromNow = new Date(new Date().setDate(new Date().getDate() + 7));

  return isitInDateRange(object, today, sevenDaysFromNow);
};

/**
 * Checks to see if date object is within the next year relative to now
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitInNextYear = (object) => {
  if (!isitDate(object)) {
    return false;
  }

  const today = new Date();
  const oneYearFromNow = new Date(new Date().setFullYear(new Date().getFullYear() + 1));

  return isitInDateRange(object, today, oneYearFromNow);
};

/**
 * Checks if number object is considered a leap year
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitLeapYear = (object) =>
  isitNumber(object) && ((object % 4 === 0 && object % 100 !== 0) || object % 400 === 0);

/**
 * Checks to see if date object is the same month of the year
 * as monthString
 *
 * @param {any} object
 * @param {string} monthString
 * @returns {boolean}
 */
export const isitMonth = (object, monthString = MONTH_STRINGS[new Date().getMonth()]) =>
  isitDate(object) && isitString(monthString) && monthString.toLowerCase() === MONTH_STRINGS[object.getMonth()];

/**
 * Checks to see if date object is in the past relative to now
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitPast = (object) => isitDate(object) && object.valueOf() < Date.now();

/**
 * Checks to see if date object is in the same quarter as
 * quarterNumber
 *
 * @param {any} object
 * @param {number} quarterNumber
 * @returns {boolean}
 */
export const isitQuarterOfYear = (object, quarterNumber) => {
  if (!isitDate(object)) {
    return false;
  }

  quarterNumber = +quarterNumber;

  return (
    isitNumber(quarterNumber) && !isitNaN(quarterNumber) && quarterNumber === Math.floor((object.getMonth() + 3) / 3)
  );
};

/**
 * Checks to see if date object is today
 *
 * @param {any} object
 * @param {date} today
 * @returns {boolean}
 */
export const isitToday = (object, today = new Date()) => {
  if (!isitDate(object)) {
    return false;
  }

  if (process.env.NODE_ENV === 'production') {
    today = new Date();
  }

  return object.toDateString() === today.toDateString();
};

/**
 * Checks to see if date object is tomorrow
 *
 * @param {any} object
 * @param {date} tomorrow
 * @returns {boolean}
 */
export const isitTomorrow = (object, tomorrow = new Date(new Date().setDate(new Date().getDate() + 1))) => {
  if (!isitDate(object)) {
    return false;
  }

  const now = Date.now();

  if (process.env.NODE_ENV === 'production') {
    tomorrow = new Date(now.setDate(now.getDate() + 1));
  }

  return object.toDateString() === tomorrow.toDateString();
};

/**
 * Checks to see if date object falls on neither Saturday nor Sunday
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitWeekday = (object) => {
  if (!isitDate(object)) {
    return false;
  }

  const day = object.getDay();

  return day !== 0 && day !== 6;
};

/**
 * Checks to see if date object falls on either Saturday or Sunday
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitWeekend = (object) => {
  if (!isitDate(object)) {
    return false;
  }

  const day = object.getDay();

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
export const isitYear = (object, yearNumber = new Date().getFullYear()) => {
  if (!isitDate(object)) {
    return false;
  }

  yearNumber = +yearNumber;

  return isitNumber(yearNumber) && !isitNaN(yearNumber) && yearNumber === object.getFullYear();
};

/**
 * Checks to see if date object is yesterday
 *
 * @param {any} object
 * @param {date} yesterday
 * @returns {boolean}
 */
export const isitYesterday = (object, yesterday = new Date(new Date().setDate(new Date().getDate() - 1))) => {
  if (!isitDate(object)) {
    return false;
  }

  const now = Date.now();

  if (process.env.NODE_ENV === 'production') {
    yesterday = new Date(now.setDate(now.getDate() + 1));
  }

  return object.toDateString() === yesterday.toDateString();
};

/**
 * Functions we don't want to show up in any or all
 */
export const multiParamFunctions = ['day', 'inDateRange', 'month', 'quarterOfYear', 'year'];

export default {
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
  yesterday: isitYesterday,
};
