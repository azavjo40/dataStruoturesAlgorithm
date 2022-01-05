class Queue {
  constructor() {
    this.queue = []
  }

  push(data) {
    this.queue.push(data)
  }

  shift() {
    return this.queue.shift()
  }
  peek() {
    return this.queue[this.queue.length ? 0 : ""]
  }

  isEmpty() {
    return this.queue.length === 0
  }

  size() {
    return this.queue.length
  }

  clear() {
    this.queue = []
  }
}

const queue = new Queue()
queue.push("hello")
queue.push("how are you?")
queue.push("hi")
queue.push("goode and you?")
console.log(queue.shift())
console.log(queue.isEmpty())
console.log(queue.size())
console.log(queue.peek())
console.log(queue)
queue.clear()
