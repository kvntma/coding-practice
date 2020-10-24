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

const createPriorityQueue = input => {
  let lengthOfQueue = input.length;
  let priority = [];
  input = input.splice(2,lengthOfQueue);
  for (i = 0; i < input.length - 1; i++) {
    current = [];
    current.push(input[i]);
    i++;
    current.push(input[i]);
    priority.push(current);
  }
  priority.sort((a,b) => a[0] - b[0] || a[1] - b[1]);
  return priority;
}

const solution = input => {
  let priority = createPriorityQueue(input);
  let result = [];

  console.log(priority)
}


/*
4 8
1000 5
2000 5
4000 3
3000 3
500 1
1200 1
*/
/*
4 4
1000 2
2000 2
500 1
1200 0
*/
