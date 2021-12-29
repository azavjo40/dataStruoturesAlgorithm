///////////////////////////////////////////////////////
let count = 0
const factorial = n => {
  count++
  if (n === 1) {
    return n
  }
  return n * factorial(n - 1)
}

console.log(factorial(5))
console.log(count)

/////////////////////////////////////////////////
count = 0
const fibonachi = n => {
  count++
  if (n === 1 || n === 2) {
    return 1
  }
  return fibonachi(n - 1) + fibonachi(n - 2)
}

console.log(fibonachi(8))
console.log(count)
