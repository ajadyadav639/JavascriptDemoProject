// const myNums = [1,2,3]
// const myTotalNums = myNums.reduce( function (acc, currval) {
//     console.log(`Accumulator Value is ${acc} and currentValue is ${currval}`);
    
//     return acc+currval
    
// }, 0)
// console.log(myTotalNums);


const myNums = [1,2,3]
const myTotalNums = myNums.reduce( (acc, currval) => acc+currval , 0)
console.log(myTotalNums);


const myCourse = [
    {
        name : "Java Script",
        price:299
    },
    {
        name : "Java",
        price:400
    },
    {
        name : "Django",
        price:700
    },
]
const forPay =myCourse.reduce( (acc, item) => acc+item.price, 0)
console.log(forPay);

