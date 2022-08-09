/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = (words, pref) => {
  let count = 0;
  for (let word of words) {
    if (word.startsWith(pref)) {
        count++;
    }
  }
  return count;
}