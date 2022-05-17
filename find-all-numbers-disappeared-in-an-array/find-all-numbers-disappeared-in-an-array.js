/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let sortedArr = [];

  for (let i = 1; i <= nums.length; i++) {
    sortedArr.push(i);
  }

  let result = sortedArr.filter((value) => !nums.includes(value));

  return result;
};