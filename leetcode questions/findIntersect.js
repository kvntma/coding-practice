const intersect = (nums1, nums2) => {
  let hmap = {};
  let intersection = [];
  if (nums1.length >= nums2.length) {
    nums2.map((x) => (hmap[x] = x in hmap ? hmap[x] + 1 : 1));
    for (const num of nums1) {
      if (hmap[num] > 0) {
        intersection.push(num);
        hmap[num] -= 1;
      }
    }
  } else {
    nums1.map((x) => (hmap[x] = x in hmap ? hmap[x] + 1 : 1));
    for (const num of nums2) {
      if (hmap[num] > 0) {
        intersection.push(num);
        hmap[num] -= 1;
      }
    }
  }
  return intersection;
};
