const coding = ["py","ruby",'java','python','cpp']

// coding.forEach( function (item) {
//     console.log(item);
//  })

// coding.forEach((item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe) //  reference of the function should be given not directly function

// coding.forEach( (item , index , arr) => {console.log(item ,index , arr);})

const myCoding =[
{
    languageName : 'javascript',
    languageFileName : "py",
},
{
    languageName : 'java',
    languageFileName : "java",
},
{
    languageName : 'python',
    languageFileName : "py"
}
]

myCoding.forEach((item) => {
    
    console.log(item.languageName);
})