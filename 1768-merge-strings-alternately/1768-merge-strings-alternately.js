/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = (a, b) => {
  const maxLength = Math.max(a.length, b.length);
    
  let result = '';

  for (let i = 0; i < maxLength; i += 1) {
    result += (a[i] ?? '') + (b[i] ?? '');
  }

  return result;
}