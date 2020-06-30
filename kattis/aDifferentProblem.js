const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  var nums = parseInt(line.split(" "));
  var a = parseInt(nums[0]);
  var b = parseInt(nums[1]);
  res = Math.abs(b - a);
  console.log(res);
});
