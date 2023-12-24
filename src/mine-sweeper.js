const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {

  const checkCeil = (x, y) => {
    let sum = 0;
    for (let i = Math.max(0, x - 1); i < Math.min(matrix.length, x + 2); i += 1) {
      for (let j = Math.max(0, y - 1); j < Math.min(matrix[0].length, y + 2); j += 1) {
        if (matrix[i][j] && !(i === x && j === y)) {
          sum += 1;
        }
      }
    }
    return sum;
  };
  const result = [];
  for (let i = 0; i < matrix.length; i += 1) {
    result.push([]);
    for (let j = 0; j < matrix[0].length; j += 1) {
      result[i][j] = checkCeil(i, j);
    }
  }
  return result;
}


module.exports = {
  minesweeper
};
