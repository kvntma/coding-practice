const removeDuplicates = (nums) => {
  for (i = nums.length; i >= 1; i--) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
    }
  }
  return nums.length;
};
