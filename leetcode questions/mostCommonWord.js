const mostCommonWord = (paragraph, banned) => {
  const words = paragraph.toLowerCase().split(/\W+/); //cuts paragraphs into words and lowercases all.
  const mp = {};
  // filters through list, only includes words - spaces are filtered OUT.
  // if in hashmap, add one, else initalize it.
  words.filter((x) => x).map((x) => (mp[x] = x in mp ? mp[x] + 1 : 1));
  banned.map((word) => (mp[word] = -1));

  return Object.keys(mp).reduce((a, b) => (mp[a] > mp[b] ? a : b)); // reduce compares all values 1 by 1
  // so it keeps comparing the values of the key until there's only 1 value left.
};

const paragraph = "Bob a ball, the  BALL flew far after it was hit.";
const banned = ["hit"];

console.log(mostCommonWord(paragraph, banned));
