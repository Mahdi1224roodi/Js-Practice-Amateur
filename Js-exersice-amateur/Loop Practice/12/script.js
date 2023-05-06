// 342 => 3 + 4 + 2
var usernumber = Number(prompt("Enter The Number : "))
var sum = 0
for (i = 0; (usernumber / 10) != 0; i++) {

    sum = sum + (usernumber % 10);
    usernumber = Math.floor(usernumber / 10);
}
console.log(sum);
