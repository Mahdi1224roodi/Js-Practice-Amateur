// includes

// var color = ["pink" , "orange" , "yellow"]
// var a = color.includes("pink") 

// console.log(a) // reaturn true


// Practice 💎
var a = prompt("Enter Your Name For Login :");
var b = a.toLowerCase();
var users = ["ali" , "mahdi" , "mohammadmahdi" , "amir"];
var islogin = users.includes(b);
if (islogin === false) {
    console.log("You Should First SingUp...")
}else{
    console.log("Wellcome To Your Panel 🎈")
}

