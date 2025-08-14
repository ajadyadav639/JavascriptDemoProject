
const descripter = Object.getOwnPropertyDescriptors(Math, 'PI')

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

// console.log(descripter);

const chai = {
    name : "Ajad Yadav",
    price : 249,
    isAvailable : true,
    orderChai : function () {
        console.log('chai nhi bni');
        
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Object.defineProperty(chai , 'name', {
     
//     writable : false,
//     enumerable : false,
// })

// console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

for (let [key , value ]  of Object.entries((chai)) ) {
    if ( typeof value !== 'function' ) {
        console.log(`${key} : ${value}`);
    }
    
    
}
