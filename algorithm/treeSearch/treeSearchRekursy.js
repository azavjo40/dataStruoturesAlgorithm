//////////////////////////////////////////////////////
const tree = [
  {
    v: 5,
    c: [
      {
        v: 10,
        c: [
          {
            v: 11,
          },
        ],
      },
    ],
  },
  {
    v: 7,
    d: [
      {
        v: 5,
        c: [
          {
            v: 1,
          },
        ],
      },
    ],
  },
  {
    v: 5,
    c: [
      {
        v: 10,
      },
      {
        v: 15,
      },
    ],
  },
]
const treeSearchRekursy = tree => {
  let sum = 0
  tree.forEach(node => {
    sum += node.v
    if (!node.c) return node.v
    sum += treeSearchRekursy(node.c)
  })
  return sum
}

console.log(treeSearchRekursy(tree))
