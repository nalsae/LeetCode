/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let map = {};
    
    for(let num of nums) {
        map[num] ? map[num]++ : map[num] = 1; 
    }
    
    
    let sum = 0;
    
    for(let num in map) {
        (map[num] === 1) && (sum += Number(num));
    }
    
    return sum;
};