const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (Array.isArray(arr) === false) {
    throw Error('\'arr\' parameter must be an instance of the Array!');
  }

  let pointer = 0;
  const result = [];
  const discarded = new Set();

  const doubleNext = () => {
    if (pointer >= arr.length - 1) return;
    result.push(arr[pointer + 1]);
  };

  const discardNext = () => {
    if (pointer >= arr.length - 1) return;
    discarded.add(pointer + 1);
    pointer += 1;
  };

  const doublePrev = () => {
    if (pointer === 0) return;
    if (discarded.has(pointer - 1) === false) {
      result.push(arr[pointer - 1]);
    }
  };

  const discardPrev = () => {
    if (pointer === 0) return;
    if (discarded.has(pointer - 1)) return;
    discarded.add(pointer - 1);
    result.pop();
  };

  while (pointer < arr.length) {
    switch (arr[pointer]) {
      case '--discard-next':
        discardNext();
        break;
      case '--discard-prev':
        discardPrev();
        break;
      case '--double-next':
        doubleNext();
        break;
      case '--double-prev':
        doublePrev();
        break;
      default:
        result.push(arr[pointer]);
        break;
    }
    pointer += 1;
  }
  return result;
}

module.exports = {
  transform,
};
