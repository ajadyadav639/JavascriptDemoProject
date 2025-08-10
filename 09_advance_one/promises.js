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

    }, 1000)
