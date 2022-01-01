///////////////////////////////////////////////////////////////
const array = [
  0, 3, 2, 0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 5, 6, 8, 0, 3, 2, 5, 6, 8, 1, 9, 4,
  2, 1, 1, 9, 4, 2, 1, 0, 3, 2, 0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 5, 6, 8, 0, 3,
  2, 5, 6, 8, 1, 9, 4, 2, 1, 1, 9, 4, 2, 1, 0, 3, 2, 0, 3, 2, 5, 6, 8, 1, 9, 4,
  2, 1, 5, 6, 8, 0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 1, 9, 4, 2, 1, 0, 3, 2, 0, 3,
  2, 5, 6, 8, 1, 9, 4, 2, 1, 5, 6, 8, 0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 1, 9, 4,
  2, 1, 0, 3, 2, 0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 5, 6, 8, 0, 3, 2, 5, 6, 8, 1,
  9, 4, 2, 1, 1, 9, 4, 2, 1,
]
let count = 0

const selectionSort = array => {
  const len = array.length
  for (let i = 0; i < len; i++) {
    let minJ = i
    for (let j = i + 1; j < len; j++) {
      if (array[j] < array[minJ]) minJ = j
      count++
    }
    let tmp = array[i]
    array[i] = array[minJ]
    array[minJ] = tmp
  }
  return array
}

console.log(selectionSort(array))
console.log(count)
