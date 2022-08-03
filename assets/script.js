var box1 = document.querySelector("#btn0");
var box2 = document.querySelector("#btn1");
var box3 = document.querySelector("#btn2");
var box4 = document.querySelector("#btn3");
var buttons = document.querySelector('.buttons');
var recentScore = document.getElementById('recent-score');
var quizContainer = document.querySelector('.quiz-container');
var time = document.getElementById('timer');
var highScoreContainer = document.getElementById('high-score-container');
var highScores = JSON.parse(localStorage.getItem("highScores") || '[]');
var userName = document.getElementById('input-score');
var saveBtn = document.getElementById('save-score');
var restartBtn = document.getElementById('restart');
var startBtn = document.getElementById('start-btn');

var questionIndex = 0;
var correctCount = 0;



// countdown timer is dependant on the initial HTML value, change to lower starting value to debug
function countDownTimer () {
    var countDown = setInterval(function() {
        time.innerHTML--;

        //time.innerHTML = timeLeft;
        if ( time.innerHTML <= 0 ) {
            clearInterval(countDown);
            
            // removes all 'event listeners' on the 'question box' elements if the user runs out of time
            // box1.replaceWith(box1.cloneNode(true));
            // box2.replaceWith(box2.cloneNode(true));
            // box3.replaceWith(box3.cloneNode(true));
            // box4.replaceWith(box4.cloneNode(true));
            

            //displays the number of correct questions the user selected when the timer ran out

            quizContainer.style.display = 'none';


            alert('You ran out of time! You got ' + correctCount + ' out of 5 questions correct.');

            highScoreContainer.style.display = 'inline';
            
            recentScore.innerHTML = correctCount;

        }
        
        if ( questionIndex === 5  && time.innerHTML > 0 ) {
            clearInterval(countDown);
            
            // removes all 'event listeners' on the 'question box' elements if the user reaches the end of the quiz


            // box1.replaceWith(box1.cloneNode(true));
            // box2.replaceWith(box2.cloneNode(true));
            // box3.replaceWith(box3.cloneNode(true));
            // box4.replaceWith(box4.cloneNode(true));


            //displays the number of correct questions the user selected when the game ends

            quizContainer.style.display = 'none';
            alert('You got ' + correctCount + ' out of 5 questions correct.');

            highScoreContainer.style.display = 'inline';

            recentScore.innerHTML = correctCount;

            // localStorage.setItem('highScores', correctCount)

            //saveHighScore();
            

        }
    }, 1000)
}

// function gameEnd () {
//     // ask user for high score and then save it to local storage

//     // quiz-container is to be replaced by another container with a high score element.
//     quizContainer.replaceWith(quizContainer2);
// }



// function gameStart() {

// }





saveBtn.addEventListener('click', () => {


    var score = {
                 score: correctCount,
                 name: userName.value
            };

    console.log(highScores.length)
    

    localStorage.setItem('score', JSON.stringify(correctCount))

    localStorage.setItem('name', (userName.value))
    
    highScores.push(score)
    console.log(highScores)
})



restartBtn.addEventListener('click', () => {
    highScoreContainer.style.display = 'none';
    quizContainer.style.display = 'inline';
    restartQuiz();
})



// saveHighScore = e => {
//     e.preventDefault();
//     console.log(highScores)

//     var score = {
//         score: correctCount,
//         name: userName.value
//     };
//     console.log(score)
//     highScores.push(score);
// }





// displays correct questions ouf of 5 when you complete the quiz
// function correctQuestions (correctCount) {
//     if ( questionIndex === 5 ) {
//         console.log('You got ' + correctCount + ' out of 5 questions correct.')
//         alert('You got ' + correctCount + ' out of 5 questions correct, with ' + (time.innerHTML - 1) + ' seconds left.')

//     }
// }

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




function restartQuiz() {
    time.innerHTML = 30;
    questionIndex = 0;
    correctCount = 0;


    
    startQuiz();
    

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
        time.innerHTML -= 5;
        if ( questionIndex < 5 ){
            
            questionIndex++;
            
        }
    }
}



// adds 'event listeners' to all of the question box elemtents, added 'console logs' for debugging



    box1.addEventListener('click', () => {
    optionSelected(box1)
    showQuestion(questionIndex)
    console.log('Correct:' + correctCount)
    console.log('Question Index:' + questionIndex)
    //corectQuestions(correctCount)
    });
    box2.addEventListener('click', () => {
    optionSelected(box2)
    showQuestion(questionIndex)
    console.log('Correct:' + correctCount)
    console.log('Question Index:' + questionIndex)
    //correctQuestions(correctCount)
    });
    box3.addEventListener('click', () => {
    optionSelected(box3)
    showQuestion(questionIndex)
    console.log('Correct:' + correctCount)
    console.log('Question Index:' + questionIndex)
    //correctQuestions(correctCount)
    });
    box4.addEventListener('click', () => {
    optionSelected(box4)
    showQuestion(questionIndex)
    console.log('Correct:' + correctCount)
    console.log('Question Index:' + questionIndex)
    //correctQuestions(correctCount)
    });  


function startQuiz() {
    countDownTimer();
    showQuestion(questionIndex);
}

startBtn.addEventListener('click', () => {
    quizContainer.style.display = 'inline';
    startBtn.style.display = 'none';
    startQuiz();
})

//startQuiz();










