const arrayChallenge = arr => {
  if (arr.length <= 2) return "-1"
  let hash = {}
  let target = arr[0]
  let pairs = []

  for (let i = 1; i < arr.length; i++) {
    if (hash[target - arr[i]]) {
      pairs.push([target - arr[i], arr[i], Math.min(i, hash[target - arr[i]])])
    }
    hash[arr[i]] = i
  }

  pairs.sort((a, b) => a[2] - b[2])
  let result = pairs.reduce((all, pair) => (all += `${pair[0]},${pair[1]}`), "")
  return result
}
console.log(arrayChallenge([17, 4, 5, 6, 10, 11, 4, -3, -5, 3, 15, 2, 7])) //6,11 10,7 15,2
console.log(arrayChallenge([7, 6, 4, 1, 7, -2, 3, 12])) //6,1 4,3
