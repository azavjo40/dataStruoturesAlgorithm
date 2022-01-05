class Stack {
  constructor() {
    this.stack = []
  }

  push(data) {
    this.stack.push(data)
  }

  pop() {
    return this.stack.pop()
  }

  peek() {
    return this.stack[this.stack.length - 1]
  }

  isEmpty() {
    return this.stack.length === 0
  }

  size() {
    return this.stack.length
  }

  clear() {
    this.stack = []
  }
}

const stack = new Stack()
stack.push("hello")
stack.push("how are you?")
stack.push("hi")
stack.push("goode and you?")
console.log(stack.pop())
console.log(stack.peek())
console.log(stack.isEmpty())
console.log(stack.size())
console.log(stack)
stack.clear()
