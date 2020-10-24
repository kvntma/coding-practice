const wordPattern = (pattern, s) => {
  let hmap = {};
  let sequence = s.split(" ");
  for (i = 0; i < pattern.length; i++) {
    if (hmap[pattern[i]] === undefined) {
      hmap[pattern[i]] = sequence[i];
    } else if (hmap[pattern] !== sequence[i]) {
      return "false";
    }
  }
  return true;
};
