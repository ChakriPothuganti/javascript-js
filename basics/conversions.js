let score = "100"

//console.log(typeof score)
//console.log(typeof(score))

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber)

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
//console.log(booleanValue)

/*
if isLoogedIn is a non-empty string then true else false
*/

let num = 21
let stringNumber = String(num)
//console.log(num);
//console.log(typeof num)

// -----------------Operations--------------//

let str1 = "hello"
let str2 = " world"
let str3 = str1 + str2
// console.log(str3) 

// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + 2 + 3)
// console.log(1 + 2 + "3") // evaluation is done up to 2 then concatenated with 3
// console.log(1 + "2" + 3)

//console.log(+true) // 1
//console.log(+"") // 0

let num1,num2,num3

num1 = num2 =num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter)

// for more info
// https://tc39.es/ecma262/#sec-abstract-operations
