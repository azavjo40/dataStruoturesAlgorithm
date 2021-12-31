/////////////////////////////////////////////////////
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let count = 0

const binarSearch = (array, item, start, end) => {
  while (start <= end) {
    count++
    let middle = Math.floor((start + end) / 2)
    if (item === array[middle]) return middle
    if (item < array[middle]) end = middle - 1
    else start = middle + 1
  }
}
console.log("index", binarSearch(array, 12, 0, array.length))
console.log("count", count)
