// importing and instantiating the readline interface
import { createInterface } from "readline";
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Reading multiple lines, each line include space-split integers
const input = [];
rl.on("line", (line) => {
  input.push(...line.split(" "));
});

// when there's no more data to process, we run the solution
rl.on("close", () => {
  console.log(solution(input));
});

const splitToDigit = (number) => {
  return [...(number + "")].map(Number);
};

const solution = (input) => {
  let num1 = splitToDigit(input[0]);
  let num2 = splitToDigit(input[1]);

  if (num2.length >= num1.length) {
    [num1, num2] = [num2, num1];
  }
  //num 1 will always be longer
  let j = num2.length - 1;
  for (i = num1.length - 1; i >= 0; i--) {
    if (num2[j] === undefined) {
      num2[j] = 0;
    }
    let sumOfDigits = num1[i] + num2[j];
    if (sumOfDigits > 9 && i != 0) {
      sumOfDigits = sumOfDigits % 10;
      num1[i - 1] += 1;
    }
    num1[i] = sumOfDigits;
    j--;
  }
  return num1.join("");
};
