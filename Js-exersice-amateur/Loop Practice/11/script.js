var Num = 0
var Sum = 0
for(i =1; i <= 5 ; i++){
    Num = Number(prompt("Enter The Number " + i + " "))
    Sum = Sum + Num;
}
console.log("Average " + (Sum / 5));