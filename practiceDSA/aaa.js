const returnCoins = (amount) => {
  let total = [];
  const denominations = [1.0, 0.25, 0.1, 0.05, 0.01];

  denominations.forEach((coin) => {
    while (amount >= coin) {
      amount = Math.round((amount - coin) * 100) / 100;
      total.push(coin);
    }
  });
  console.log(total.length);
  return total;
};

console.log(returnCoins(1.19));
