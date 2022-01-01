////////////////////////////////////////////////////////
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let count = 0

const binaryRekursySearch = (array, item, start, end) => {
  count++
  let middle = Math.floor((start + end) / 2)
  if (item === array[middle]) return middle
  if (item < array[middle]) return binarSearch(array, item, start, middle - 1)
  else return binarSearch(array, item, middle + 1, end)
}

console.log("index", binaryRekursySearch(array, 10, 0, array.length))
console.log("count", count)
