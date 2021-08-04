// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  function caesar(input, shift, encode = true) {
    // your solution code here
   if (!shift || shift === 0 || -25 > shift || shift > 25) return false
  
  const lowInput = input.toLowerCase()
    
  const alphabet = [
    {letter: 'a', placement: 0},
    {letter: 'b', placement: 1},
    {letter: 'c', placement: 2},
    {letter: 'd', placement: 3},
    {letter: 'e', placement: 4},
    {letter: 'f', placement: 5},
    {letter: 'g', placement: 6},
    {letter: 'h', placement: 7},
    {letter: 'i', placement: 8},
    {letter: 'j', placement: 9},
    {letter: 'k', placement: 10},
    {letter: 'l', placement: 11},
    {letter: 'm', placement: 12},
    {letter: 'n', placement: 13},
    {letter: 'o', placement: 14},
    {letter: 'p', placement: 15},
    {letter: 'q', placement: 16},
    {letter: 'r', placement: 17},
    {letter: 's', placement: 18},
    {letter: 't', placement: 19},
    {letter: 'u', placement: 20},
    {letter: 'v', placement: 21},
    {letter: 'w', placement: 22},
    {letter: 'x', placement: 23},
    {letter: 'y', placement: 24},
    {letter: 'z', placement: 25}
    //{letter: ' ', placement: 100}
  ]
  
  let result = []
    
  for(let i = 0; i < lowInput.length; i++){
    const findLetter = alphabet.find(letter => letter.letter === lowInput[i]) //find letter ojbect that matches coordinating input letter
    if (findLetter === undefined) result.push(lowInput[i])
    else {
    let shiftedPlacement = findLetter.placement //use placement value from given letter and shift for new placement value
      if (encode === true) {shiftedPlacement =
        shiftedPlacement + shift}            
      else shiftedPlacement = shiftedPlacement - shift
    
      if(shiftedPlacement > 25) 
        {shiftedPlacement = shiftedPlacement - 26}
      else if(shiftedPlacement < 0)
        {shiftedPlacement = shiftedPlacement + 26}

      const findNewLetter = alphabet.find(letter => letter.placement === shiftedPlacement) //find letter object that matches shifted placement value
  
      result.push(findNewLetter.letter)
  }
  }
    return result.join('')
}

  
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
