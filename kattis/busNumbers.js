const readline = require("readline");
const { lstat } = require("fs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let first = true;
let res = [];
rl.on("line", (line) => {
  if (first) {
    n = +line;
    first = false;
    if (!n || n == 0) {
      rl.close();
      return;
    }
    return;
  }
  let busNumbers = line
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b); // take numbers
  res.push(busNumbers[0]);
  for (i = 1; i < busNumbers.length - 1; i++) {
    if (
      busNumbers[i - 1] == busNumbers[i] - 1 &&
      busNumbers[i + 1] == busNumbers[i] + 1
    ) {
      if (res[res.length - 1] == "-") continue;
      res.push("-");
      console.log(res);
    } else {
      res.push(busNumbers[i]);
      res.push(" ");
      console.log(res);
    }
  }
  if (n != 1) res.push(busNumbers[busNumbers.length - 1]);
  console.log(res.join(""));
  rl.close();
});
