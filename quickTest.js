const array = [[], [1, 2, 3, 4, 5, 6]];

console.log(Math.max(...array[1]));
const array = [...Array(5)].map((x) => Array(10).fill(0));
//Make 2D Matrix     //Columns            //Rows
console.log(array);

const hmap = {
  10: 15,
  25: 19,
  1: 20,
  30: 1,
  100: 1,
};

//Returns an array SORTED in order
console.log(Object.keys(hmap));
//uses reduce to return highest key of the value in array.
console.log(Object.keys(hmap).reduce((a, b) => (hmap[a] > hmap[b] ? a : b)));
