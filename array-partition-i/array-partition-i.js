/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let sum = 0;
    let i = 0;
    let j = 1;
    nums = nums.sort((a,b)=>a-b)
    while(j<nums.length){
        sum+= Math.min(nums[i],nums[j]);
        i+=2;
        j+=2;
    }
    return sum;
};