const palindromes = function (word) {
  characters = Array.from(word.replace(/[\s.,!-#]+/g, '').toLowerCase())
  return (characters.toString() === (characters.reverse()).toString())
}

// Do not edit below this line
module.exports = palindromes
