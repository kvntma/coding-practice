const linkedGraph = (array) => {
  const arrayed = array.map((element) => element.split(">"));
  let word = "";

  console.log(arrayed);

  let hashedLetters = Object.fromEntries(arrayed);

  let start = Object.keys(hashedLetters)
    .filter((letter) => !Object.values(hashedLetters).includes(letter))
    .toString();

  while (start) {
    word += start;
    start = hashedLetters[start];
  }

  return word;
};

console.log(linkedGraph(["L>M", "P>A", "A>L"]));
