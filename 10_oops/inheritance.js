class User{
    constructor(username){
        this.username= username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, password){
        super(username)
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);

    }
}

const userOne = new Teacher("Chakri","123")
userOne.addCourse()

const userTwo = new User("Charan")
// userTwo.addCourse()
userTwo.logMe()

console.log(userOne instanceof Teacher);
console.log(userOne === userTwo);