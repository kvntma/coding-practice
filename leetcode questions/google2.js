/*
Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

The update(i, val) function modifies nums by updating the element at index i to val.

Given nums = [1, 3, 5]

sumRange(0, 2) -> 9
update(1, 2)
sumRange(0, 2) -> 8

*/

function NumArray(nums) {
  this.nums = nums;
}

NumArray.prototype.update = function (i, val) {
  console.log(`index ${i} updated to ${val}`);
  return (this.nums[i] = val);
};

NumArray.prototype.sumRange = function (i, j) {
  return this.nums.slice(i, j + 1).reduce((a, b) => a + b); //sum up
};

var obj = new NumArray([1, 3, 5]);
console.log(obj.sumRange(0, 2));
obj.update(1, 2);
console.log(obj.sumRange(0, 2));
