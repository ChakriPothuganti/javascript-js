function SetUsername(username){
    // complex DB calls
    this.username = username
}

function createUser(username , email , password){
    SetUsername.call(this,username)
    // this.username = username
    this.email = email
    this.password = password
}

const userOne = new createUser("Chakri","chakri@gmail.com","123")
console.log(userOne);