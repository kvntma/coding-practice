const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
});

let first = true;
let res = [];
rl.on("line", (line) => {
  if (first) {
    n = +line;
    first = false;
    if (!n || n == 0) {
      rl.close(); // if no input, or falsy input end the program
      return;
    }
    return; // continue to next line read by returning to top of line
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
    } else {
      if (res[res.length - 1] != "-") res.push(" ");
      res.push(busNumbers[i]);
    }
  }
  if (res[res.length - 1] != "-") res.push(" ");
  if (n != 1) res.push(busNumbers[busNumbers.length - 1]);
  console.log(res.join(""));
  rl.close();
});
