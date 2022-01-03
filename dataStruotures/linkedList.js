class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  append(data) {
    const node = new Node(data)
    if (this.tail) this.tail.next = node
    this.tail = node
    if (!this.head) this.head = node
  }

  prepend(data) {
    const node = new Node(data, this.head)
    this.head = node
    if (!this.tail) this.tail = node
  }

  toArray() {
    const output = []
    let current = this.head
    while (current) {
      output.push(current)
      current = current.next
    }
    return output
  }

  insertAfter(after, data) {
    const found = this.find(after)
    if (!found) return "not found"
    this.remove(found.next.data)
    found.next = new Node(data, found.next)
  }

  find(data) {
    if (!this.head) return "not found"
    let current = this.head
    while (current) {
      if (current.data === data) return current
      current = current.next
    }
    return "not found"
  }

  remove(data) {
    if (!this.head) return "not found"
    while (this.head && this.head.data === data) {
      this.head = this.head.next
    }
    let current = this.head
    while (current.next) {
      if (current.next.data === data) current.next = current.next.next
      else current = current.next
      if (this.tail.data === data) this.tail = current
    }
  }
}

const list = new LinkedList()
list.append("my")
list.append("name")
list.append("is not")
list.prepend("hi")
list.append("Azam")
list.append("how are you ?")
list.append("goode")
list.append("goode and you ?")
list.insertAfter("name", "is")
list.insertAfter("is", "Adam")
console.log(list.toArray())
console.log(list.find("name"))
console.log(JSON.stringify(list))

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
