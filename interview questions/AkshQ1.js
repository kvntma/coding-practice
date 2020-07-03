/*
You're given a list of unique letters pointing to other letters using the ">" symbol. Return the word that is created. All letters are guaranteed to be unique.
Examples:
input = ["L>I", "I>S", "S>T"] output = "LIST"
input = ["L>M", "P>A", "A>L"] output = "PALM"
*/

const input = ["L>M", "P>A", "A>L"];

const hashArray = (arrayLetters) => {
  let splitArray = [];
  arrayLetters.forEach((linkedLetters) => {
    splitArray.push(linkedLetters.split(">"));
  }); // goes through each element in array and splits them
  return {
    graphData: Object.fromEntries(splitArray),
    graphDataArray: splitArray,
  }; // make the hash table for adjacency list! (I also use this to create my adjacency list after)
};
const { graphData, graphDataArray } = hashArray(input);
console.log(graphData);
console.log(graphDataArray);

letterOrigin = Object.keys(graphData);
letterDestination = Object.values(graphData);
// gets the set of all the letters and then turns it back to array (not sure how effective this is performance)
const allLettersOfWord = [...new Set([...letterOrigin, ...letterDestination])];

const firstLetter = letterOrigin.filter(
  (letter) => !letterDestination.includes(letter)
);
const lastLetter = letterDestination.filter(
  (letter) => !letterOrigin.includes(letter)
);

console.log(firstLetter);
// graph part
const adjacencyList = new Map();

const addNode = (value) => {
  adjacencyList.set(value, []);
};

const addEdge = (origin, destination) => {
  adjacencyList.get(origin).push(destination);
};

allLettersOfWord.forEach(addNode);
graphDataArray.forEach((path) => addEdge(...path));

const dfs = (origin, visited = new Set()) => {
  let ans = "";
  visited.add(origin);
  const destinations = adjacencyList.get(origin);
  for (const destination of destinations) {
    if (destination == lastLetter) {
      visited.forEach((value) => (ans += value));
      console.log(ans + lastLetter);
      return;
    }
    if (!visited.has(destination)) {
      dfs(destination, visited);
    }
  }
};

dfs(firstLetter[0]);
