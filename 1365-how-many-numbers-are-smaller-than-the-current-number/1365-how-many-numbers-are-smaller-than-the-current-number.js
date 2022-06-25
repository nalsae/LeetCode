/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  let duplicateArr = nums;
  let answer = [];
  let count = 1;

  for (let i = 0; i < nums.length; i++) {
    answer.push(0);
  }

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < duplicateArr.length; j++) {
      if (duplicateArr[j] < nums[i]) {
        answer[i] += count;
      }
    }
  }
  return answer;
};