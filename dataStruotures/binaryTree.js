class BinaryTree {
  constructor() {
    this.root = null
  }
  add(value) {
    if (!this.root) {
      this.root = new TreeNode(value)
    } else {
      let node = this.root
      let newNode = new TreeNode(value)

      while (node) {
        if (value > node.value) {
          if (!node.right) break
          node = node.right
        } else {
          if (!node.left) break
          node = node.left
        }
      }

      if (value > node.value) {
        node.right = newNode
      } else {
        node.left = newNode
      }
    }
  }

  getAll() {
    return this.root
  }

  print(root = this.root) {
    if (!root) return true
    console.log(root.value)
    this.print(root.left)
    this.print(root.right)
  }
}

class TreeNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

const tree = new BinaryTree()
tree.add(2)
tree.add(5)
tree.add(6)
tree.add(8)
tree.print()
console.log(tree.getAll())

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

  remove(data, val) {
    let current = this.root
    while (current) {
      if (data === current.data) {
        if (!current.right) break
        current = current.right
        if (0 >= current.data) {
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
tree.remove(3)
tree.appand(2)
tree.print()
