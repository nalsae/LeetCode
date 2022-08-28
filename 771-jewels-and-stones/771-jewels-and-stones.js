/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones = function(jewels, stones) {
    const jewelsRegExp = new RegExp(`[${jewels}]`,'g')
    
    return stones.match(jewelsRegExp) ? stones.match(jewelsRegExp).length : 0;
};