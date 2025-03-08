// singleton
//object literals
const mysym = Symbol("Key1")
const jsUser = {
    name:"Ajad",
    "Full name":"Ajad Yadav",
    age:22,
    [mysym]:"key1",
    email:"ajadyadav639@gmailcom",
    myloginday:['Monday','Tuesday']
}
// console.log(jsUser);
// console.log(jsUser.email);
// console.log(jsUser["Full name"]);
// console.log(jsUser["email"]);
// console.log(jsUser["mysym"]);
// jsUser.email = "anujyadav7565@gmail.com"
// console.log(jsUser.email);
// Object.freeze(jsUser)
// jsUser.email = "ankityadav6388@gmail.com"
// console.log(jsUser);

jsUser.greeting = function () {
    console.log("Hello js User");
       
}

jsUser.greeting2 = function () {
    console.log(`Hello js User,${this["Full name"]}`);
    console.log(`Hello js User,${this.email}`);
       
}

console.log(jsUser.greeting);
console.log(jsUser.greeting());

console.log(jsUser.greeting2);
console.log(jsUser.greeting2());





