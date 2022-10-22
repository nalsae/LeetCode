/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumOperations = (nums) => {
    const k = new Set(nums);
    return k.has(0) ? k.size - 1 : k.size;
};