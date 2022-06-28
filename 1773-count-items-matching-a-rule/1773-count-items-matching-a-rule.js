/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
const RULE_IDX = {
    'type': 0,
    'color': 1,
    'name': 2
};

var countMatches = function(items, ruleKey, ruleValue) {
    return items
        .reduce((answer, item) => item[RULE_IDX[ruleKey]] === ruleValue ? answer + 1 : answer, 0);
};