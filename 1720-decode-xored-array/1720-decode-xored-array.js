/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = (encoded, first) => {
    let result = [first]
    encoded.forEach((x, i) => result.push(result[i] ^ x))
    
    return result;
}