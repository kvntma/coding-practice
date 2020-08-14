const numIslands = (grid) => {
  let counter = 0;

  const dfs = (i, j) => {
    if (
      i < 0 ||
      j < 0 ||
      j >= grid[0].length ||
      i >= grid.length ||
      grid[i][j] == "0"
    )
      return;
    grid[i][j] = "0";
    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j - 1);
    dfs(i, j + 1);
  };

  for (i = 0; i < grid.length; i++) {
    for (j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == "1") {
        dfs(i, j);
        counter++;
      }
    }
  }

  return counter;
};
