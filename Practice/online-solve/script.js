var teams = [
    {question : "2 * 6 ?" , answer : "12"},
    {question : "The best Team in chapmions leauge ? " , answer : "real madrid"},
    {question : "15 + 3 ?" , answer : "18"},
    {question : "Auther Ending Fuck off book " , answer : "gary john"},
];

var scores = 0;
var useranswer = ""

teams.forEach(function (questions) {
    useranswer = prompt(questions.question)
    if (useranswer === questions.answer) {
        scores++;
    }
})

alert(" scores : "+scores)