/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = (grid) => {

    let height = grid.length;
    let width = grid[0].length;

    let count = 0;
	
    for (let row = 0; row < height; row += 1) {
        for (let col = 0; col < width; col += 1) {
            if (grid[row][col] === 1) {
                  count += 4;
				
                  if (row > 0 && grid[row - 1][col] === 1) count--;
                  if (row < height - 1 && grid[row + 1][col] === 1) count--;
                  if (grid[row][col - 1] === 1) count--;
                  if (grid[row][col + 1] === 1) count--;
            }
        }
    }
    return count;
};