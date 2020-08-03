//sortedSquares
//return squared in sorted order

const input = [-4, -1, 0, 3, 10];

const sortedSquares = (arr) => {
  arr = arr.map((element) => element * element);
  arr.sort((a, b) => a - b);
  return arr;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
