const rotate = (matrix) => {
  let grid = matrix.length;
  for (i = 0; i < grid; i++) {
    for (j = i; j < grid; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  for (i = 0; i < grid; i++) {
    let counter = 0;
    for (j = grid - 1; j >= grid / 2; j--) {
      [matrix[i][counter], matrix[i][j]] = [matrix[i][j], matrix[i][counter]];
      counter++;
    }
  }

  return matrix;
};
