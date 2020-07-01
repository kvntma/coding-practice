const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let nums = line.split(" ");
  let res;
  if (!res) {
    res = parseInt(nums[1]);
  }
  console.log(res);
});
