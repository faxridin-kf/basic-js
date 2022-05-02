const { NotImplementedError } = require("../extensions/index.js");

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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let promise = "";
  let num = 0;
  for (let i = 0; i < str.length; i++) {
    num++;
    if (str[i] === str[i + 1]) {
      continue;
    } else {
      promise += `${num === 1 ? "" : num}${str[i]}`;
      num = 0;
    }
  }
  return promise;
}

module.exports = {
  encodeLine,
};
