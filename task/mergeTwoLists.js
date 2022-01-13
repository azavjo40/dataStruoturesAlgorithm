const mergeTwoLists = function (list1, list2) {
  const arr = [...list1, ...list2].sort((a, b) => a - b)
  if (arr.length) {
    return arr
  }
  return arr
}
console.log(mergeTwoLists([1, 2, 4], [1, 3, 4])) //[ 1, 1, 2, 3, 4, 4 ]
console.log(mergeTwoLists([], [])) //[]
console.log(mergeTwoLists([], [0])) //[0]
