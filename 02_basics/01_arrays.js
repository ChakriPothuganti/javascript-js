// array

const myArr = [0,1,2,3,4,5,] // Array can contain  heterogeneous elements. 

/*  
    array can be resizable
    zero-based index 
    array-copy operations create shallow copies(share common reference)
*/

const names = ["Chakri","Charan","Bhanu"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1]);

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()


// myArr.unshift(9) // inserted at index 0  and rest elements get shifted right
// myArr.shift() // removes element at index 0  and rest elements get shifted left

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3));

const newArray = myArr.join() // the elements get bind in the newArray through concatenation so the type changes to string after join operation

// console.log(myArr);
// console.log(newArray);
// console.log(typeof(newArray));

// slice,splice

// console.log("A ",myArr);

const myn1 = myArr.slice(1,3)
// myn1 includes the elements from index 1 to 2 (excluding 3) and parent Array(myArr) remains unchanged

// console.log(myn1);
// console.log("B ", myArr);


const myn2 = myArr.splice(1,3)
// myn2 includes the elements from index 1 to 3 (including 3) and parent Array(myArr) is now changed by removing the splice elements from it.
// console.log(myn2);
// console.log("C ",myArr)


const anime =["naruto","sasuke","itachi"]
const marvel =["thor","ironman","spiderman"]

// marvel.push(anime)
// console.log(marvel);
// console.log(marvel[3][2]);

// const heroes = marvel.concat(anime)
// console.log(heroes);
// console.log(typeof(heroes)); // object

// const all_Heroes = [...marvel,...anime] // spread out
// console.log(all_Heroes);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_array = anotherArray.flat(Infinity)
console.log(real_array);

console.log(Array.isArray("Chakri"));
console.log(Array.from("Chakri"));
console.log(Array.from({name:"Chakri"})) // mention whether to make key or value a array.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))