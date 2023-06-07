var menu = prompt("1. + \n2. - \n3. * \n4. /");

if (menu == 1) {
    var num1 = Number(prompt("num1 :"));
    var num2 = Number(prompt("num2 :"));
    console.log(num1+num2)
}else if (menu == 2) {
    var num1 = Number(prompt("num1 :"));
    var num2 = Number(prompt("num2 :"));
    console.log(num1-num2)
}
else if (menu == 3) {
    var num1 = Number(prompt("num1 :"));
    var num2 = Number(prompt("num2 :"));
    console.log(num1*num2)
}
else if (menu == 4) {
    var num1 = Number(prompt("num1 :"));
    var num2 = Number(prompt("num2 :"));
    console.log(num1/num2)
}

// with function 