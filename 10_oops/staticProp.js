class User{
    constructor(username){
        this.username= username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
        
    }

    static createId(){
        return `123`
    }
}

const userOne = new User("Chakri")
// console.log(userOne.createId());
// console.log(User.createId());

class Teacher extends User{
    constructor(username , email){
        super(username)
        this.email = email
    }
}

const userThree = new Teacher('Bhanu','bhanu@gmail.com')
// console.log(userThree.createId());