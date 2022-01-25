class Graph {
  constructor() {
    this.nodes = {}
  }
  addNode(node) {
    if (!this.nodes[node]) {
      this.nodes[node] = []
    }
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
  removeNode(node) {
    if (this.nodes[node]) {
      delete this.nodes[node]
    }
  }
  removeEdge(edge) {
    const nodes = this.nodes
    for (let ed in nodes) {
      for (let i = 0; i < nodes[ed].length; i++) {
        if (edge === nodes[ed][i]) {
          nodes[ed].splice(i, 1)
          return
        }
      }
    }
  }
  getAll() {
    return this.nodes
  }
}

const graph = new Graph()

graph.addNode("Vova")
graph.addNode("Tim")
graph.addNode("John")
graph.addNode("Ann")
graph.addNode("Adam")

graph.addEdge("Tim", "Vova")
graph.addEdge("Vova", "Tim")
graph.addEdge("Vova", "Adam")
graph.addEdge("John", "Ann")
graph.addEdge("Ann", "John")
// graph.removeNode("Vova")
graph.removeEdge("Tim")
console.log(graph.getAll())
