const coinChange = (coins, amount) => {
  let dp = [...Array(amount + 1).fill(amount + 1)];
  coins.sort((a, b) => a - b);
  dp[0] = 0;
  for (i = 0; i <= amount; i++) {
    // this is the subproblem (total $ value that we're on)
    for (j = 0; j < coins.length; j++) {
      // this is the coin/denomination that we're on
      if (coins[j] <= i) {
        // through each coin value and check to see if it's equal or less than the subproblem
        dp[i] = Math.min(dp[i], 1 + dp[i - coins[j]]); // add action ( +1 ) and check previous subproblem of prev best
      } else {
        break;
      }
    }
  }
  return dp[amount] > amount ? -1 : dp[amount]; // check to see if amount is valid, and then return the final array slot
};

console.log(coinChange([474, 83, 404, 3], 264));
