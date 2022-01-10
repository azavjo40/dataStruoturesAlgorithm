const twoSum = function (nums, target) {
  const hash = {}
  for (let i = 0; i < nums.length; i++) {
    if (hash[target - nums[i]] !== undefined) {
      return [hash[target - nums[i]], i]
    }
    hash[nums[i]] = i
  }
  return []
}
console.log(twoSum([3, 2, 3], 6)) //[ 0, 2 ]
console.log(twoSum([2, 7, 11, 15], 9)) //[ 0, 1 ]
console.log(twoSum([3, 3], 6)) //[ 0, 1 ]
