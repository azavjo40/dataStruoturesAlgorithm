const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let count = 0

const foo = n => {
  count++
  if (n === 1 || n === 2) return n
  return foo(n - 1) + foo(n - 2)
}
console.log("index", foo(8))
console.log("count", count)
