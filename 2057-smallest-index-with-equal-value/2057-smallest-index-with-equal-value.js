/**
 * @param {number[]} nums
 * @return {number}
 */
const smallestEqual = (nums) => nums.findIndex((n, i) => i % 10 === n);