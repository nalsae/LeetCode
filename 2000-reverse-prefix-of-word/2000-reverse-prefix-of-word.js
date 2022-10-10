/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
const reversePrefix = (word, ch) => {
    const index = word.indexOf(ch);
    
    if (index === -1) return word;

    const sliceString = word
    .slice(0, index + 1)
    .split("")
    .reverse()
    .join("");

    return sliceString + word.slice(index + 1);
};