// importing and instantiating the readline interface
const readline = require("readline");
const rl = readline.createInterface({
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
  solution(input);
});

let wordToValue = {};
let valueToWords = {};

const addToDictionary = (word, value) => {
  if (wordToValue[word] !== undefined) {
    let d = wordToValue[word];
    delete valueToWords[d];
  }

  wordToValue[word] = parseInt(value);
  valueToWords[parseInt(value)] = word;
  return i += 2;
}

// const checkIfWordExists = (word) => {
//   let result = (wordToValue[word] !== undefined) ? true : false;
//   return result;
// }

const calculateValue = numberOfCalculations => {
  let answer = wordToValue[numberOfCalculations[0]];
  for (j = 1; j < numberOfCalculations.length; j++) {
    let addOrSubtract = numberOfCalculations[j];
    if (addOrSubtract === '+') {
      j++;
      answer += wordToValue[numberOfCalculations[j]];
    } else {
      j++ 
      answer -= wordToValue[numberOfCalculations[j]];
    }
  }
  if (!Number.isInteger(answer) || valueToWords[answer] === undefined) {
    return numberOfCalculations.join(" ") + " = unknown";
  } else {
    return numberOfCalculations.join(" ") + " = " + valueToWords[answer];
  }
}

const solution = input => {
  for (i = 0; i < input.length; i++){

    if (input[i] === 'def') {
      addToDictionary(input[i+1], input[i+2]);
    } else if (input[i] === 'calc') {
      i++;
      let numberOfCalculations = [];

      while (input[i] !== '=') {
        numberOfCalculations.push(input[i]);
        i++;
      }
      console.log(calculateValue(numberOfCalculations));
    }

    if (input[i] === "clear") {
      valueToWords = {};
      wordToValue = {};
    }
  }
}
