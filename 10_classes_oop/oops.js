const user = {
    Name : "Ajad Yadav",
    Class: "B.tech - Final Year",
    loginCount : 8,
    signedIn : true,
    getUserDetail : function() {
        console.log("Got User Detail from database");
        
    }
};
console.log(user.Name);
console.log(user.getUserDetail());

