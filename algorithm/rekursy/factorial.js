///////////////////////////////////////////////////////
let count = 0
const factorial = n => {
  count++
  if (n === 1) return n
  return n * foo(n - 1)
}

console.log(factorial(5))
console.log(count)
