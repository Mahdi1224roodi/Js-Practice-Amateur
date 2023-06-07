//some very like foreach
//includes cant find object

var information = [
    {name : "shayan" , ages : "17"},
    {name : "kamran" , ages : "16"},
    {name : "arta" , ages : "20"}
];

// information.forEach(function(params) {
//     console.log(params);
// })

var isfind = information.some(function(params) {
    console.log(params)
    return users.name == "arta"
})

console.log(isfind);