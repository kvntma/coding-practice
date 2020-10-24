// importing and instantiating the readline interface
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Reading multiple lines, each line include space-split integers
const input = 0;
rl.on("line", (line) => {
  input = line;
});

// when there's no more data to process, we run the solution
rl.on("close", () => {
  console.log(solution(input));
});

const solution = (n) => {
  if (n < 2) {
    return 4;
  }
  return solution(n - 1) + solution(n - 2);
};
