
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