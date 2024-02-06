// singleton
//Object.create
// object literals

// const mySym = Symbol("key1")

// const JsUser = {
//     name: "Chakri",
//     "fullname" : "ChakriCherry",
//     // mySym : "mykey1", 
//     [mySym] : "mykey1", // the correct way of defining a symbol
//     age : 21,
//     location : "Hyderabad",
//     email : "chakri@gmail.com",
//     isLoggedIn : false,
//     lastLoginDays :["Monday","Saturday"]
// }

// console.log(JsUser.email) // we can get data by using dot 
// console.log(JsUser["email"]); // using square brackets is more efficient than using dot with object name
// console.log(JsUser["fullname"]); // when the key is taken as string then we can access only by using square brackets.

// console.log((JsUser[mySym]));

// JsUser.email = "chakri21@gmail.com"
// Object.freeze(JsUser) // By freezing the value of key does not change.
// JsUser.email = "chakricherry@gmail.com"
// console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello There!")
// }

// JsUser.greetingTwo = function(){
//     console.log(`Hello There! , ${this.name}`)
// }


// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());



//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "John"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

const regularUser = {
    email : "John@gmail.com",
    fullname : {
        userfullname :{
            firstname : "Chakri",
            lastname : "Cherry"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 ={
    1 : "a",
    2 : "b"
}
const obj2 ={
    3 : "a",
    4 : "b"
}
const obj4 ={
    5 : "a",
    6 : "b"
}

 // const obj3 = {obj1 ,obj2}
 // const obj3 = Object.assign({},obj1,obj2,obj4) // the use of flowers brackets take all the objects into it.
 const obj3 = {...obj1 , ...obj2}
 // console.log(obj3);

const users = [{
    id : 1 ,
    email : "chakri@gmail.com"
},
{
    id : 2 ,
    email : "chakri@gmail.com"
},
{
    id : 3 ,
    email : "chakri@gmail.com"
},
]

// console.log(users[1].id);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(Object.keys(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLogged"));



const course = {
    coursename : "chai aur js",
    price : "999",
    courseInstructor : "Hitesh"
}

//course.courseInstructor

const {courseInstructor : instructor} = course // we can use this to access courseInstructor instead of using dot.And also can rename according to our choice.simply it is destructuring

// console.log(courseInstructor);
console.log(instructor);

// --------------- JSON API --------------

// {
//     "name" : "Chakri",
//     "coursename" :"chai aur js",
//     " price" : "free"
// }  example : https://api.github.com/users/hiteshchoudhary

