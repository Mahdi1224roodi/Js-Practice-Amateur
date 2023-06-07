// 621 => 3 رقم

var usernumber = prompt("Enter The Number")
var Counter = 0

if (isNaN(usernumber)) {
    alert("Please Enter Just Number")
}
else {
    if (usernumber == 0) {
        Counter = 1
    } else {
        for (var i = 0; (usernumber / 10) != 0; i++) {
            Counter++;
            usernumber = Math.floor(usernumber / 10)
        }
    }
}
alert("Sum Of digits : " + Counter);

/////////////// infinity loop odd and even

// for (var odd = 1; odd <= 100; odd++) {
//     if (odd % 2 == 0) {
//         console.log(odd);
//     }
// }
// for (var even = 1; even <= 100; even+=2) {
//        console.log(even);
// }

///////////////