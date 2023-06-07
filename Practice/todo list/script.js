var todo = [
    { id: 1, name: "do sport", status: "Active" },
    { id: 2, name: "play game", status: "Deactive" },
    { id: 3, name: "read book", status: "Active" }
];

var userrequest = prompt("1.Add Do \n2.Remove Do \n3.Changing Status");

if (userrequest == 1) {
    var entertodo = prompt("Enter A Taks : ", "Do a basketball");
    if (entertodo != "") {
        var addtodo = { id: todo.length + 1 , name: entertodo, status: "Deactive" };
        todo.push(addtodo)
        console.log(todo)
    }
} else if (userrequest == 2) {
    todo.forEach(function (param) {
        alert("💡" + param.name + "," + param.status)
        return true
    })
    var userchoice = prompt("wich one delete a task?", "name...");
    var deletedtask = todo.findIndex(function (par) {
        return par.name == userchoice
    });
    if (deletedtask == -1) {
        alert("not found this task ==> " + userchoice)
    }else{
        todo.splice(deletedtask, 1)
        console.log(todo)
    }
}else if (userrequest == 3){
    var userchoice = prompt("wich one edit a task?", "name...");
    todo.forEach(function (todo) {
        if (todo.name === userchoice) {
            todo.status == "Active"
        }
    })
    console.log(todo)
}else{
    alert("Enter The curect number")
}