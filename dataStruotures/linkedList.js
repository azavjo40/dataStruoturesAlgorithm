class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.root = null
  }

  append(data) {
    let node = new Node(data)
    if (!this.root) this.root = node
    else {
      let current = this.root
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
  }

  prepend(data) {
    const node = new Node(data, this.root)
    this.root = node
  }

  find(data) {
    if (!this.root) return "not found"
    let current = this.root
    while (current) {
      if (current.data === data) return current
      current = current.next
    }
    return "not found"
  }

  removeAfter(data) {
    let current = this.root
    while (current.next) {
      if (current.data === data) {
        current.next = current.next.next
        return current
      } else current = current.next
    }
  }

  insertAfter(after, data) {
    let current = this.root
    if (!current) return "not found"
    while (current.next) {
      if (current.data === after) {
        current.next = new Node(data, current.next.next)
        return
      } else current = current.next
    }
  }
}

const list = new LinkedList()

list.append(5)
list.append(4)
list.append(3)
list.append(2)
list.append(1)
list.prepend(6)
list.insertAfter(2, 0)
list.removeAfter(4)
console.log(list.find(0))
console.log(list)

//////////////////////////////////////////////////////////////// 2
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
