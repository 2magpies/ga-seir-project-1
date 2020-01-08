//add an object to identify a question when it is invoked (currentQuestion)
let currentQuestion = 0;

//add object to indicate that an answer button has been clicked
let isQuestionAnswered = false;

//add object to track number of correct answers and number of incorrect answers
let score = { rips: 0, wipeouts: 0 };

const letsPlayButton = document.querySelector('.letsPlay');
console.log(letsPlayButton);

// create an array (questionList) of question objects that include a question, 3 answers, the correct answer
//an image source for a hint,
const questionList = [
  {
    question: 'Where was Duke Kahanamoku born?',
    answerA: 'Honolulu, HI',
    answerB: 'Los Angles, CA',
    answerC: 'Istanbul, Turkey',
    correctAnswer: 'Honolulu, HI'
  },
  {
    question: 'Who was the first woman to win a surf competition?',
    answerA: 'Kelly Slater',
    answerB: 'Margo Oberg',
    answerC: "Phyllis O'Donnell",
    correctAnswer: 'Margo Oberg'
  },
  {
    question: 'What is the minimum length of a longboard?',
    answerA: '8 feet',
    answerB: '8.5 feet',
    answerC: '9 feet',
    correctAnswer: '9 feet'
  },
  {
    question:
      'Where did mystery writer Agatha Christie learn to surf standing up?',
    answerA: 'Waikiki Beach , HI',
    answerB: 'Muizenberg Beach,South Africa',
    answerC: 'Cornwall, England',
    correctAnswer: 'Waikiki Beach , HI'
  },
  {
    question: 'Who was the first surfer to ride Pipeline?',
    answerA: 'Greg Noll',
    answerB: 'Dale Velzy',
    answerC: 'Phil Edwards',
    correctAnswer: 'Greg Noll'
  },
  {
    question: 'What school offers a degree in Surf Science and Technology?',
    answerA: 'Griffith University (Australia)',
    answerB: 'John Hopkins University (USA)',
    answerC: 'Plymouth University (UK)',
    correctAnswer: 'Greg Noll'
  }
];
console.log(questionList.correctAnswer[2]);

//add event listener to lets play button
letsPlayButton.addEventListener('click', handleLetsPlayButton);

//add callback function for lets play button
function handleLetsPlayButton() {
  //create question element
  document.querySelector('.question').innerHTML =
    questionList[currentQuestion].question;

  //get the image hint

  //create 3 answer buttons
  const buttonA = document.createElement('button');
  buttonA.innerHTML = questionList[currentQuestion].answerA;
  document.body.appendChild(buttonA);

  const buttonB = document.createElement('button');
  buttonB.innerHTML = questionList[currentQuestion].answerB;
  document.body.appendChild(buttonB);

  const buttonC = document.createElement('button');
  buttonC.innerHTML = questionList[currentQuestion].answerC;
  document.body.appendChild(buttonC);

  //add event listeners to buttons
  buttonA.addEventListener('click', checkAnswer);
  buttonB.addEventListener('click', checkAnswer);
  buttonC.addEventListener('click', checkAnswer);
}
//add function to check answer when user clicks an answer button
function checkAnswer(event) {
  //check isQuestionAnswered
  if (isQuestionAnswered === false) {
    //set isQuestionAnswered to true
    isQuestionAnswered = true;
    //check event.target text
    console.log(event.target.innerText);
    //create object for results paragraph  
    const answerParagraph = document.createElement('p');
    document.body.appendChild(answerParagraph);
    //add result for correct answer
    if (
      event.target.innerText === questionList[currentQuestion].correctAnswer
    ) {
      answerParagraph.innerText = 'Awesome! Way to rip!';

      //update object for counting correct answers
      score.rips += 1;
    } else {
      //add result for incorrect answer
      answerParagraph.innerText = 'Wipe out! Sorry, braugh.';
      //update object for counting correct answers
      score.wipeouts += 1;
    }
  }
}
console.log(questionList[currentQuestion].correctAnswer);

//display score

//prompt user to try another question

//add function to increment current question value then run the letsPlay function

//provide option to quit

//if a user answers all question, display an end of trivia message

//add link to other games
