const fibonacci = function (num) {
  // 1, 1, 2, 3, 5, 8
  //  Fn = F{n-1}+F{n-2}} for n > 1.
  num = Number(num)
  if (num === 0) {
    return 0
  } else if (num === 1 || num === 2) {
    return 1
  } else if (num < 0) {
    return 'OOPS'
  } else {
    let f = 2
    f = fibonacci(num - 1) + fibonacci(num - 2)
    return f
  }
}

// Do not edit below this line
module.exports = fibonacci
