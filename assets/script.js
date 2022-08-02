var box1 = document.querySelector("#btn0");
var box2 = document.querySelector("#btn1");
var box3 = document.querySelector("#btn2");
var box4 = document.querySelector("#btn3");
var buttons = document.querySelector('.buttons')

var time = document.getElementById('timer')
time.innerHTML;

// countdown timer is dependant on the initial HTML value, change to lower starting value to debug
function countDownTimer () {
    var timeLeft = time.innerHTML;
    var countDown = setInterval(function() {
        timeLeft--;
        time.innerHTML = timeLeft;
        if ( timeLeft <= 0 ) {
            clearInterval(countDown);
            
            // removes all 'event listeners' on the 'question box' elements if the user runs out of time
            box1.replaceWith(box1.cloneNode(true));
            box2.replaceWith(box2.cloneNode(true));
            box3.replaceWith(box3.cloneNode(true));
            box4.replaceWith(box4.cloneNode(true));

            //displays the number of correct questions the user selected when the timer ran out
            alert('You ran out of time! You got ' + correctCount + ' out of 5 questions correct.');

        } else if ( questionIndex === 5 ) {
            clearInterval(countDown);
            
            // removes all 'event listeners' on the 'question box' elements if the user reaches the end of the quiz
            box1.replaceWith(box1.cloneNode(true));
            box2.replaceWith(box2.cloneNode(true));
            box3.replaceWith(box3.cloneNode(true));
            box4.replaceWith(box4.cloneNode(true));
        }
    }, 1000)
}

countDownTimer();





var questionIndex = 0;
var correctCount = 0;

// displays correct questions ouf of 5 when you complete the quiz
function correctQuestions (correctCount) {
    if ( questionIndex === 5 ) {
        console.log('You got ' + correctCount + ' out of 5 questions correct.')
        alert('You got ' + correctCount + ' out of 5 questions correct, with ' + (time.innerHTML - 1) + ' seconds left.')
    }
}

function showQuestion (index) {

    var question = document.querySelector("#question");
    var progress = document.querySelector("#progress")
    var qBox1 = document.querySelector("#btn0");
    var qBox2 = document.querySelector("#btn1");
    var qBox3 = document.querySelector("#btn2");
    var qBox4 = document.querySelector("#btn3");

    //displays questions based on the current question index
    if ( questionIndex < 5 ) {
        qBox1.innerHTML = quizQuestions[index].answers[0];
        qBox2.innerHTML = quizQuestions[index].answers[1];
        qBox3.innerHTML = quizQuestions[index].answers[2];
        qBox4.innerHTML = quizQuestions[index].answers[3];

        question.innerHTML= quizQuestions[index].question;
        progress.innerHTML = quizQuestions[index].questionIndex;
    }
        

    

}



function optionSelected(selection) {
    var selectedAnswer = selection.textContent;
    console.log(selectedAnswer);
    var correctAns = quizQuestions[questionIndex].correct;
 
    console.log(correctAns)

    // if answer is correct, display 'correct' to user in an alert and progress to next question if the user has not completed quiz
    if ( selectedAnswer === correctAns ) {
        console.log('correct')
        alert('correct')
        correctCount++;
        if (questionIndex < 5 ) {
           questionIndex++; 
        } 
    
    // if answer is incorrect, display 'incorrect' to user in an alert and progress to next question if the user has not completed quiz
    } else if ( selectedAnswer !== correctAns ) {
        console.log('incorrect')
        alert('incorrect')
        if ( questionIndex < 5 ){
            questionIndex++;
        }
        
    }
}

showQuestion(questionIndex);


// adds 'event listeners' to all of the question box elemtents, added 'console logs' for debugging
box1.addEventListener('click', () => {
    optionSelected(box1)
    showQuestion(questionIndex)
    console.log('Correct:' + correctCount)
    console.log('Question Index:' + questionIndex)
    correctQuestions(correctCount)
});
box2.addEventListener('click', () => {
    optionSelected(box2)
    showQuestion(questionIndex)
    console.log('Correct:' + correctCount)
    console.log('Question Index:' + questionIndex)
    correctQuestions(correctCount)
});
box3.addEventListener('click', () => {
    optionSelected(box3)
    showQuestion(questionIndex)
    console.log('Correct:' + correctCount)
    console.log('Question Index:' + questionIndex)
    correctQuestions(correctCount)
});
box4.addEventListener('click', () => {
    optionSelected(box4)
    showQuestion(questionIndex)
    console.log('Correct:' + correctCount)
    console.log('Question Index:' + questionIndex)
    correctQuestions(correctCount)
});






