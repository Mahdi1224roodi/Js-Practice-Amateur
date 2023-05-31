var users = [
    { name : "Erlling", family : "Halland" , age : 21 , email : "Erlling21@gmail.com"},
    { name : "Karim", family : "Benzema" , age : 34 , email : "KarminBnz@gmail.com"},
    { name : "Robert", family : "Levandofski" , age : 33 , email : "fcbLeva@gmail.com"}
]

var username = prompt("Name : ")
var userfamily = prompt("Family : ")
var userage = prompt("Age : ")
var useremail = prompt("Email : ")

if (username.length < 3 || username.length > 10) {
    alert("New Name Wrong :(")
}
else if (userfamily.length < 3 || userfamily.length > 10) {
    alert("New Family Wrong :(")
}
else if (isNaN(userage) || userage.length >= 3) {
    alert("New Age Wrong :(")
}
else{
    var newuser = {
        name : username, family : userfamily, age : userage , email : useremail
    }

    users.push(newuser);

    console.log(users)
}
