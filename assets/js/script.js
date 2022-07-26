// const question = document.getElementById("question");
// // preparing to use for a custom atribute, will use from data-number the number part
// const choices = Array.from(document.getElementByClassName("users-answer"));

// let currentQuestion = {};
// let acceptingAnswers = true;
// let score = 0;
// let questionCounter = 0;
// // copy of the entire question set
// let availableQuestions = [];

// let questions = [
//   {
//     question: "Who was the Cubism current initiator?",
//     choice1: "Picasso",
//     choice2: "Dali",
//     choice3: "Paul Cezanne",
//     choice4: "Goya",
//     answer: 1
//   },
//   {
//     question: "Who was the author of Dracula?",
//     choice1: "Bram Stoker",
//     choice2: "Scott Fitzgerald",
//     choice3: "Herman Melville",
//     choice4: "Jane Austen",
//     answer: 1
//   },
//   {
//     question: "Who was the author of The Great Gatzby?",
//     choice1: "Scott Fitzgerald",
//     choice2: "Ernest Hemingway",
//     choice3: "J. D. Sallinger",
//     choice4: "Scott Fitzgerald",
//     answer: 1
//   }, 
//   {
//     question: "Who was the author of For Whom The Bell Tolls?",
//     choice1: "Ernest Hemingway",
//     choice2: "Margaret Mitchell",
//     choice3: "Mark Twain",
//     choice4: "Raymond Chandler",
//     answer: 1
//   }
// ];

//  const WITH_BONUS = 10;
//  const MAX_QUESTIONS = 3

//  startGame1 = () => {
//   questionCounter = 0;
//   score= 0;
//   // take the questions array spred out exch items and create a new array
//   availableQuestions = [ ... questions];
//   console.log(availableQuestions);
//   getNewQuestion();
// };
               
// getNewQuestion = () => {
//   questionCounter++;
//   const questionIndex = Math.floor(Math.random() * availableQuestions.length);
//   currentQuestion = availableQuestions[questionIndex];
//   question.innerText = currentQuestion['choice' = number];

// };

// startGame1();


//                     var timeEl = document.querySelector(".timeNew");

//                     // Selects element by id
//                     // var mainEl = document.getElementById("main");

//                     var secondsLeft = 5;

//                     function setTime() {
//                       // Sets interval in variable
//                       var timerInterval = setInterval(function() {
//                         secondsLeft--;
//                         timeEl.textContent = secondsLeft + " seconds left till game end";
                    
//                         if(secondsLeft === 0) {
//                           // Stops execution of action at set interval
//                           clearInterval(timerInterval);
//                           // Calls function to create and append image
//                           // sendMessage();
//                         }
                    
//                       }, 1000);
//                     }
// // function to bring up a message game end
//                     // function sendMessage() {
//                     //   timeEl.textContent = " ";
//                     //   var imgEl = document.createElement("img");
//                     //   imgEl.setAttribute("src", "images/image_1.jpg");
//                     //   mainEl.appendChild(imgEl);
                    
//                     // }

//                     setTime();




                    // var wordBlank = document.querySelector(".word-blanks");
                    // var win = document.querySelector(".win");
                    // var lose = document.querySelector(".lose");
                    
                    var timerElement = document.querySelector(".time2");
                    var startButton = document.querySelector(".start-button");
                    var nextButton = document.querySelector(".nextButton");
                    var correctPicasso = document.querySelector(".picasso-btn");
                    
                    // var chosenWord = "";
                    // var numBlanks = 0;
                    // var winCounter = 0;
                    // var loseCounter = 0;
                    // var isWin = false;
                    var timer;
                    var timerCount;

// var startButton = document.querySelector(".start-button");


// var winCounter = 0;
// var loseCounter = 0;
// var timer;
// var timerCount;
// var isWin = false;




  // The startGame function is called when the start button is clicked
function startGame() {
  
  
  timerCount = 75;
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  
  startTimer()
  // startNextPage()
}
//   timerCount = 10;
  // Prevents start button from being clicked when round is in progress


  var page1 = document.querySelector("#first-page");
  var pagemain = document.querySelector("#main-page");
  var page2 = document.querySelector(".second-page");
  
//   startButton.addEventListener("click", changePage);
     
// function changePage(){
  
//   document.getElementById(".first-page").style.display = "block";
//   document.getElementById("main-page").style.display = "none";
//   startButton.disabled = true;
// }

function startNextPage() {
  page1.style.display = "block";
  pagemain.style.display = "none";
  page2.style.display = "none";
}


// startTimer()

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);
startButton.addEventListener("click", startNextPage);

function startNextPage2() {
  page1.style.display = "none";
  pagemain.style.display = "none";
  page2.style.display = "block";
}

nextButton.addEventListener("click", startNextPage2);

var resp2of1Button = document.querySelector(".dali-btn");
var resp3of1Button = document.querySelector(".cezanne-btn");

function subtractTime() {
  timerCount = timerCount -= 5
}

resp2of1Button.addEventListener("click", subtractTime);



// function subtractTime() {
//   timerCount = timerCount -= 5
// }

resp3of1Button.addEventListener("click", subtractTime);

// picasso11.picasso-btn{"style", "background-color:blue;"} 
// picasso11.setAtribute("style", "background-color:blue;");
correctPicasso.addEventListener("click", picasso11);

// var timerElement = document.querySelector(".time");

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    // timeEl.textContent =
    timerElement.textContent = timerCount;
    // if (timerCount >= 0) 
    // {
    //   // Tests if win condition is met
    //   if (isWin && timerCount > 0) {
    //     // Clears interval and stops timer
    //     clearInterval(timer);
       
    //   }
    // }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
     
    }
  }, 1000);
}



// startTimer()

// Attach event listener to start button to call startGame function on click
// startButton.addEventListener("click", startGame);
// startButton.addEventListener("click", finction() );




// var counter = document.querySelector("#counter");


// var count = 0;
// //  Select increment and decrement button elements
// var incrementEl = document.querySelector("#increment");
// var decrementEl = document.querySelector("#decrement");
// var countEl = document.querySelector("#count");

// // Updates count on page
// function setCounterText() {
//   countEl.textContent = count;
// }

// if (timerCount === 70) {
//   document.getElementById("#first-page").style.display = "block";
//   document.getElementById("#main-page").style.display = "none";

// }
// document.getElementById("#first-page").style.display = "block";
//   document.getElementById("#main-page").style.display = "none";





// Attach event listener to increment button element
// incrementEl.addEventListener("click", function() {
//   count++;
//   setCounterText();
// });

// Attach event listener to decrement button element
// decrementEl.addEventListener("click", function() {
//   // Action will fire if count is greater than  0
//   if (count > 0) {
//     count--;
//     setCounterText();
//   }
// });