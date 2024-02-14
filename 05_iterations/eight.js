const myNums = [1,2,3,4]

// const myTotal = myNums.reduce(function (acc,curVal){
//     console.log(`acc : ${acc} and curVal : ${curVal}`);
//     return acc + curVal
// } , 0)

// const myTotal = myNums.reduce( (acc,crntValue) => acc+crntValue,0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemname : "js course",
        price : 2999
    },
    {
        itemname : "python course",
        price : 999
    },
    {
        itemname : "mobile dev course",
        price : 5999
    },
    {
        itemname : "DS course",
        price : 12999
    },
]

const TotalValue = shoppingCart.reduce((acc , item) => acc + item.price,0)

console.log(TotalValue);