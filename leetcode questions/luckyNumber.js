// Lucky if it is MIN in [r] / Max in [c]
// go through array matrix starting from row 0, check if this is lowest in the row.
//            From this min value, check if this is the highest value in the column. If it is not break, restart.
// ---------------------------------------------------------------------------------------------------------
// Now just check if the current max in the column is also the same value as the min row u got before.
// If none, return empty array.

const luckyNumbers = (matrix) => {
  for (i = 0; i < matrix.length; i++) {
    let ans = [];
    let minRowValue = Math.min(...matrix[i]);
    let minIndex = matrix[i].indexOf(minRowValue);

    let currentMaxCol = matrix[i][minIndex];

    for (j = 0; j < matrix.length; j++) {
      if (matrix[j][minIndex] > currentMaxCol) {
        currentMaxCol = matrix[j][minIndex];
        break;
      }
    }
    currentMaxCol == minRowValue && ans.push(currentMaxCol);
  }

  return ans;
};
