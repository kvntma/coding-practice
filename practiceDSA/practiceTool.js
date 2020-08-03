const greedyCoin = (amount, denominations) => {
  denominations.sort((a, b) => b - a);

  let coinsReturned = [];
  for (i = 0; i < denominations.length; i++) {
    while (denominations[i] <= amount) {
      amount = amount - denominations[i];
      coinsReturned.push(denominations[i]);
    }
  }
  console.log(`Total coins = ${coinsReturned.length}`);
  return coinsReturned;
};

const [amount, denominations] = [1.09, [0.01, 0.05, 0.1, 0.25, 1.0]];
console.log(greedyCoin(amount, denominations));
