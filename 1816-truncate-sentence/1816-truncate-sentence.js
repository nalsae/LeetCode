/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let newS = s.split(" ").splice(0, k).join(" ");
    
    return newS;
};