/**
 * @param {string} s
 * @return {number}
 */
const balancedStringSplit = function(s) {
    
    let match = 0;
	let balance = 0;

	for (let i = 0; i < s.length; i++) {

		if (s[i] === "R") {
			balance -= 1;
		} else if (s[i] === "L") {
			balance += 1;
		}

		if (balance === 0) {
			match += 1;
		}
	}

	return match;
};