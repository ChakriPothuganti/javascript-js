let score = "100"

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber)

/*
    if score = 100  (number) then valueInNumber = 100
    if score = "100" (numbered-string) then valueInNumber = 100
    if score = "100abc" (string) then valueInNumber = NaN
    if score = null  then valueInNumber = 0
    if score = undefined then valueInNumber = NaN
    if score = true or false then valueInNumber =1 if true else 0
*/

let isLoggedIn = "java"

let booleanValue = Boolean(isLoggedIn)
console.log(booleanValue)

/*
if isLoogedIn is a non-empty string then true else false
*/

let num = 21
let stringNumber = String(num)
console.log(num);
console.log(typeof num)