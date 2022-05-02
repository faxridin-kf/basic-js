const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let elemCount = 1;
    for (let elem of arr) {
      let depthCount = 1;
      if (Array.isArray(elem)) {
        depthCount += this.calculateDepth(elem);
      }
      if (depthCount > elemCount) {
        elemCount = depthCount;
      }
    }
    return elemCount || 0;
  }
}

module.exports = {
  DepthCalculator,
};
