const fizzBuzz = (n) => {
  let values = [];
  for (i = 1; i < n + 1; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      values.push("FizzBuzz");
    } else if (i % 5 == 0) {
      values.push("Buzz");
    } else if (i % 3 == 0) {
      values.push("Fizz");
    } else values.push(i.toString());
  }
  return values;
};

const n = 15;
console.log(fizzBuzz(n));
