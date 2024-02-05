// Dates 

let myDate =  new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString()); // gives the day and date 
// console.log(myDate.toLocaleDateString()); // simply gives date 
// console.log(myDate.toLocaleString());//gives date and time 

// console.log(typeof(myDate))
// let myCreatedDate = new Date(2024,0,23)
// let myCreatedDate = new Date(2024,0,23,5,3)
 
let myCreatedDate = new Date("2024-01-21")
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.toLocaleDateString());
console.log(newDate.getMonth() +1 );
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long"
})