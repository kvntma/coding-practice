const checkN = (arr) => {
  return arr.filter((number) => arr.includes(number * 2));
};

console.log(checkN([0, 1, 2, 4, 8, 0]));
