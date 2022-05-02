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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let res = 0;
  let num = `${n}`
  num.split('').forEach((e,i)=>{
    let delDigit = num.substring(0, i) + num.substring(i + 1, num.length)
    if(delDigit[0] == '0'){
      delDigit = delDigit.replace('0', '1')
    }
    if(res< delDigit){
      res = delDigit
    }
  })
  return parseInt(res, 10)
}

module.exports = {
  deleteDigit
};
