const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  if (n < 10) return n;

  let sum = 0;
  let slice = n;
  while (slice > 0) {
    sum += slice % 10;
    slice = Math.floor(slice / 10);
  }
  return getSumOfDigits(sum);
}

module.exports = {
  getSumOfDigits
};
