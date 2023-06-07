
var userNumber = 0
var sum = 0
var counter = 0

while (userNumber != -1) {
	sum += userNumber
	userNumber = Number(prompt('Enter The Number: \n if you dont have a number, enter -1'))
	if (userNumber != -1) {
		counter++
	}
}

// console.log('Sum: ', sum)
// console.log('Counter: ', counter)

console.log('Average: ', sum / counter)