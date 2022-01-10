const lengthOfLongestSubstring = s => {
  if (s.length == 1) return 1
  let hash = {}
  let = start = 0
  let longestSubstringLength = 0
  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] !== undefined && hash[s[i]] >= start) {
      start = hash[s[i]] + 1
    }
    hash[s[i]] = i
    longestSubstringLength = Math.max(longestSubstringLength, i - start + 1)
  }
  return longestSubstringLength
}
console.log(lengthOfLongestSubstring("abcabcbb")) //3
console.log(lengthOfLongestSubstring("bbbbb")) //1
console.log(lengthOfLongestSubstring("pwwkew")) //3
console.log(lengthOfLongestSubstring("pwwkewawawwww")) //4
