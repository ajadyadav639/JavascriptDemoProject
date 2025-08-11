const promiseone = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Promise one resolved');
        resolve()
    }, 1000)
})

promiseone.then(function () {
    console.log('This is the then of promise one');
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Promise two resolved');
        resolve()
    },1000)
}).then(function(){
    console.log('This is the then of promise two');
})

const promiseTwo = new Promise(function (resolve, reject) {
    setTimeout(function(){
        resolve({username : "Ajad Yadav", Email : "Ajadyadav639@gmail.com", Roll_no : "9003"});
    }, 1000)
})
promiseTwo.then(function (user){
    console.log(user);
    
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function(){
        let error = false;
        if (!error) {
            resolve({username: "Ajay Yadav", Email: "yadavajay639@gmail.com"});
        } else {
            reject('Error: Something went wrong');
        }
    }, 1000)
})
promiseFour.then( (user) => {
  console.log(user);
  return user.username
  
}).then((username) => {
  console.log(username);
}).catch((error) => {
  console.error(error);
}).finally(() => {
  console.log('Promise execution completed');
});


const promiseFive = new Promise(function (resolve, reject){
    setTimeout(function (){
        let error = false;
        if (!error) {
            resolve({username: "js Yadav", Email: "anujydv93053@gmail.com"});
        }else {
                reject('Error: Something went wrong in js five');
            }
    }, 1000);
});

async function consumePromiseFive() {
    try {
        let response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}

consumePromiseFive();


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
    .then( (response) => {
        return response.json();
    }).then( (data) => {
        console.log(data);
    })

