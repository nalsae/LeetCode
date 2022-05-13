var sortedSquares = function (nums) {
  let map = nums.map(function (v) {
    return v * v;
  });
  map = map.sort(function (a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
  });
  return map;
};