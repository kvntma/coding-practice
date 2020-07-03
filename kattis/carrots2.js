const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  const nums = line.split(" ").map(Number);
  console.log(nums[1]);
});
