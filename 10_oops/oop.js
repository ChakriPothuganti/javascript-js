const user ={
    username : 'Chakri',
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        // console.log("got user details from database");
        // console.log(`Username :${this.username}`);
        console.log(this);
    }
}

// console.log(user['username'])
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// const promiseOne = new Promise();
// const date = new Date();

function User(username , loginCount , isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
}

const userOne = new User("Chakri",6,true)
const userTwo = new User("Charan",11,false)
console.log(userOne.constructor);
console.log(userTwo);
