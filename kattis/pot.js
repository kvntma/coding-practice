// importing and instantiating the readline interface
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Reading multiple lines, each line include space-split integers
const input = [];
rl.on("line", (line) => {
  input.push(...line.split(" ").map((x) => parseInt(x)));
});

// when there's no more data to process, we run the solution
rl.on("close", () => {
  console.log(solution(input));
});

const solution = (input) => {
  let ans = 0;

  for (i = 1; i < input.length; i++) {
    let pow = input[i] % 10;
    ans += Math.pow(Math.floor(input[i] / 10), pow);
  }

  return ans;
};
