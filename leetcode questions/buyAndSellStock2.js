const maxProfit = (prices) => {
  if (prices.length <= 1) return 0;
  let profit = 0;
  let currentMin = prices[0];
  for (i = 1; i <= prices.length; i++) {
    if (prices[i] < currentMin) {
      currentMin = prices[i];
    } else if (prices[i] > currentMin) {
      profit += prices[i] - currentMin;
      currentMin = prices[i];
    }
  }
  return profit;
};
