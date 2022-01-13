const removeDuplicates = function (arr) {
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      newArr.push(arr[i])
    }
  }
  return newArr
}
console.log(removeDuplicates([1, 1, 2])) //[1,2]
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])) //[0,1,2,3,4]
