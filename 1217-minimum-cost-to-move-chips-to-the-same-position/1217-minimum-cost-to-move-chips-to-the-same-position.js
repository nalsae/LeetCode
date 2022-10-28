/**
 * @param {number[]} position
 * @return {number}
 */
const minCostToMoveChips = (chips) => {
  let odd = 0;
  let even = 0;
    
  chips.map((chip) => (chip % 2 ? (odd += 1) : (even += 1)));
    
  return Math.min(odd, even);
};