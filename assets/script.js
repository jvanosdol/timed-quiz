var box1 = document.querySelector("#btn0");
var box2 = document.querySelector("#btn1");
var box3 = document.querySelector("#btn2");
var box4 = document.querySelector("#btn3");

var questionIndex = 0;

function showQuestion (index) {

    var question = document.querySelector("#question");
    var progress = document.querySelector("#progress")
    var qBox1 = document.querySelector("#btn0");
    var qBox2 = document.querySelector("#btn1");
    var qBox3 = document.querySelector("#btn2");
    var qBox4 = document.querySelector("#btn3");

    question.innerHTML= quizQuestions[index].question;

    progress.innerHTML = quizQuestions[index].questionIndex;

    qBox1.innerHTML = quizQuestions[index].answers[0];
    qBox2.innerHTML = quizQuestions[index].answers[1];
    qBox3.innerHTML = quizQuestions[index].answers[2];
    qBox4.innerHTML = quizQuestions[index].answers[3];
}

showQuestion(questionIndex);

box1.addEventListener('click', () => {
    questionIndex++;
    showQuestion(questionIndex)
});
box2.addEventListener('click', () => {
    questionIndex++;
    showQuestion(questionIndex)
});
box3.addEventListener('click', () => {
    questionIndex++;
    showQuestion(questionIndex)

});
box4.addEventListener('click', () => {
    questionIndex++;
    showQuestion(questionIndex)
});


