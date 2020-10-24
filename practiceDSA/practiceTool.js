const greedyCoin = (amount, denominations) => {
  denominations.sort((a, b) => b - a);

  let coinsReturned = [];
  for (i = 0; i < denominations.length; i++) {
    while (denominations[i] <= amount) {
      amount = Number((amount - denominations[i]).toPrecision(5)) ;
      console.log(amount)
      coinsReturned.push(denominations[i]);
    }
  }
  console.log(`Total coins = ${coinsReturned.join(" ")}`);
  return coinsReturned;
};

const [amount, denominations] = [111.21, [0.01, 0.05, 0.1, 0.25, 1.0, 100]];
console.log(greedyCoin(amount, denominations));
