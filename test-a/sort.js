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

///////////////////////////////////////////////////////////////
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

///////////////////////////////////////////////
count = 0
const bubbleSort = array => {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        var temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
      count++
    }
  }
  return array
}

console.log(bubbleSort(array))
console.log(count)

//////////////////////////////////////////////
count = 0
const quickSort = array => {
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
  return [...quickSort(less), pivot, ...quickSort(greater)]
}

console.log(quickSort(array))
console.log(count)
