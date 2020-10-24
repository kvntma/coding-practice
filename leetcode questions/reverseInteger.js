const reverse = (x) => {
  let negative = false;
  let digits = [];
  if (x < 0) {
    x = Math.abs(x);
    negative = true;
  } 
  while (x > 0) {
    digits.push(x % 10);
    x = parseInt(x / 10);
  }
  if (negative) {
    digits.unshift("-");
  }

  if (digits.join("") <= -(2 ** 31) || digits.join("") >= 2 ** 31 - 1) return 0;

  return digits.join("");
};

console.log(reverse(-12345));
