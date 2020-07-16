inputArray = "pwwkew";

const longestSubstring = (arr) => {
  let longest = 0;
  let windowEnd = 0;
  let windowStart = 0;
  let set = new Set();

  while (windowEnd < arr.length && windowStart < arr.length) {
    let letter = arr[windowEnd];
    if (!set.has(letter)) {
      set.add(letter);
      windowEnd++;
      longest = Math.max(longest, windowEnd - windowStart);
    } else {
      set.delete(arr[windowStart]);
      windowStart++;
    }
  }
  return longest;
};

console.log(longestSubstring(inputArray));
