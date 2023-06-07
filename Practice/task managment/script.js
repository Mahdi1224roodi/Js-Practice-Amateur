// Task managment // array[userchoice]

var users = [
    {id : 1 , name : "mahdi" , task : "Make body"},
    {id : 2 , name : "mohammad" , task : "Make aside"},
    {id : 3 , name : "armin" , task : "make navbar"},
    {id : 4 , name : "amir" , task : "Make footer"}
];

var mangerequestname = prompt("Enter User Name : ");
var mangerequesttask = prompt("Enter New Task : ");

var find = users.forEach(function (task) {
    if (mangerequestname === task.name) {
        task.task = mangerequesttask
    }
return true
})
console.log(users)