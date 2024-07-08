const add = function (num, num1) {
  return num + num1
}

const subtract = function (num, num1) {
  return num - num1
}

const sum = function (numbers) {
  return numbers.reduce((total, num) => {
    return total + num
  }, 0)
}

const multiply = function (numbers) {
  return numbers.reduce((total, num) => {
    return total * num
  })
}

const power = function (num, num1) {
  return Math.pow(num, num1)
}

const factorial = function (num) {
  if (num === 0) {
    return 1
  } else {
    let total = 1
    for (let i = 1; i <= num; i++) {
      total = total * i
    }
    return total
  }
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
}
