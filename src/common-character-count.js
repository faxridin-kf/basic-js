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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
 let inclide = 0;
  if (s1.length <= s2.length) {
    let arr = [...s1].sort();
    let arr1 = [...s2].sort();
    arr.forEach((elem) => {
      if (arr1.includes(elem)) {
        inclide++;
        arr1.splice(arr1.indexOf(elem), 1);
      }
    })
  }
  return inclide;
}

module.exports = {
  getCommonCharacterCount
};
