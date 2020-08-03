function LCS(str1, str2) {
  const s1Row = str1.length;
  const s2Col = str2.length;

  let cache = [...Array(s1Row + 1)].map((x) => Array(s2Col + 1).fill(0)); //create matrix + 1
  for (i = 0; i <= s1Row; i++) {
    //this is your rows
    for (j = 0; j <= s2Col; j++) {
      //this is your columns
      if (i == 0 || j == 0) {
        //initiailze 0 row and 0 column to 0
        cache[i][j] = 0;
      } else if (str1.charAt(i - 1) == str2.charAt(j - 1)) {
        //if characters match, take the previous best and add + 1
        cache[i][j] = 1 + cache[i - 1][j - 1];
      } else {
        cache[i][j] = Math.max(cache[i - 1][j], cache[i][j - 1]); //if no match, we take the substring/problem that is greater by taking away
        //current character of str1 or str 2, and see which one is better
      }
    }
  }
  return cache[s1Row][s2Col];
}

console.log(LCS("abcde", "bcdefa"));
