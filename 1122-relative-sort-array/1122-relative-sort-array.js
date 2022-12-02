/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
const relativeSortArray = (arr1, arr2) => {
  const part1 = arr2.map((x) => arr1.filter((y) => y == x)).flat();
  const part2 = arr1.filter((x) => !arr2.includes(x)).sort((a, b) => a - b);
    
  return [...part1, ...part2];
};