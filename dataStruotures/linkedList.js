class LinkedList {
  constructor() {
    this.size = 0
    this.root = null
  }

  add(value) {
    if (this.size == 0) {
      this.root = new Node(value)
    } else {
      let node = this.root
      while (node.next) {
        node = node.next
      }
      node.next = new Node(value)
    }
    this.size += 1
  }

  getSize() {
    return this.size
  }

  print() {
    let result = []
    let node = this.root
    while (node) {
      result.push(node.value)
      node = node.next
    }
    console.log(result)
  }

  getAll() {
    return this.root
  }
}

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}
const list = new LinkedList()

list.add(8)
list.add(5)
list.add(1)
console.log(list.getSize())
list.print()
console.log(list.getAll())
