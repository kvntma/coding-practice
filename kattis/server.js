const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lineno = 0;
let counter = 0;
let time;

rl.on("line", (line) => {
  lineno++;
  let nums = line.split(" ");
  if (lineno == 1) {
    time = parseInt(nums[1]);
  }
  if (lineno == 2 && line) {
    while (time > 0 && nums.length > 0) {
      time = time - nums.shift();
      if (time >= 0) {
        counter++;
      }
    }
    console.log(counter);
    rl.close();
  }
});
