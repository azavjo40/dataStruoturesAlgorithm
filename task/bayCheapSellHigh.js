const bayCheapSellHigh = (arr, result = 0) => {
  let maxValue = Math.max(...arr)
  let maxIndex = arr.indexOf(maxValue)
  const newArr = arr.splice(0, maxIndex + 1)
  for (let i = 0; i < newArr.length - 1; i++) {
    result += newArr[newArr.length - 1]
  }
  if (arr.length > 2) return bayCheapSellHigh(arr, result)
  else return result
}
console.log(bayCheapSellHigh([1, 2, 4, 6, 12, 2, 3, 4, 10, 3, 4, 5])) //88
console.log(bayCheapSellHigh([1, 2, 4, 6, 8, 2, 3, 4, 15, 1, 2, 8])) //136
console.log(bayCheapSellHigh([1, 2, 4, 6, 9, 2, 3, 4, 18, 4, 4, 14])) //172
