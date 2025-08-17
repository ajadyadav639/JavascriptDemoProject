const User = {
    _email : 'ajadyadav6339@gmail.com',
    _password : 'Ajad639@',

    get email(){
       return this._email.toLocaleUpperCase()
    },

    set email(value){
        this._email= value
    }

}

const user1 = Object.create(User)
console.log(user1.email);
