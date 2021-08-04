// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if(!alphabet || alphabet.length != 26) return false
    
     for(let j = 0; j < alphabet.length; j++){
    if(alphabet.includes(alphabet[j], j+1)) return false
  }
    
const  alphaCompare = [
  {typl: 'a', placement: 0, given: alphabet[0]},
  {typl: 'b', placement: 1, given: alphabet[1]},     {typl: 'c', placement: 2, given: alphabet[2]},
  {typl: 'd', placement: 3, given: alphabet[3]},
  {typl: 'e', placement: 4, given: alphabet[4]},
  {typl: 'f', placement: 5, given: alphabet[5]},
  {typl: 'g', placement: 6, given: alphabet[6]},
  {typl: 'h', placement: 7, given: alphabet[7]},
  {typl: 'i', placement: 8, given: alphabet[8]},
  {typl: 'j', placement: 9, given: alphabet[9]},
  {typl: 'k', placement: 10, given: alphabet[10]},   {typl: 'l', placement: 11, given: alphabet[11]},
  {typl: 'm', placement: 12, given: alphabet[12]},
  {typl: 'n', placement: 13, given: alphabet[13]},
  {typl: 'o', placement: 14, given: alphabet[14]},
  {typl: 'p', placement: 15, given: alphabet[15]},
  {typl: 'q', placement: 16, given: alphabet[16]},
  {typl: 'r', placement: 17, given: alphabet[17]},
  {typl: 's', placement: 18, given: alphabet[18]},
  {typl: 't', placement: 19, given: alphabet[19]},
  {typl: 'u', placement: 20, given: alphabet[20]},
  {typl: 'v', placement: 21, given: alphabet[21]},
  {typl: 'w', placement: 22, given: alphabet[22]},
  {typl: 'x', placement: 23, given: alphabet[23]},
  {typl: 'y', placement: 24, given: alphabet[24]},   {typl: 'z', placement: 25, given: alphabet[25]}
]

  let result = []
  
  
  
  for(let i = 0; i < input.length; i++){
    if(encode === true){
      const findReplace = alphaCompare.find(letter => letter.typl === input[i])
      if (findReplace === undefined) result.push(' ')
      else { 
        const placement = findReplace.placement
        result.push(alphabet[placement])
      }
    }
    else {
        const findObject = alphaCompare.find(letter => letter.given === input[i])
      if (findObject === undefined) result.push(' ')
      else result.push(findObject.typl)
    }
  }
  return result.join('')
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
