const countLetters = (S) => {
  let count = 1;
  let result = 0;
  console.log(Object.entries(S));
  for (const [i, v] of Object.entries(S)) {
    // enumeration technique!!
    // console.log({i, v});
    v === S[i - 1] ? (count += 1) : (count = 1);
    result += count;
    // console.log({count, result});
  }
  return result;
};

console.log(countLetters("aabcdef"));
