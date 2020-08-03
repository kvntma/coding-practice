//THe problem is a dynamic programming question.
//Sometimes greedy algos can't solve this question properly.
//Create a 2d Matrix and fill the first row and column with 0's (base case)
//Check if coin can fit in value --> If it fits and there's leftover, look at the remaining
//value's current best and add it to the value we currently hold.
//Optimal answer should be on the bottom right after solving all the subproblems.

const coinChange = (coins, amount) => {
  let dp = [...Array(amount + 1).fill(amount + 1)];
  coins.sort((a, b) => a - b);
  console.log(dp);
  dp[0] = 0;
  for (i = 0; i <= amount; i++) {
    // this is the subproblem (total $ value that we're on; if i is 10, we're solving for 10)
    for (j = 0; j < coins.length; j++) {
      // this is the coin/denomination that we're on
      if (coins[j] <= i) {
        // iterate through each coin value and check to see if it's equal or less than the subproblem (5 cant fit into 3)
        dp[i] = Math.min(dp[i], 1 + dp[i - coins[j]]); // add action ( +1 ) and check previous subproblem of prev best
      } else {
        break;
      }
    }
  }
  return dp[amount] > amount ? -1 : dp[amount]; // check to see if amount is valid, and then return the final array slot
};

console.log(coinChange([1, 5, 10, 15], 25));
