class Graph {
  constructor() {
    this.vertices = {}
  }

  putVertice(node) {
    if (!this.vertices[node]) {
      this.vertices[node] = []
    }
  }

  putEdge(ver, edge) {
    if (!this.vertices[ver]) {
      return false
    }
    if (!this.vertices[ver].includes(edge)) {
      this.vertices[ver].push(edge)
    }
  }

  removeVertice(ver) {
    if (this.vertices[ver]) {
      this.removeEdge(ver)
      delete this.vertices[ver]
    }
  }

  removeEdge(edge, vertices = this.vertices) {
    for (let edgeD in vertices) {
      for (let i = 0; i < vertices[edgeD].length; i++) {
        if (vertices[edgeD][i] === edge) {
          vertices[edgeD].splice(i, 1)
        }
      }
    }
  }

  searchRoad(graph, start, end) {
    if (graph[start].includes(end)) return true
    else return false
  }

  get() {
    return this.vertices
  }
}

const graph = new Graph()
graph.putVertice("a")
graph.putVertice("b")
graph.putVertice("c")
graph.putVertice("d")
graph.putEdge("a", "a")
graph.putEdge("a", "b")
graph.putEdge("b", "c")
graph.putEdge("c", "d")
graph.putEdge("d", "b")
graph.putEdge("d", "c")
const resultGraph = graph.get()
console.log(resultGraph)
graph.removeVertice("b")
graph.removeEdge("a")
console.log(resultGraph)
console.log(graph.searchRoad(resultGraph, "a", "b")) //false
console.log(graph.searchRoad(resultGraph, "d", "c")) //true
