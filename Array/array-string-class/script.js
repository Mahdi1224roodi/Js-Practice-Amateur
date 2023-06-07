var numbers = [12,15,20,8,19]
// Array.isArray() // this is a array?
// numbers.indexOf() // give it a index 
// numbers.lastIndexOf() // give it a last index 
// numbers.slice() // remove from array
// numbers.join() // make string
// numbers.reverse() // reverse array
var strings = 'IRAN'
// strings.split() // make array

//exersice

var word = prompt("Enter the word : ");
var reverse = word.split('');
var reverses = reverse.reverse();
var joined = reverses.join('')
//condition
console.log(joined)
if (joined == word) {
    console.log("your world rtl and ltr equal ")
}else{
    console.log("not equal")
}