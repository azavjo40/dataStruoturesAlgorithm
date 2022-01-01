//////////////////////////////////////////////////////
const graph = {
  a: { b: 2, c: 1 },
  b: { f: 7 },
  c: { d: 5, e: 2 },
  d: { f: 2 },
  e: { f: 1 },
  f: { g: 1 },
  g: {},
}

const shorGraphsearch = (graph, start, end) => {
  const costs = {}
  const processed = []
  let neighbars = {}
  Object.keys(graph).forEach(node => {
    if (node !== start) {
      let value = graph[start][node]
      costs[node] = value || 100000000
    }
  })

  let node = findeNodeLowerstCosts(costs, processed)
  while (node) {
    const cost = costs[node]
    neighbars = graph[node]
    Object.keys(neighbars).forEach(neighbor => {
      let newCost = cost + neighbars[neighbor]
      if (newCost < costs[neighbor]) costs[neighbor] = newCost
    })
    processed.push(node)
    node = findeNodeLowerstCosts(costs, processed)
  }
  return costs
}

const findeNodeLowerstCosts = (costs, processed) => {
  let lowestCost = 100000000
  let lowestNode
  Object.keys(costs).forEach(node => {
    let cost = costs[node]
    if (cost < lowestCost && !processed.includes(node)) {
      lowestCost = cost
      lowestNode = node
    }
  })
  return lowestNode
}

console.log(shorGraphsearch(graph, "a", "b"))
