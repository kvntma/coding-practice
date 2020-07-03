class Node {
  constructor(value) {
    this.value = value;
    this.adjacents = []; //value of node
  }

  addAdjacent(node) {
    this.adjacents.push(node);
  }

  removeAdjacent(node) {
    const adjIndex = this.adjacents.indexOf(node);
    if (adjIndex > -1) {
      this.adjacents.slice(adjIndex, 1);
    }
  }

  getAdjacents() {
    return this.adjacents;
  }

  isAdjacent(node) {
    return this.adjacents.indexOf(node) > -1;
  }
}

class Graph {
  constructor(edgeDirection = Graph.DIRECTED) {
    this.nodes = new Map();
    this.edgeDirection = edgeDirection;
  }

  addVertex(value) {
    if (this.nodes.has(value)) {
      console.log("Already has value of:");
      return this.nodes.get(value);
    }
    const vertex = new Node(value);
    this.nodes.set(vertex, value);
    return vertex;
  }
  removeVertex(value) {}

  addEdge(source, destination) {}
  deleteEdge(source, destination) {}
}

Graph.UNDIRECTED = Symbol("directed graph"); // one-way edges
Graph.DIRECTED = Symbol("undirected graph"); // two-ways edges
