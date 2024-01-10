const name = "Chakri"
const repoCount = 21

// console.log(name + repoCount + " Value")

// STRING INTERPOLATION
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('AgentMohi')

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.toLowerCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('t'))

const newString =  gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-5, 8)
console.log(anotherString)

const newStringOne = "   Chakri     "
console.log(newStringOne)
console.log(newStringOne.trim())

const url ="https://www.google.com/%20chrome"

console.log(url.replace("%20",'-'))
console.log(url.includes("google"))

const stmt = "Hello-World"
console.log(stmt.split('-'))