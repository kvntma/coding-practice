// DATA
const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");

const routes = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "OKC"],
  ["JFK", "HEL"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"],
];

// Create map object
const adjacencyList = new Map();

// Create a hashmap with empty array as values

const addNode = (airport) => {
  adjacencyList.set(airport, []);
};

//Go into hashmap, get the value (so it's now set to the array, and PUSH the destination in.)
const addEdge = (origin, destination) => {
  adjacencyList.get(origin).push(destination);
  adjacencyList.get(destination).push(origin);
};
// Do same for destinations for two way nodes.

//Call the functions;
airports.forEach(addNode);
routes.forEach((route) => addEdge(...route));

const bfs = (start, end) => {
  let visited = new Set();
  let queue = [start];

  while (queue.length > 0) {
    const current = queue.shift();
    const destinations = adjacencyList.get(current); //adds the entire array into a variable.

    for (const destination of destinations) {
      // for each item in variable, do this;
      if (destination == end) return `${end} found!`; //check if item is destination
      if (!visited.has(destination)) {
        //if item has not been visited, add it to the set and add 2 q
        visited.add(destination);
        queue.push(destination);
      }
    }
  }
};

console.log(bfs("PHX", "BKK"));
