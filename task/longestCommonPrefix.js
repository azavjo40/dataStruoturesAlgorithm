function longestCommonPrefix(s) {
  if (!s[0] || s.length == 1) return s[0] || ""
  let i = 0
  while (s[0][i] && s.every(w => w[i] === s[0][i])) i++
  return s[0].substr(0, i)
}
console.log(longestCommonPrefix(["flower", "flow", "flight"]))
console.log(longestCommonPrefix(["dog", "racecar", "car"]))
console.log(longestCommonPrefix([""]))
console.log(longestCommonPrefix(["a"]))
console.log(longestCommonPrefix(["ab", "a"]))

const longestCommonPrefixFor = s => {
  if (!s[0] || s.length === 1) return s[0] || ""
  let num = []
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (s[i + 1] && s[i][j] === s[i + 1][j]) {
        num.push(s[i][j])
      }
    }
  }
  return num[1] ? `${num[0]}${num[1]}` : `${num[0]}` || ""
}
console.log(longestCommonPrefixFor(["flower", "flow", "flight"]))
console.log(longestCommonPrefixFor(["dog", "racecar", "car"]))
console.log(longestCommonPrefixFor([""]))
console.log(longestCommonPrefixFor(["a"]))
console.log(longestCommonPrefixFor(["ab", "a"]))
