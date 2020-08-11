// SQUARE = 4 sides
// 2 squares side by side, perimeter = 6.
// reduction of 1 side each when they are joined. each touching perimeter reduce by 2.
// find anytime there's a square.

const islandPerimeter = (grid) => {
  let perimeter = 0;

  for (i = 0; i < grid.length; i++) {
    for (j = 0; j < grid[0].length; j++) {
      if (grid[i][j]) {
        perimeter += 4;
      }
      if (i > 0 && grid[i - 1][j]) perimeter -= 2;
      if (j > 0 && grid[i][j - 1]) perimeter -= 2;
    }
  }
  return perimeter;
};
