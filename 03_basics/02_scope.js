// var c = 300
// let a = 300 // global scope
// if (true){
//     let a = 10
//     const b = 20
//      console.log("Inner: " , a); // 10
// }


// console.log(a); // a = 300
// console.log(b);


function one(){
    const username = "Chakri"
     
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // the scope of website is within the function two()
    two()
}
// one() // when the function one is called by commenting the two() then function does not print anything

// if (true) {
//     const username = "Chakri"
//     if(username === "Chakri"){
//         const website = " Cherry"
//         console.log(username + website);

//     }
    // console.log(website); // out of scope

// console.log(username); // out of scope

// -------------------- interesting ----------

console.log(addOne(5));
function addOne(num){
    return num + 1
}


console.log(addTwo(5));// error occurs we are assigning the value of the fun to variable. This is hoisting... 
const addTwo = function(num){
    return num + 2 
}

