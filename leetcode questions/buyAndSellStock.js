const stockPrices = [7, 1, 5, 3, 6, 4];

const maxProfit = (arr) => {
  let minLow = Number.MAX_SAFE_INTEGER;
  let max = 0;

  for (i = 0; i < arr.length; i++) {
    if (minLow > arr[i]) {
      minLow = arr[i];
    }
    if (arr[i] - minLow > max) {
      max = arr[i] - minLow;
    }
  }
  return max;
};

/*
const stockPrices = [7, 1, 5, 3, 6, 4];

const maxProfit = (arr) => {
  let max = 0;
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      let current = arr[j] - arr[i];
      if (current > max) {
        max = current;
      }
    }
  }
  return max;
};


*/
console.log(maxProfit(stockPrices));
