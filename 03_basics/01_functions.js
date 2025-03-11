// function syMyName() {
//     console.log("A");
//     console.log("j");
//     console.log("a");
//     console.log("d");
//     console.log(" ");
//     console.log("Y");
//     console.log("a");
//     console.log("d");
//     console.log("a");
//     console.log("v");
// }
// syMyName()

function addTwoNumbers(number1,number2) {
    // console.log(number1+number2);
    let result = number1 + number2
    return  result
    
}
const result = addTwoNumbers(10,20)
// console.log("Result",result);

// addTwoNumbers(10,20)
// addTwoNumbers(10,"20")
// addTwoNumbers(10,null)
// addTwoNumbers(10)

function loginUserMessage(username) {
    if (username === undefined) {
        console.log("Please Enter The Username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage());
