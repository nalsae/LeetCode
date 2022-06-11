/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (matrix.length == 0) return [];
    
    let res = [];
    let row1 = 0, col1 = 0, row2 = matrix.length-1, col2 = matrix[0].length-1;
    
    while (row1 <= row2 && col1 <= col2) {
        for (let col = col1; col <= col2; col++) {
            res.push(matrix[row1][col]);    
        }
        for (let row = row1+1; row <= row2; row++) {
            res.push(matrix[row][col2]);
        }
        if (row1 < row2 && col1 < col2) {
            for (let col = col2-1; col >= col1; col--) {
                res.push(matrix[row2][col]);
            }
            for (let row = row2-1; row > row1; row--) {
                res.push(matrix[row][col1]);
            }    
        }
        
        row1++, col1++, row2--, col2--;
    }
    
    return res;
};