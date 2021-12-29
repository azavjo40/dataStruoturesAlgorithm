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
const breathSearch = (graph, start, end) => {
  let queue = []
  queue.push(start)

  while (queue.length > 0) {
    count++
    const currrent = queue.shift()

    if (!graph[currrent]) {
      graph[currrent] = []
    }

    if (graph[currrent].includes(end)) {
      return end
    } else {
      queue = [...queue, ...graph[currrent]]
    }
  }
  return "not fount"
}
console.log("end of traz:", breathSearch(graph, "a", "g"))
console.log("count", count)
