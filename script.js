// Add something to console for warm and fuzzy feeling
console.log('warm and fuzzy feelings');

//Referred to w3schools, MDN, labs, homework, GA SEIR 129 cohort teachers

//GRAB A QUESTION FROM ARRAY

let currentQuestion = 0;

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
  const buttonA = document.createElement('button');
  buttonA.innerHTML = questionList[currentQuestion].answerA;
  document.body.appendChild(buttonA);

  // create event listener for buttonA
  buttonA.addEventListener('click', checkAnswer);

  const buttonB = document.createElement('button');
  buttonB.innerHTML = questionList[currentQuestion].answerB;
  document.body.appendChild(buttonB);
  buttonB.addEventListener('click', checkAnswer);

  const buttonC = document.createElement('button');
  buttonC.innerHTML = questionList[currentQuestion].answerC;
  document.body.appendChild(buttonC);
  buttonC.addEventListener('click', checkAnswer);
}

//CREATE LOGIC TO HANDLE ANSWER

// create function to check if answer is correct: innerHTML of clicked button === correctAnswer
function checkAnswer(event) {
  console.log(event.target.innerText);
  const answerParagraph = document.createElement('p');

  document.body.appendChild(answerParagraph);

  if (event.target.innerText === questionList[currentQuestion].correctAnswer) {
    answerParagraph.innerText = 'Awesome! Way to rip!';
  } else {
    answerParagraph.innerText = 'Wipe out! Sorry, brau.';
  }
}
console.log(questionList[currentQuestion].correctAnswer);
