const { NotImplementedError } = require("../lib");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
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
    let result = 0;

    if (Array.isArray(arr)) {
      result++;
    }

    if (arr.some((element) => Array.isArray(element))) {
      arr = arr.flat(1);
      result += this.calculateDepth(arr);
    }
    return result;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
