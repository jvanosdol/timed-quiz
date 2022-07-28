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

function optionSelected(selection) {
    var selectedAnswer = selection.textContent;
    console.log(selectedAnswer);
    var correctAns = quizQuestions[questionIndex].correct;
    console.log(correctAns)
    if ( selectedAnswer === correctAns ) {
        console.log('correct')
        alert('correct')
        questionIndex++;
    } else {
        console.log('incorrect')
        alert('incorrect')
        questionIndex++;
    }
}

// function isCorrect(answer) {
//     var correctAnswer = quizQuestions[questionIndex].correct;
//     console.log(correctAnswer)
//     if ( answer === correctAnswer ) {
//         console.log('you got it correct')
//     }

// }

// isCorrect();

showQuestion(questionIndex);

box1.addEventListener('click', () => {
    optionSelected(box1)
    showQuestion(questionIndex)
});
box2.addEventListener('click', () => {
    optionSelected(box2)
    showQuestion(questionIndex)
});
box3.addEventListener('click', () => {
    optionSelected(box3)
    showQuestion(questionIndex)
});
box4.addEventListener('click', () => {
    optionSelected(box4)
    showQuestion(questionIndex)
});


