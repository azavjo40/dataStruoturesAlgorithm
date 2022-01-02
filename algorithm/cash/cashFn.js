const cashFunction = fn => {
  const cash = {}
  return n => {
    if (cash[n]) return cash[n]
    return (cash[n] = fn(n))
  }
}

const factorial = n => {
  let result = 1
  while (n != 1) {
    result *= n
    n--
  }
  return result
}

const cashFactorial = cashFunction(factorial)
console.log(cashFactorial(5))
console.log(cashFactorial(4))
console.log(cashFactorial(5))
console.log(cashFactorial(4))
