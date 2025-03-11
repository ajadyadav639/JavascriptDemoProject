// let obj1 = new Object()
// obj1.name = "Ajad Yadav"
// obj1.email = "ajadyadav639@gmail.com"
// obj1.mno = 6390794476
// console.log(obj1.email);
// console.log(obj1.name);
// console.log(obj1.mno);

// let myUsers = {
//     email : "ajadyadav639@gmail.com",
//     "full name":{
//         username : {
//             firstName: "Prashant",
//             lastName:"Yadav"
//         }
//     }
// }
// console.log(myUsers["full name"].username);


const o1 = {1:"a",2 :"b"}
const o2 = {3: "c",4: "d"}
const o3 = {5: "e",6: "f"}

const o4 = {o1,o2,o3}
// const o4 = Object.assign(o1,o2,o3)
// const o4 = Object.assign({},o1,o2,o3)
// const o4 = {...o1, ...o2, ...o3}
// console.log(o4);

// console.log(Object.keys(o4));
// console.log(Object.values(o4));
// console.log(Object.entries(o4));
// console.log(o2.hasOwnProperty('4'));


const course = {
    coursename : "Js In Hindi",
    price : 999,
    courseInstructor: "Hitesh"
 }

//  console.log(course.courseinstructor);

const {courseInstructor: instructor} = course
console.log(instructor);



