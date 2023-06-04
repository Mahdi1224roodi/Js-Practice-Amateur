// object

// var informations = {
//     name : "Kiarash",
//     Family : "Amiri",
//     Born : 1992
// }

// console.log(informations.Born);

// object in array

// var users = [
//     {
//         name : "Arta",
//         Family : "Soheili",
//         Born : 2002
//     }
//     ,
//     {
//         name : "Kamran",
//         Family : "Shayan Fard",
//         Born : 2006
//     }
// ]

// console.log(users[0].name)


var students = [
    {name : "Ali",ages : 28 },
    {name : "Aref",ages : 19 },
    {name : "Reza",ages : 15 }
]

students.forEach(function (info) {
    console.log("name  = " + info.name + " , " + "age = " + info.ages)
})