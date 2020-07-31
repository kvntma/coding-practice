const { RuleTester } = require("eslint");
const { check } = require("prettier");

// main issue: time complexity, you don't want to check every single solution.
// solution: only check mismatches! use two pointers.
// start from 0 and end of array, and iterate towards the middle
// if there is a mismatch, this means this point removed can be a palindrome - 2 substrings to check
// declare f

const validPalindrome = (s) => {
  const cut = (s, i) => s.substring(0, i) + s.substring(i + 1);

  const checkPalindrome = (substring) => {
    if (substring == substring.split("").reverse().join("")) {
      return true;
    }
    return false;
  };

  let [pointerStart, pointerEnd] = [0, s.length - 1];
  while (pointerEnd > pointerStart) {
    if (s[pointerStart] != s[pointerEnd]) {
      if (
        checkPalindrome(cut(s, pointerEnd)) ||
        checkPalindrome(cut(s, pointerStart))
      ) {
        return true;
      } else {
        return false;
      }
    }

    pointerStart++;
    pointerEnd--;
  }
  return true;
};

console.log(validPalindrome("aabbbbaeea"));
