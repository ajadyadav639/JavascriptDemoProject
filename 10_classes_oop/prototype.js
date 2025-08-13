let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// inheritance

const User = {
    name: "Hitesh",
    email: "hitesh@gmail.com",
}

const Teacher = {
    makeVideo : true,
}

const TeacherSupport = {
    isAvailable: false,
}

const TAsupport = {
    makeSignment : 'Js Assignment',
    fulltime: true,
    __proto__: TeacherSupport,
}

Teacher.__proto__ = User;

// modern syntax

Object.setPrototypeOf(TeacherSupport, Teacher);

let anotherUserName = 'ChaiAndCOde      '

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`${this.trim().length}`);
}

anotherUserName.truelength();

"Ajad".truelength();
"Abhishek".truelength();