class User {
    constructor (email, password) {
        this.email = email;
        this.password = password;
    }

    get email () {
        return this._email.toUpperCase()
    }

    set email(value){
        return this._email = value
    }

    get password () {
        return `${this._password}wewe`
    }
    set password(value) {
        return this._password = value
    }
}

const chai = new  User('ajad532@ai', 'anuj')
console.log(chai.email);
console.log(chai.password);
