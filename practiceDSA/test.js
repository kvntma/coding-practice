const findWord = (array) => {
  let word = "";
  array = array.map((x) => x.split(">"));
  console.log(array)
  let hmap = Object.fromEntries(array);
  console.log(hmap)

  let start = Object.keys(hmap).filter((x) => !Object.values(hmap).includes(x));

  while (start) {
    word += start;
    start = hmap[start];
  }
  return word;
};

console.log(findWord(["L>M", "P>A", "A>L"]));
