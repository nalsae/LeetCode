/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let result = [];
  for (const item of s.split(' ')) {
    result.push(item.split('').reverse().join(''));
  }

  return result.join(' ');
};