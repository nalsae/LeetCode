/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  let newArr = [];

  for (let i = 0; i < nums.length; i++) {
    newArr.push(nums[i]);
  }

  let concatArr = [...nums, ...newArr];
  return concatArr;
};