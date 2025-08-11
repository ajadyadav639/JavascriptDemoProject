const user = {
    Name : "Ajad Yadav",
    Class: "B.tech - Final Year",
    loginCount : 8,
    signedIn : true,
    getUserDetail : function() {
        console.log("Got User Detail from database");
        console.log(`Username : ${this.Name}`);
    }
};
// console.log(user.getUserDetail());
// console.log(user.Name);

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this;

}

const user1 = new  User("Ajad Yadav", 8, true);
const user2 = new User("Abhishek Yadav", 9, false);
console.log(user1);
console.log(user2);
console.log(user1.constructor);



