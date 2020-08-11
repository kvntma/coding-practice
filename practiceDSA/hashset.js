/*
You're given a list of unique letters pointing to other letters using the ">" symbol. Return the word that is created. All letters are guaranteed to be unique.
Examples:
input = ["L>I", "I>S", "S>T"] output = "LIST"
input = ["L>M", "P>A", "A>L"] output = "PALM"
*/

// main problem : how can you traverse through nodes that are not next to each other?
// solution: use a graph! (hashset)

// split word into arrays --> convert array to key:value hashmap pair
// find the outlier key (start position)
// continuously go through each key and assign the value as next key
// once key = undefined (no more, you're done!)

const returnWord = (arr) => {
  let arrayed = arr.map((letters) => letters.split(">"));
  let res = "";

  const hashmap = Object.fromEntries(arrayed);

  let start = Object.keys(hashmap).filter(
    (x) => !Object.values(hashmap).includes(x)
  ); // compares keys to value sets and if a key is NOT in values we take that as the start

  while (start) {
    res += start;
    start = hashmap[start];
  }

  return res;
};

console.log(returnWord(["L>M", "P>A", "A>L"]));
