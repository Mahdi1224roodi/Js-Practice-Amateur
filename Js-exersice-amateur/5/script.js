var Mark = Number(prompt("Enter Your Mark : "))
if (isNaN(Mark)) {
    alert("Please Enter Just Number")
}
else{
    switch (Mark) {
        case 20:
        case 19:
        case 18:
            alert("A+ ")
            break;
        case 17:
        case 16:
        case 15:
            alert("A")
            break;
        case 14:
        case 13:
        case 12:
            alert("B")
            break;  
        case 11:
        case 10:
            alert("C")
            break;
        // case 9 < 0:
        //     alert("not accepted")
        //     break;
        default:
            alert("not accepted")
            break;
    }
}