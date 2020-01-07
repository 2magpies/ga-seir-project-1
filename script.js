// Add something to console for warm and fuzzy feeling
console.log('warm and fuzzy feelings');

//Referred to w3schools, MDN, labs, homework, GA SEIR 129 cohort teachers

//GRAB A QUESTION FROM ARRAY

// create question array
// const questionList = [
//   'Where was Duke Kahanamoku born?',
//   'Who was the first professional female surfer?',
//   'What is the minimum length for a longboard?'
// ];

const questionList = [
  {
    question: 'Where was Duke Kahanamoku born?',
    answerA: 'Honolulu, HI',
    answerB: 'Los Angles, CA',
    answerC: 'Istanbul, Turkey',
    correctAnswer: 'Honolulu, HI'
  }
];
//select Let's Play button
const letsPlayButton = document.querySelector('.letsPlay');
console.log(letsPlayButton);

//add event listener to lets play button
letsPlayButton.addEventListener('click', handleLetsPlayButton);

//create callback function for lets play button
function handleLetsPlayButton() {
  //add question counter to track question
  var currentQuestion = 0;
  //return a question
  document.querySelector('.question').innerHTML =
    questionList[currentQuestion].question;

  //create element button with for loop
  //   var questionButton = document.createElement('button');
  //   var i;
  //   for (i = 0; i < questionList.length; i++);
  //   {
  //     questionButton.innerHTML = questionList[currentQuestion].i;
  //   }
  //   document.body.appendChild(questionButton);

  //or, create element buttons individually
  var buttonA = document.createElement('button');
  buttonA.innerHTML = questionList[currentQuestion].answerA;
  document.body.appendChild(buttonA);

  var buttonB = document.createElement('button');
  buttonB.innerHTML = questionList[currentQuestion].answerB;
  document.body.appendChild(buttonB);

  var buttonC = document.createElement('button');
  buttonC.innerHTML = questionList[currentQuestion].answerC;
  document.body.appendChild(buttonC);
}

//CREATE LOGIC TO HANDLE ANSWER

// create function to check if answer is correct: innerHTML of clicked button === correctAnswer?

// create correct answer paragraph
var correctAnswerParagraph = document.createElement('p');
correctAnswerParagraph.innerText = 'Awesome! Way to rip!';
// create incorrect answer paragraph
var incorrectAnswerParagraph = document.createElement('p');
incorrectAnswerParagraph.innerText = 'Wipe out! Sorry, brau.';
