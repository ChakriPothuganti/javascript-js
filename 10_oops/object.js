function multiplyBy5(num){
    return num*5
}
 multiplyBy5.power = 2

 console.log(multiplyBy5(5));
 console.log(multiplyBy5.power);
 console.log(multiplyBy5.prototype);



 function createUser(username , score){
    this.username = username
    this.score = score
 }

 createUser.prototype.increament = function(){
    this.score++
 }
 createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
 }

 const userOne = new createUser("one",25)
 const userTwo = new createUser("two",75)
 
userOne.printMe()
