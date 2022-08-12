/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
  let num = Math.floor(n / 2); 
  let arr = [];

  for (let i = 1; i <= num; i++){
      arr.push(i, -i);
     } 

  if (n % 2 !== 0){
    arr.push(0);
  }
  
  return arr;
}