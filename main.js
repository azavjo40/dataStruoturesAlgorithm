class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class BinaryTree {
  constructor() {
    this.root = null
  }
  appand(data) {
    const newNode = new Node(data)
    if (!this.root) this.root = newNode
    this.appandNode(this.root, newNode)
  }
  appandNode(node, newNode) {
    if (newNode.data < node.data) {
      if (!node.left) node.left = newNode
      else this.appandNode(node.left, newNode)
    } else {
      if (!node.right) node.right = newNode
      else this.appandNode(node.right, newNode)
    }
  }

  remove(data) {
    let current = this.root
    while (current) {
      if (0 >= current.data) {
        if (!current.right) break
        current = current.right
        if (data === current.data) {
          delete current.data
        }
      } else {
        if (!current.left) break
        current = current.left
        if (data === current.data) {
          delete current.data
        }
      }
    }
  }
  print() {
    console.log(this.root)
  }
}

const tree = new BinaryTree()
tree.appand(10)
tree.appand(9)
tree.appand(8)
tree.appand(7)
tree.appand(6)
tree.appand(5)
tree.appand(3)
tree.appand(2)
tree.remove(10)
tree.appand(2)
tree.print()
