/////////////////////////////////////////////////////
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let count = 0

const binarySearch = (array, item) => {
  let start = 0
  let end = array.length
  let middle
  let found = true
  let position = "Not found..."

  while (found && start <= end) {
    count++
    middle = Math.floor((start + end) / 2)

    if (array[middle] === item) {
      found = false
      return (position = middle)
    }

    if (item < array[middle]) {
      end = middle - 1
    } else {
      start = middle + 1
    }
  }
  return position
}

console.log("index", binarySearch(array, 4))
console.log("count", count)
