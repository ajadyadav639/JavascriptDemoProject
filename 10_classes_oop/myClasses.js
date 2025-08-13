// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}123`;
//     }

//     changeUserName (){
//         return `${this.username.toUpperCase()}`;
//     }
// }

// const user1 = new User("Ajad Yadav", "ajadyadav639@gmail.com", "abcdef" );
// console.log(user1.encryptPassword());
// console.log(user1.changeUserName());


// Behind The Seen

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptusername = function(){
    return `${this.username.toUpperCase()}`
}

User.prototype.encryptPassword = function() {
    return `${this.password}123`;
}

const protoUser = new User("Abhi Yadav", "abhiyadav123@gmail.com" , "abhipass");

console.log(protoUser.encryptusername());
console.log(protoUser.encryptPassword());
