const findMinArrowShots = arr => {
  const newArr = arr.sort((a, b) => a[1] - b[1])
  let hash = {}
  let count = 0
  for (let i = 0; i < newArr.length; i++) {
    if (hash[i] || hash[i + 1]) continue
    if (newArr[i + 1] && newArr[i][1] >= newArr[i + 1][0]) {
      hash[i + 1] = i + 1
      count += 1
    } else {
      count += 1
    }
  }
  return count
}

console.log(
  findMinArrowShots([
    [10, 16],
    [2, 8],
    [1, 6],
    [7, 12],
  ])
)

console.log(
  findMinArrowShots([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
  ])
)
