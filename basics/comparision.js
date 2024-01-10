// normal comparisions

console.log(2==1)
console.log(2>=1)
console.log(2<=1)
console.log(2<1)
console.log(2>1)
console.log(2!=1)


// different datatypes 
// it  converts the string into number and comparision is done 
console.log("2" > 1) // true
console.log("02" > 1) // true


// null can be converted to either NaN or 0 
console.log(null > 0) // false
console.log(null == 0) // false
console.log(null >= 0) // true

// it is obvious undefined can't be compared
console.log(undefined == 0) // false
console.log(undefined > 0) // false
console.log(undefined >= 0) // false

// if we use "===" then it checks not only equality but also the datatypes
console.log("21" === 21) // false
