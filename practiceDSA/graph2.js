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

// The graph
const adjacencyList = new Map();

// Add node
function addNode(airport) {
  adjacencyList.set(airport, []);
}

// Add edge, undirected
function addEdge(origin, destination) {
  adjacencyList.get(origin).push(destination);
  adjacencyList.get(destination).push(origin);
}

// Create the Graph
airports.forEach(addNode);
routes.forEach((route) => addEdge(...route));
let steps = 0;

const dfs = (start, end, visited = new Set()) => {
  console.log(start);
  visited.add(start);
  steps++;
  const destinations = adjacencyList.get(start);

  for (const destination of destinations) {
    if (destination == end) {
      console.log(`${end} has been found in ${steps} steps!`);
      return;
    }
    if (!visited.has(destination)) {
      dfs(destination, end, visited);
    }
  }
};

dfs("PHX", "BKK");
