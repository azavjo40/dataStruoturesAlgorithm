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
const interation = tree => {
  if (!tree.length) return 0
  let sum = 0
  let stack = tree
  while (stack.length > 0) {
    const node = stack.pop()
    sum += node.v
    if (node.c) {
      node.c.forEach(child => stack.push(child))
    }
  }
  return sum
}

console.log(interation(tree))
