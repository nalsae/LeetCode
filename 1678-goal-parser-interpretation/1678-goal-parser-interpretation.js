/**
 * @param {string} command
 * @return {string}
 */
const interpret = function(command) {
    return command.split("()").join("o").split("(al)").join("al");
};