// let myName = 'Chakri     '

// console.log(myName.truelength());

let myArray = ["naruto","sasuke"]

let jutsu = {
    naruto : "rasengan",
    sasuke : "chidori",

    getSasukePower: function(){
        console.log(`Sasuke power is ${this.sasuke}`);
    }
}

Object.prototype.Chakri = function(){
    console.log(`Chakri is present in all objects`);
}

Array.prototype.heyChakri = function(){
    console.log(`Chakri says hello`);
}

// jutsu.Chakri();

// myArray.heyChakri()
// jutsu.heyChakri()

// inheritance
const User = {
    name : "Js",
    email : "js@example.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'JS assignment',
    fullTime : true,
    __proto__: TeachingSupport
}
Teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TeachingSupport , Teacher)

let anotherUsername = "Charan     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is :${this.trim().length}`);
}

anotherUsername.trueLength()
"Chakri".trueLength();
"Bhanu".trueLength();