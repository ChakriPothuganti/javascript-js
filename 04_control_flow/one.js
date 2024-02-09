// if

// const isLoggedIn = true
// const temperature = 41

// if(temperature === 41){
//     console.log("less than 50");
// }else{
//     console.log("temperature is greater than 50");
// }


// < , > , <= , >= , == , != , ===(checks both content and datatype) , !==


// const score = 200

// if(score > 100){
//     let power = "fly"
//     console.log(`User power ${power}`);
// }
// console.log(`User power ${power}`);

const balance = 1000

// if (balance > 500) console.log("test");

// if(balance < 500){
//     console.log("less than 500");
// }
// else if (balance < 750) {
//     console.log("less than 750");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2 ==3) {

    // when use && if one of the condition fails then the code within the if doesnot execute
    
    console.log("allow to buy clothes");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}

