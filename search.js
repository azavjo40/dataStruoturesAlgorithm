const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

///////////////////////////////////////////////////////
let count = 0
const linearSearch = (array, item) => {
  for (let i = 0; i < array.length; i++) {
    count++
    if (array[i] === item) {
      return i
    }
  }
  return null
}

console.log("index", linearSearch(array, 2))
console.log("count", count)

/////////////////////////////////////////////////////
count = 0
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

////////////////////////////////////////////////////////
count = 0
const binaryRekursySearch = (array, item, start, end) => {
  count++
  let middle = Math.floor((start + end) / 2)

  if (item > array.length) {
    return "not found"
  }
  if (item === array[middle]) {
    return middle
  }
  if (item < array[middle]) {
    return binaryRekursySearch(array, item, 0, middle - 1)
  } else {
    return binaryRekursySearch(array, item, middle + 1, end)
  }
}

console.log("index", binaryRekursySearch(array, 10, 0, array.length))
console.log("count", count)
