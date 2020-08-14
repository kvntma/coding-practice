const numberOfIslands = (arr) => {
  let islandCount = 0;
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[0].length; j++) {
      if (
        arr[i][j] == "1" ||
        arr[i - 1][j] == "1" ||
        arr[i + 1][j] == "1" ||
        arr[i][j + 1] == "1" ||
        arr[i][j - 1] == "1"
      )
        islandCount++;
    }
    if (arr[i - 1][j] == undefined || arr[i][j - 1] == undefined) {
      continue;
    }
  }
  return islandCount;
};

console.log(
  numberOfIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
);
