const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const makeMap = (s) => {
    const m = new Map();
    s.split('').forEach((char) => {
      if (m.has(char)) {
        m.set(char, m.get(char) + 1);
      } else {
        m.set(char, 1);
      }
    });
    return m;
  };
  const map1 = makeMap(s1);
  const map2 = makeMap(s2);
  let count = 0;
  map1.forEach((value, char) => {
    if (map2.has(char)) count += Math.min(map1.get(char), map2.get(char));
  });
  return count;
}

module.exports = {
  getCommonCharacterCount,
};
