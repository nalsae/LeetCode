/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const luckyNumbers = (matrix) => {
    for (let i = 0; i < matrix.length; i += 1) {
        let min = Math.min(...matrix[i]),
            idx = matrix[i].indexOf(min);

        if (matrix.every(arr => arr[idx] <= min)) return [min];
    }

    return [];
};