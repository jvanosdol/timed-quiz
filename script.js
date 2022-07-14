var questionPosition =[]
var time = document.getElementById("timer");

var questionText = document.getElementById("questionTextBox");

var questionText1 = document.getElementById("questionBox1");
var questionText2 = document.getElementById("questionBox2");
var questionText3 = document.getElementById("questionBox3");
var questionText4 = document.getElementById("questionBox4");

var secondsLeft = 4;

const countdownEl = document.getElementById('timer')


var position = 0;
questionText.textContent = "Where am i?"


var forwardButton = document.querySelector("#forward");
forwardButton.addEventListener('click', function() {
    positionIndex();
    } 
)

var paused = false;

// countdown timer, pauses the quiz when 'secondsLeft' is less than or equal to 0 'seconds'
var timer = setInterval(function () {
    if ( secondsLeft <= 0 ) {
            secondsLeft--;
            alert('out of time')
            clearInterval(timer)
            paused = true;
        }
    secondsLeft--;
    if ( secondsLeft >= 0 ) {
        countdownEl.innerHTML = secondsLeft;
    }
}, 1000);


//     if ( pause === false ) {
//     countdownEl.innerHTML = secondsLeft;
//     secondsLeft--;
//         if ( secondsLeft === -1) {
//             alert('you ran out of time')
//             pause = true;
//         }
//       } 
// }

// var questionBox1 = document.querySelector("#forward");
// questionBox1.addEventListener('click', function() {
//     positionIndex();
//     } 
// )


function positionIndex() {

    // game pauses if 'paused' is true
    if ( paused === false ) {
        
    if ( position < 5) {
        position++;
      console.log(position)
    }

    if ( position === 1 ) {
    
        questionText1.textContent = "Hello5"
        questionText2.textContent = "Hello6"
        questionText3.textContent = "Hello7"
        questionText4.textContent = "Hello8"

        questionText1.addEventListener('click', function() {
            position++;
            alert("Correct!")
            });
        questionText2.addEventListener('click', function() {
            position++;
            alert("Wrong!")
            time.textContent -= 10;
            });
        questionText3.addEventListener('click', function() {
            position++;
            alert("Wrong!")
            });
        questionText4.addEventListener('click', function() {
            position++;
            alert("Wrong!")
            });

        questionText.textContent = "What color is my shirt?"
    
    } else if ( position === 2 ) {
    
        questionText1.textContent = "Hello9"
        questionText2.textContent = "Hello10"
        questionText3.textContent = "Hello11"
        questionText4.textContent = "Hello12"

        questionText.textContent = "What color is the grass?"
    
    } else if ( position === 3 ) {
    
        questionText1.textContent = "Hello13"
        questionText2.textContent = "Hello14"
        questionText3.textContent = "Hello15"
        questionText4.textContent = "Hello16"

        questionText.textContent = "What color is the sky?"
    
    } else if ( position === 4 ) {
    
        questionText1.textContent = "Hello17"
        questionText2.textContent = "Hello18"
        questionText3.textContent = "Hello19"
        questionText4.textContent = "Hello20"

        questionText.textContent = "This is the fifth question"
    
    }
}};










 





