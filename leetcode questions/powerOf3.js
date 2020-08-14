var isPowerOfThree = function (n) {
  if (n == 0) {
    return false;
  }
  let ans = 0;
  let counter = 0;
  while (ans <= n) {
    ans = 3 ** counter;
    if (ans == n) {
      return true;
    }
    counter++;
  }
  return false;
};

console.log(isPowerOfThree(9));

/*
"Math Approach"
Only a power of 3 if the max int mod number is 0
const isPowerOfThree = n => {
    return n >= 0 && 3486784401 % n === 0;
};

*/
