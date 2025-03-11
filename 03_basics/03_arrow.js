const user = {
    name : "Computer",
    price : 45000,

    welcomeMessage : function(){
        console.log(`${this.name} price is ${this.price}`);
        console.log(this);
        
    }
}
// user.welcomeMessage()

// const addTwo = function() {
//     console.log("This is Ajad yadav");
    
// }
// addTwo()

const addOne = (num1, num2) => {
    return num1+num2
}
// console.log(addOne(20,40));

const addThree = (num1,num2,num3) =>  num1+num2+num3
// console.log(addThree(10,20,30));



const addN = (num1,num2,num3) =>  (num1+num2+num3)
// console.log(addN(13,20,30));


const addM = (num1, num2) => ({username: "Ajad Yadav"})
console.log(addM(2,3));



