/**
 * @param {string} s
 * @return {number}
 */
const maxDepth = (s) => {
    let maxCount = 0;
    let count = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            maxCount = Math.max(maxCount, ++count);
        } else if (s[i] === ')') {
            count--;
        }
    }
    
    return maxCount;
};