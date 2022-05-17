/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  if (arr.length < 3) return false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) return false;
  }

  let maxNum = Math.max(...arr);

  let index = arr.indexOf(maxNum);

  if (index === 0 || index === arr.length - 1) return false;

  for (let i = 0; i < arr.length; i++) {
    if (i <= index) {
      if (arr[i - 1] >= arr[i]) return false;
    } else {
      if (arr[i - 1] <= arr[i]) return false;
    }
  }
  return true;
};