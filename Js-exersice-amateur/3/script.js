var UserBirthday = Number(prompt("Please Enter Your Birthdy:",1385));

if (isNaN(UserBirthday)) { 
    alert("Please Eneter Just Number");
}
else if (UserBirthday >= 1402) {
    alert("You will be born in the future : )");
}
else{
    var UserAge = 1402 - UserBirthday;
    alert("Your Age : "+UserAge);
}
