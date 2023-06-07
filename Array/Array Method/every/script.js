// Every Array Method

// var isman = [true,true,true,false];
// var istrue = isman.every(function(man) {
//     return man == true
// })

// console.log(istrue) // return false


// var isman = [15,20,36,19];
// var istrue = isman.every(function(man) {
//     return man >= 18
// })

// console.log(istrue) // return false

var users = [
    {id : 1 , name : "Mahdi" , age : 17},
    {id : 2 , name : "Armin" , age : 16},
    {id : 3 , name : "Shayan" , age : 18},
    {id : 4 , name : "Mohammad" , age : 22}
]

var istrue = users.every(function (ages) {
    return ages.age >= 15
})

if (istrue == true) {
    console.log("Call Concted 😀")
}else{
    console.log("ََAge Error 🙁")
}