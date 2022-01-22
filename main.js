class Graph {
  constructor() {
    this.nodes = {}
  }
  addNode(node) {
    this.nodes[node] = []
  }
  addEdge(source, destination) {
    if (!this.nodes[source] || !this.nodes[destination]) {
      return false
    }
    if (!this.nodes[source].includes(destination)) {
      this.nodes[source].push(destination)
    }
    if (!this.nodes[destination].includes(source)) {
      this.nodes[destination].push(source)
    }
  }
  removeNode() {}
  removeEdge() {}
}

const graph = new Graph()

graph.addNode("Vova")
graph.addNode("Tim")
graph.addNode("John")
graph.addNode("Ann")

graph.addEdge("Tim", "Vova")
graph.addEdge("Vova", "Tim")
graph.addEdge("John", "Ann")
graph.addEdge("Ann", "John")
console.log(graph)
