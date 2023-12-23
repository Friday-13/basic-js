const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  /* validation */
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (!(date instanceof Date)) {
    throw Error('Invalid date!');
  }
  if (Object.hasOwn(date, 'toString')) {
    throw Error('Invalid date!');
  }

  /* validation passed */
  const month = date.getMonth() + 1;
  if (month >= 3 && month < 6) {
    return 'spring';
  }
  if (month >= 6 && month < 9) {
    return 'summer';
  }
  if (month >= 9 && month < 12) {
    return 'autumn';
  }
  return 'winter';
}

module.exports = {
  getSeason
};
