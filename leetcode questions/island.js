//go through grid.
//if you see 1 add 4.
//Check surrounding -1 per surrounding.

const islandPerimeter = (grid) => {
  let perimeter = 0;
  for (i = 0; i < grid.length; i++) {
    for (j = 0; j < grid[i].length; j++) {
      if (!grid[i - 1][j] || grid[i - 1][j] === undefined) {
        perimeter++;
      } //above
      if (!grid[i + 1][j]) {
        perimeter++;
      } //below
      if (!grid[i][j - 1]) {
        perimeter++;
      } //left
      if (!grid[i][j + 1]) {
        perimeter++;
      } //right
    }
  }
  return perimeter;
};

console.log(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ])
);
