const containsDuplicate = (nums) => {
  let unique = new Set();
  for (const num in nums) {
    if (unique.has(num)) {
      return false;
    } else {
      unique.add(num);
    }
  }
  return true;
};
