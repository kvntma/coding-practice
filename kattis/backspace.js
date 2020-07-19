const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let res = [];
rl.on("line", (line) => {
  let sentence = line.split("");
  sentence.forEach((letter) => {
    if (letter == "<") {
      res.pop();
    } else {
      res.push(letter);
    }
  });
  console.log(res.join(""));
  rl.close();
});
