const array = [...Array(5)].map((x) => Array(10).fill(0));
//Make 2D Matrix     //Columns            //Rows
let randomArray = [5, 4, 5,8, 3, 2, 1, 4, 5]
console.log(mp2)

let mp1 = "hello";
let set = new Set(mp1);
console.log(set);

const hmap = {
  10: 15,
  25: 19,
  1: 20,
  30: 1,
  100: 1,
};

const mp = new Map();
mp.set("Kevin", 1);
mp.set("Akshdeep", 2);
let highest = 0;
let highestValue = "";
console.log(mp.get("Kevin"));

for (const element of mp) {
  let currentVal = element[1];
  console.log(currentVal);
  if (currentVal > highest) {
    highestValue = element[0];
    highest = element[1];
  }
}

console.log(highestValue);

console.log(25 in hmap);

//Returns an array SORTED in order
console.log(Object.keys(hmap));
console.log(Object.values(hmap));
//uses reduce to return highest key of the value in array.
console.log(Object.keys(hmap).reduce((a, b) => (hmap[a] > hmap[b] ? a : b)));
console.log(array)