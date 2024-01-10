/*  
----------------Primitive-------------

7 types :
    1. String
    2. Number
    3. Boolean
    4. null
    5. undefined
    6. symbol
    7. BigInt
*/
const num = 21
const decimalNum = 12.74
const outsideTemp = null // object datatype
const isLoggedIn = false

const  id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId) // false

const bigNumber = 12345678923121213n

/*
---------------Reference(Non primitive)--------------
    Array , Objects , Functions
*/

const heroes = ["Naruto","Asta","Eren Yaegar","Ichigo"]

let details ={
    name: "Chakri",
    age: 21 ,
}

const myFunction = function(){
    console.log('Hello World');
}

console.log(typeof bigNumber) // bigint