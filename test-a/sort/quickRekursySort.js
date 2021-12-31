//////////////////////////////////////////////
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

const quickRekursySort = array => {
  count++
  if (1 >= array.length) {
    return array
  }
  let pivotIndex = Math.floor(array.length / 2)
  let pivot = array[pivotIndex]
  let less = []
  let greater = []

  for (let i = 0; i < array.length; i++) {
    if (i === pivotIndex) continue

    if (array[i] < pivot) {
      less.push(array[i])
    } else {
      greater.push(array[i])
    }
  }
  return [...quickRekursySort(less), pivot, ...quickRekursySort(greater)]
}

console.log(quickRekursySort(array))
console.log(count)
