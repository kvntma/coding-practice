const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let res = new Set();
let lineno = 0;
let width;
rl.on("line", (line) => {
  lineno++;
  let nums = line.split(" ").map(Number);
  if (lineno == 1) {
    width = nums[0];
  } else {
    nums.push(width);
    for (i = 0; i <= nums.length; i++) {
      res.add(nums[i]);
      for (j = i + 1; j <= nums.length - 1; j++) {
        res.add(Math.abs(nums[i] - nums[j]));
      }
    }
    res.delete(undefined);
    let arr = [...res];
    arr.sort((a, b) => a - b);
    console.log(arr.join(" "));
  }
});
