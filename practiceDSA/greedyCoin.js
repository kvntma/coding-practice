//sort denominations
//[100,25,10,5,1]
//start from largest denomination that is smaller than value -> 25
//subtract denomination until you reach a value that is smaller than the current value
//add value to answer
//repeat until 0

function greedyCoin(amount, denominations) {
  const sortDescending = (coins) => {
    return coins.sort((a, b) => b - a);
  };

  let totalCoins = []; //answer
  const sortedCoins = sortDescending(denominations); //sort coins by descending order

  sortedCoins.forEach((coin) => {
    while (amount >= coin) {
      amount = amount - coin;
      totalCoins.push(coin);
    }
  });

  return totalCoins;
}

const [amount, denominations] = [90, [1, 5, 10, 25, 100]];
console.log(greedyCoin(amount, denominations));
