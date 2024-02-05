const score = 400
//console.log(score)
// it just gives the value of the score

// const balance = new Number(100)
// console.log(balance); // it gives the value along with the data type


//console.log(balance.toString().length)// gives the length of string after converting it into string

//console.log(balance.toFixed(2))// it will set value to two decimal points i.e, 100.00 in this case

//const otherNumber = 21.2899

// console.log(otherNumber.toPrecision(2))// it round off the value. we can round off upto no.of digits we need

// const num3 = 1000000
// console.log(num3.toLocaleString())

// +++++++++++++++++++++ Maths +++++++++++++

// console.log(Math)
// console.log(Math.abs(-4)) // change the sign to positive 
// console.log(Math.round(4.6))
//console.log(Math.ceil(4.4))
// console.log(Math.floor(4.9))
// console.log(Math.min(4,3,2,6,1))
// console.log(Math.max(4,3,2,6,1))

console.log(Math.random())
console.log((Math.random()*10) + 1 )
console.log(Math.floor(Math.random()*10) + 1 )

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max- min +1)) + min )