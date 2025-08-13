const SetUsername = function (username) {
    this.username = username;
}

const createUser = function (username,email, password) {
   SetUsername.call(this, username);
   this.email = email;
   this.password = password;
}

const user = new createUser('Ajad Yadav','ajadyadav639@gmail.com','12345678');
console.log(user);
