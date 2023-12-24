const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const variants = [];
  const digits = n.toString().split('');

  digits.forEach((_, index) => {
    const variant = [...digits];
    variant.splice(index, 1);
    variants.push(Number(variant.join('')));
  });
  return Math.max(...variants);
}

module.exports = {
  deleteDigit
};
