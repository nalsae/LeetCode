/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(S) {
    let arr = [];
    let low = 0;
    let high = S.length;
    
    for (let i = 0; i <= S.length; i++){
        if (S.charAt(i) === 'I'){
            arr.push(low++)
        } else {
            arr.push(high--)
        }
    }
    return arr;
};