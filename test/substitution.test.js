// Write your tests here!
const expect = require("chai").expect
const substitution = require("../src/substitution")

describe("substitution", () => {
  it("should return an encoded message based on translating from a given alphabet to a typical alphabet", () => {

    const actualOne = substitution.substitution('test','qwertyuiopasdfgh7klzxcvbnm', true)
    const expectedOne = 'ztlz'
    expect(actualOne).to.eql(expectedOne)
  })

  it("should return an decoded message based on translating from a given alphabet to a typical alphabet", () => {
    
    const actualTwo = substitution.substitution('estet', 'qwertyuiopasdfgh7klzxcvbnm', false)
    const expectedTwo = 'clece'
    expect(actualTwo).to.eql(expectedTwo)
  })

  it("should return false", () => {
    
    const actualOne = substitution.substitution('green', 'qwertyuiopasdfgh7klzxcvbnmasdfasdfg', true)
    expect(actualOne).to.be.false
  })
})