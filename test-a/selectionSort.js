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
  for (let i = 0; i < array.length; i++) {
    let indexMin = i

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j
      }

      count++
    }
    let tmp = array[i]
    array[i] = array[indexMin]
    array[indexMin] = tmp
  }
  return array
}

console.log(selectionSort(array))
console.log(count)
