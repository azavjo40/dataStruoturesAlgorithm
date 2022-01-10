const isPalindromeFor = nums => {
  const newNums = nums.toString()
  const len = newNums.length
  const mid = Math.floor(len / 2)
  for (let i = 0; i < mid; i++) {
    if (newNums[i] !== newNums[len - 1 - i]) {
      return false
    }
  }
  return true
}

console.log(isPalindromeFor(121)) //true
console.log(isPalindromeFor(-121)) //false
console.log(isPalindromeFor(10)) //false

const isPalindrome = nums => {
  const newNums = nums.toString()
  const result = newNums.split("").reverse().join("")
  if (result === newNums) return true
  return false
}
console.log(isPalindrome(121)) //true
console.log(isPalindrome(-121)) //false
console.log(isPalindrome(10)) //false
