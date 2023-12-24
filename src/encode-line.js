const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let currentChar = str[0];
  let currentCount = 0;
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    if (currentChar === str[i]) {
      currentCount += 1;
    } else {
      if (currentCount > 1) {
        result += `${currentCount}${currentChar}`;
      } else {
        result += `${currentChar}`;
      }
      currentCount = 1;
      currentChar = str[i];
    }
  }
  if (currentCount > 1) {
    result += `${currentCount}${currentChar}`;
  } else if (currentChar) {
    result += `${currentChar}`;
  }
  return result;
}

module.exports = {
  encodeLine,
};
