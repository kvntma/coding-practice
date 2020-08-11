const maxSubArray = (nums) => {
  let maxSoFar = nums[0],
    max = nums[0];

  for (i = 1; i < nums.length; i++) {
    //make sure you start at 2nd element.
    maxSoFar = Math.max(nums[i], nums[i] + maxSoFar);
    if (maxSoFar > max) max = maxSoFar;
  }
  return max;
};

const arr = [1, 2];
console.log(maxSubArray(arr));

// if it's bigger, keep moving right.
// if it's smaller, move window start left.
/*


const maxSubArray = (arr) => {
  let windowStart = 0,
    windowEnd = 0,
    highestSum = Number.MIN_SAFE_INTEGER;
  while (windowEnd < arr.length - 1) {
    let current = arr[windowEnd] - arr[windowStart];
    console.log(current);
    if (current >= highestSum) {
      windowEnd++;
      highestSum = current;
    } else {
      windowStart++;
    }
    console.log(current);
  }
};


Not sliding window!!
*/
