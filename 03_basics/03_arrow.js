const user ={
    username : "Chakri",
    age : 21,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "Charan"
// user.welcomeMessage()

// console.log(this); // empty object

// function demo(){
//     let username = "Chakri"
//     console.log(this.username); // undefined
// }

// demo()

// const demo = function(){
//     let username = "Chakri"
//     console.log(this.username);
// }

const demo = () => {
    let username = "Chakri"
    console.log(this);
}

// demo()

// const addTwo = (num1 , num2) => {
//     return num1 + num2 
// }

// const addTwo = (num1 , num2) => num1 + num2 

// const addTwo = (num1 , num2) => (num1 + num2)

const addTwo = (num1 , num2) => ({username : "Chakri"})

console.log(addTwo(3,4));

// const myArr = [1,2,3,4,5,6]

// myArr.forEach()