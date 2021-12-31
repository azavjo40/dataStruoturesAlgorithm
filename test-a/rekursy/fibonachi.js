/////////////////////////////////////////////////
let count = 0
const fibonachi = n => {
  count++
  if (n === 1 || n === 2) {
    return n
  }
  return fibonachi(n - 1) + fibonachi(n - 2)
}

console.log(fibonachi(8))
console.log(count)
