// Immediately Invoked Function Expressions (IIFE)

// the main goal of this function is not to have any collisions with global variable and to execute immediately

(function IifeDemo(){
    console.log(`DB CONNECTED`);
}) () ; // semicolon is needed when your are running two iife

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Chakri') // we can use arrow function also as iife




