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
  append(data) {
    let newNode = new Node(data)
    let node = this.root
    if (!node) this.root = newNode
    else {
      // while (node) {
      //   if (data > node.data) {
      //     if (!node.right) break
      //     node = node.right
      //   } else {
      //     if (!node.left) break
      //     node = node.left
      //   }
      // }

      // if (data > node.data) node.right = newNode
      // else node.left = newNode
      this.appendNode(node, newNode)
    }
  }

  appendNode(node, newNode) {
    if (newNode.data < node.data) {
      if (!node.left) node.left = newNode
      else this.appendNode(node.left, newNode)
    } else {
      if (!node.right) node.right = newNode
      else this.appendNode(node.right, newNode)
    }
  }
}

const tree = new BinaryTree()
tree.append(1)
tree.append(2)
tree.append(3)
tree.append(4)
tree.append(5)
tree.append(6)
tree.append(7)
tree.append(8)
tree.append(16)
tree.append(26)
tree.append(36)
tree.append(46)
tree.append(56)
tree.append(66)
tree.append(76)
tree.append(86)
console.log(tree)
