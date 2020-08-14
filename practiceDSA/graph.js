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

// Create node

const addNode = (airport) => {
  adjacencyList.set(airport, []);
};

const addEdge = (origin, destination) => {
  adjacencyList.get(origin).push(destination);
  adjacencyList.get(destination).push(origin);
};

airports.forEach(addNode);
routes.forEach((route) => addEdge(...route));

const bfs = (start, end) => {
  let visited = new Set();
  let queue = [start];

  while (queue.length > 0) {
    const current = queue.shift();

    const destinations = adjacencyList.get(current);

    for (const destination of destinations) {
      if (destination == end) return `${end} found!`;

      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
      }
    }
  }
};

console.log(bfs("PHX", "BKK"));
