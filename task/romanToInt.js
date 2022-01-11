const romanToInt = function (s) {
  const roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
  let num = 0
  for (let i = 0; i < s.length; i++) {
    const curr = roman[s[i]]
    const next = roman[s[i + 1]]
    if (curr < next) num -= curr
    else num += curr
  }
  return num
}

console.log(romanToInt("IV"))
console.log(romanToInt("VIII"))
console.log(romanToInt("LXXIX"))
console.log(romanToInt("MCMXLIV"))
