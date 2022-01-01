///////////////////////////////////////////////////////
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let count = 0

const linearSearchFilter = (array, found) => {
  return array.filter(item => item === found)
}
console.log("index", linearSearchFilter(array, 15))

////////////////////////////////////////////////////
const linearSearch = (array, found) => {
  for (let i = 0; i < leng; i++) {
    count++
    if (array[i] === found) return i
  }
  return "not found"
}

console.log("index", linearSearch(array, 10))
console.log("count", count)
