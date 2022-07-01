/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = (word1, word2) => {
	let str1, str2;
	let length = Math.max(word1.length, word2.length);

	for (let i = 0; i < length; i++) {
		const char1 = word1[i];
		const char2 = word2[i];

		if (char1) str1 += char1;
		if (char2) str2 += char2;
	}

	return str1 === str2;
};