/*

Given an array of 4 digits, return the largest 24 hour time that can be made.

The smallest 24 hour time is 00:00, and the largest is 23:59.  Starting from 00:00, a time is larger if more time has elapsed since midnight.

Return the answer as a string of length 5.  If no valid time can be made, return an empty string.

Input: [1,2,3,4]
Output: "23:41"

Input: [5,5,5,5]
Output: ""

*/
const largestTimeFromDigits = (array) => {
  if (array.reduce((a, b) => a + b) == 0) {
    return "00:00";
  }

  let res;
  const max = 2359;
  let currentDif = 9999;
  let currentNumber;

  const perm = (xs) => {
    let ret = [];

    for (let i = 0; i < xs.length; i = i + 1) {
      let rest = perm(xs.slice(0, i).concat(xs.slice(i + 1)));

      if (!rest.length) {
        ret.push([xs[i]]);
      } else {
        for (let j = 0; j < rest.length; j = j + 1) {
          ret.push(parseInt([xs[i]].concat(rest[j]).join("")));
        }
      }
    }

    return ret;
  };

  res = perm(array);
  console.log(res);

  for (i = 0; i <= res.length; i++) {
    let dif = max - res[i];
    if (dif < currentDif && dif >= 0) {
      currentDif = dif;
      currentNumber = res[i];
    } else if (currentDif == 9999) return "";
  }
  console.log(currentNumber);
  currentNumber = currentNumber.toString();
  return currentNumber.slice(0, 2) + ":" + currentNumber.slice(2, 4);
};

console.log(largestTimeFromDigits([1, 0, 0, 0]));
