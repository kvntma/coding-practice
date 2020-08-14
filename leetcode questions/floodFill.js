// start at co-ordinate
// check if up, lett, right, down
// if valid > replace int with "newColor"
// if outside range of grid, return || if checked before.
// call dfs again with up, left, down, right co=ordinate

const floodFill = (image, sr, sc, newColor) => {
  let originalColor = image[sr][sc];
  let checked = new Set();
  const dfs = (sr, sc) => {
    if (
      sr >= 0 &&
      sr < image.length &&
      sc >= 0 &&
      sc < image[0].length &&
      image[sr][sc] == originalColor
    ) {
      if (!checked.has(sr.toString() + sc.toString())) {
        image[sr][sc] = newColor;
        checked.add(sr.toString() + sc.toString());
        dfs(sr - 1, sc);
        dfs(sr + 1, sc);
        dfs(sr, sc - 1);
        dfs(sr, sc + 1);
      }
    } else return;
  };
  dfs(sr, sc);
  return image;
};
