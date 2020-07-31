function knapSack(maxCapacity, itemWeight, itemValue, numberOfItems) {
  let matrix = [...Array(numberOfItems + 1)].map((x) =>
    Array(maxCapacity + 1).fill(0)
  );
  for (i = 0; i <= numberOfItems; i++) {
    for (w = 0; w <= maxCapacity; w++) {
      if (i === 0 || w === 0) {
        matrix[i][w] = 0;
      } else if (itemWeight[i - 1] <= w) {
        const a = itemValue[i - 1] + matrix[i - 1][w - itemWeight[i - 1]];
        const b = matrix[i - 1][w];
        matrix[i][w] = Math.max(a, b); // matrix[i][w] = a > b ? a : b;
      } else {
        matrix[i][w] = matrix[i - 1][w];
      }
    }
  }
  console.log(matrix);
  return matrix[numberOfItems][maxCapacity];
}

/*
let val = [60, 100, 120];
let wt = [10, 20, 30];
let W = 50;
let n = val.length;
console.log(knapSack(W, wt, val, n)); // 220
*/

const values = [3, 4, 5],
  weights = [2, 3, 4],
  capacity = 5,
  n = values.length;
console.log(knapSack(capacity, weights, values, n)); //outputs 7
