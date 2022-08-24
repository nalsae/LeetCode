/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
const findFinalValue = (a, v) => {
   let setA = new Set(a);
    
   while (setA.has(v)) v *= 2;
    
   return v;
};