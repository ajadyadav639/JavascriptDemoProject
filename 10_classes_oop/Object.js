function multipleOf5(num) {
    return num* 5;
}
multipleOf5.power = 2;

console.log(multipleOf5(5))
console.log(multipleOf5.power);
console.log(multipleOf5.prototype);

function createUser(username,score) {
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function () {
    this.score++;
}

createUser.prototype.printMe = function () {
    console.log(`Score: ${this.score}`);
}

const user1 = new createUser('John', 10);
const user2 = new createUser('Rohan', 20);
user1.printMe()
