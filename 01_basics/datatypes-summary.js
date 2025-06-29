// Premitive Data Types

const score = 100
const newScore = 121.2
const Name = 'Ajad Yadav'
const isLoggedIn = false
const outsideTemp = null
let collegename;
//console.log(typeof collegename);

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id);
// console.log(anotherId);
// console.log(id == anotherId);

const bigNumber = 1234665432314532n
// console.log(bigNumber);

// Non-Premitive data Types

const animals = ['Lion','Monkey','Dog','Tiger'];
// console.log(animals);

let myObj = {
    Name : 'Ajad Yadav',
    Age : 20,
    Branch : 'Computer Science',
}
//  console.log(myObj);

let myFunction = function () {
    console.log("I Want To Learn Java Script");
    
}
//  console.log(myFunction() );

let obj1 = {
    Name :'Ajeet Yadav',
    Email : 'ay5083583@google.com'
}

let obj2 = obj1

obj2.Email = 'ajadyadav639@gmail.com'

console.log(obj1);
console.log(obj2);









