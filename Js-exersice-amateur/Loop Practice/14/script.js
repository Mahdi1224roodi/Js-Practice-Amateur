var userfirstnumber = Number(prompt("Enter The First Number : "));
var usersecondnumber = Number(prompt("Enter The Second Number : "));

if (userfirstnumber % 2 === 0){
while (userfirstnumber < usersecondnumber) {
    userfirstnumber += 2;
    console.log(userfirstnumber);
}
}else{
    while (userfirstnumber < usersecondnumber) {
        userfirstnumber +=2;
        console.log(userfirstnumber);
    }
}
