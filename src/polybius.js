// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    //const lowInput = input.toLowerCase()
  if(encode === false && input.split(' ').join('').length % 2 != 0) return false 

  let alphabet = [
    {letter: 'a', squareCombo: '11'},
    {letter: 'b', squareCombo: '21'},
    {letter: 'c', squareCombo: '31'},
    {letter: 'd', squareCombo: '41'},
    {letter: 'e', squareCombo: '51'},
    {letter: 'f', squareCombo: '12'},
    {letter: 'g', squareCombo: '22'},
    {letter: 'h', squareCombo: '32'},
    {letter: 'i', squareCombo: '42'},
    {letter: 'j', squareCombo: '42'},
    {letter: 'k', squareCombo: '52'},
    {letter: 'l', squareCombo: '13'},
    {letter: 'm', squareCombo: '23'},
    {letter: 'n', squareCombo: '33'},
    {letter: 'o', squareCombo: '43'},
    {letter: 'p', squareCombo: '53'},
    {letter: 'q', squareCombo: '14'},
    {letter: 'r', squareCombo: '24'},  
    {letter: 's', squareCombo: '34'},
    {letter: 't', squareCombo: '44'},
    {letter: 'u', squareCombo: '54'},
    {letter: 'v', squareCombo: '15'},
    {letter: 'w', squareCombo: '25'},
    {letter: 'x', squareCombo: '35'},
    {letter: 'y', squareCombo: '45'},
    {letter: 'z', squareCombo: '55'},
    {letter: ' ', squareCombo: ' '}
  ]

  let result = []
  let substring = ""
  
  for(let i = 0; i < input.length; i++){
    if(encode === true){
      const findLetter = alphabet.find(letter =>    letter.letter === input[i]) //find letter ojbect that matches coordinating input letter
      result.push(findLetter.squareCombo)
    } else {
      const num = input[i]
      if (num === ' ') result.push(' ')
      else {
        substring += num
        if(substring.length === 2){
          const findCombo = alphabet.find(combo => combo.squareCombo === substring)
          if (findCombo.squareCombo === "42") { result.push('ij')
                                              }
          else result.push(findCombo.letter)
          substring = ""
        }
      }
    }
  }
return result.join('')
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
