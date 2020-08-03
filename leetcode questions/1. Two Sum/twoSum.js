const twoSum = (nums, target) => {
  let checkNums = {};
  for (i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (checkNums[diff] != undefined) {
      return [checkNums[diff], i];
    }
    checkNums[nums[i]] = i;
  }
};

let nums = [2, 7, 11, 15],
  target = 9;

console.log(twoSum(nums, target));
