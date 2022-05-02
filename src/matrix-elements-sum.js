const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let res = 0;
  let columns = matrix[0].length;
  let rows = matrix.length;
  for (let i = 0; i < columns; i++) {
    for (let e = 0; e < rows; e++) {
      let matrixElement = matrix[e][i];
      if (!matrixElement) {
        break;
      }
      res += matrixElement;
    }
  }
  return res;
}

module.exports = {
  getMatrixElementsSum,
};
