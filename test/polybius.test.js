const expect = require("chai").expect
const caesar = require("../src/caesar")

describe("caesar", () => {
  it("should return an encoded message based on shifting the alphabet right", () => {
    
    const actualOne = caesar.caesar('input', 3, true)
    const expectedOne = 'lqsxw'
    expect(actualOne).to.equal(expectedOne)
  })

  it("should return an encoded message based on shifting the alphabet left", () => {
 
    const actualTwo = caesar.caesar('input', -3, true)
    const expectedTwo = 'fkmrq'
    expect(actualTwo).to.eql(expectedTwo)
  })
  
  it("should return a decoded message based on shifting the alphabet right", () => {
    
    const actualThree = caesar.caesar('ajdfs', 2, false)
    const expectedThree = 'yhbdq'
expect(actualThree).to.eql(expectedThree)
  })

  it("should return a decoded message based on shifting the alphabet left", () => {
    
    const actualFour = caesar.caesar('ajdfs', -2, false)
    const expectedFour = 'clfhu'
    expect(actualFour).to.eql(expectedFour)
  })

  it("should return false", () => {
    
    const actualFive = caesar.caesar('ajdfs', 99, false)
    expect(actualFive).to.be.false
  })
})