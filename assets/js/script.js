// start game
var start = document.querySelector("#start");
var container = document.querySelector(".container");
var startQuizButton = document.querySelector("#start-quiz");
var time = document.querySelector("#time");

// high score
var highScoresButton = document.querySelector("#highscores");
var saveScoreButton = document.querySelector("#saveScore");
var msgDiv = document.querySelector("#msg");
var highScoreContainer = document.querySelector("#highScoreContainer");
var usernameSpan = document.querySelector("#username");

// questions
var question = document.querySelector("question");
var questionNo = document.querySelector("#questionNo");
var questionText = document.querySelector("#questionText");
var nextQuestion = document.querySelector("#next-question");

// answer options
var optionList = document.querySelectorAll("#optionList");
var choiceOptions = document.querySelectorAll(".choiceOptions");
var questionContainer = document.querySelector("#questionContainer");

var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");

// var answers = document.querySelector("#answersSection");


var questionInProgress = false;
var index = 0;
var correct = 0;
var timer = 60;


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

// load questions 
    var loadQuestions = function() {
        questionNo.innerText = index + 1 + ".";
        questionText.innerText = questions[index].question;
        option1.innerText = questions[index].option1;
        option2.innerText = questions[index].option2;
        option3.innerText = questions[index].option3;
        option4.innerText = questions[index].option4;
     }

// start quiz starts timer
    startQuizButton.addEventListener("click", function(){
        start.style.display = "none";

        interval = setInterval(countDown, 1000);
        loadQuestions();
    });

  

// Timer
    var countDown = function() {
        if(timer <= 0)
        {
        clearInterval(interval);
        } else {
            timer--;
            console.log(timer);
            time.textContent = timer;
        }
     }



// answers section
        function answerClick(event) {
            var choice = event.target;
            console.log(choice.textContent);
            if (choice.textContent == questions[index].correctAnswer){
                // code for correct 
             } else {
                timer -= 10;
             }
             nextSetOfQuestions();
        };

        function nextSetOfQuestions() {
            console.log('click');
            if (index !== questions.length - 1) {
                index++;
                loadQuestions();
            }
            }

    option1.addEventListener("click", answerClick);
    option2.addEventListener("click", answerClick);
    option3.addEventListener("click", answerClick);
    option4.addEventListener("click", answerClick);


// high Scores button
highScoresButton.addEventListener("click", function() {
    console.log('click');

    highScoreContainer.setAttribute("class", "visible");
    }
);

    highScoresButton.addEventListener("click", function(){
        start.style.display = "none";
    });




// local storage
    function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
    }


    function renderLastRegistered() {
        var username = localStorage.getItem("username");
        usernameSpan.textContent = username;
      }
      
      saveScoreButton.addEventListener("click", function(event) {
        event.preventDefault();
      
        var username = document.querySelector("#username").value;
      
        if (username === "") {
          displayMessage("error", "Name can not be blank");
        } else {
          displayMessage("success", "High score logged successfully");
      
        // TODO: Save email and password to localStorage and render the last registered user
      
        localStorage.setItem("username", username);
        renderLastRegistered();
        }
      });