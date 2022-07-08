/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = (mat) => {
  let sum = 0;
  let j = mat[0].length - 1;

  for (let i = 0; i < mat.length; i++, j--) {
    if (i !== j) 
        sum += mat[i][j];
        sum += mat[i][i];
    }

  return sum;
}