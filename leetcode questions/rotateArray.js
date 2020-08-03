// q 189.
//Given an array, rotate the array to the right by k steps, where k is non-negative.
// problem --> use O(1) space
// solution, reverse array and swap numbers accordingly.
// another solution, pop numbers continously and unshift until done. keep track of k.

const rotate = (arr, k) => {
  k = k % arr.length;
  while (k) {
    arr.unshift(arr.pop());
    k--;
  }
  return arr;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
