var start = document.querySelector("#start");

var startQuizButton = document.querySelector("#start-quiz");
var highScoresButton = document.querySelector("#highscores");


var question = document.querySelector("#question");
var questionNo = document.querySelector("#questionNo");
var questionText = document.querySelector("#questionText");

var optionList = document.querySelectorAll("#optionList");
var choiceOptions = document.querySelectorAll(".choiceOptions");
var questionContainer = document.querySelector("#questionContainer");

var answers = document.querySelector("#answersSection");

var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");

var totalCorrect = document.querySelector("#total-correct");
var nextQuestion = document.querySelector("#next-question");

var questionInProgress = false;


var currentQuestion = 0;
var score = 0;
var index = 0;
var correct = 0;

// when the start button clicks
startQuizButton.addEventListener("click", function() {
console.log('click');
   if (questionInProgress === false) {
    questionInProgress = true;
    questionContainer.setAttribute("class", "visible");
  }
});

startQuizButton.addEventListener("click", function(){
    start.style.display = "none";
});

// loop of questions
 for(let i = 0; i < questions.length; i++) {
    console.log(questions[i]);
}

choiceOptions.forEach((choices, choiceOptions) => {
    choices.addEventListener("click", () => {
        choices.classList.add("active");
        //check answer
        if (choiceOptions === questions[index].answer) {
            correct++;
        } else {
            correct += 0;
        }

        // //disable All Options When User Select An Option
        // for (i = 0; i <= 3; i++) {
        //     choiceOptions[i].classList.add("disabled");
        // }
    })
});    

// startgame
 startGame = () => {
    availableQuestions = [...questions]
    getNewQuestion()
 }    
 

//what happens when the next button is clicked
nextQuestion.addEventListener("click", function() {
    console.log('click');
       if (questionInProgress === false) {
        questionInProgress = true;
        questionContainer.setAttribute("class", "visible");
      }
    });


//   else {
//     mode = "dark";
//     container.setAttribute("class", "dark");
//   }