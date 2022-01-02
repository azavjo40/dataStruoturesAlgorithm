const graph = {
  a: ["b", "c"],
  b: ["f"],
  c: ["d", "e"],
  d: ["f"],
  e: ["f"],
  f: ["g"],
}

///////////////////////////////////////////
let count = 0
const breadthGraphSearch = (graph, start, end) => {
  let queue = []
  queue.push(start)
  while (queue.length > 0) {
    count++
    const currrent = queue.shift()
    if (!graph[currrent]) graph[currrent] = []
    if (graph[currrent].includes(end)) return true
    else queue = [...queue, ...graph[currrent]]
  }
  return false
}
console.log("end of traz:", breadthGraphSearch(graph, "a", "g"))
console.log("count", count)
