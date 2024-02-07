

function sayMyName(){
    console.log("C");
    console.log("H");
    console.log("A")
    console.log("K");
    console.log("R");
    console.log("I");
}

// sayMyName()

// function addTwoNum(num1 ,num2){
//     console.log(num1 + num2)
// }

function addTwoNum(num1 ,num2){
    // let result = num1+num2
    // return result
    return num1+num2
}

const result = addTwoNum(3,5)
// console.log("Result: ",result);

function loginUserMessage(username = "cena"){
    if(!username){ // username === undefined or !username both are same . !username type is used in react also
        console.log("Please enter a username");
        return
    }
    return`${username} just logged in `
}

// console.log(loginUserMessage("Chakri")); // can overrride the parameter defined in the function that is username ="sam"

function calculateCartPrice(val1,val2,...num1){ 
    // "..." can be called rest or spread based on the usage.we have used it as spread in case of arrays and objects.
    return num1
}

// console.log(calculateCartPrice(200,400,500,2000));

const user = {
    username : "Chakri",
    age : 21
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and age is ${anyObject.age}`);
}

// handleObject(user)
handleObject({
    username : "Sam",
    age : 21
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));

// console.log(returnSecondValue([200,400,100,600]));

