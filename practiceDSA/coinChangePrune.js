const coinChange = (coins, amount) => {
  coins.sort((a, b) => b - a);

  let res = Infinity;

  const find = (k, amount, count) => {
    const coin = coins[k];

    // last smallest coin
    if (k === coins.length - 1) {
      if (amount % coin === 0) {
        res = Math.min(res, count + ~~(amount / coin));
      }
    } else {
      for (let i = ~~(amount / coin); i >= 0 && count + i < res; i--) {
        // count + i < res is for pruning, avoid unnecessary calculation
        find(k + 1, amount - coin * i, count + i);
      }
    }
  };

  find(0, amount, 0);
  return res === Infinity ? -1 : res;
};

console.log(coinChange([1, 5, 10, 25], 36));
