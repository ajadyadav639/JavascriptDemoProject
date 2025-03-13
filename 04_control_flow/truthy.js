
const month = []
if (month) {
    console.log("This is truthy value");        

} else {
    console.log("This is Falsy value");
    
}


// All Of the Falsy Values Are Given -------------> "",0,-0,BigInt 0n,false,null,undefined,Nan

// All Of the truthy Values Are Given ------------>" ","false",{},[],function (){},"0"


userEmail = []

if (userEmail.length === 0) {
    console.log("Array is Empty");
    
}


const emptyObj ={}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is Empty");
    
}


// nullish coalescing Operator (??) : null undefined


// const val1 = 12 ?? 20
// const val1 = null ?? 20
// const val1 = null ?? 20 ?? 30
const val1 = undefined ?? 40 ?? 30
console.log(val1);


// terniary Operator

// condition ? true : false
const  myIcePack = 100
myIcePack <=80 ? console.log("You are say Real") : console.log("you are not say real");


    
