//Referred to w3schools, MDN, labs, homework, GA SEIR 129 cohort teachers, and classmates

//add an object to identify the current question
let currentQuestion = 0;

//add object to indicate that an answer button has been clicked
let isQuestionAnswered = false;

//add object to track number of correct answers and number of incorrect answers
let score = { rips: 0, wipeouts: 0 };
let scoreKeeperRips = document.querySelector('.rips');
let scoreKeeperWipeouts = document.querySelector('.wipeouts');

//select Let's Play button
const letsPlayButton = document.querySelector('.letsPlay');

//create objects for possible answers
const buttonA = document.createElement('button');
const buttonB = document.createElement('button');
const buttonC = document.createElement('button');

//create object for results
const answerParagraph = document.createElement('p');

//create object for next button (Paddle Out)
const nextButton = document.createElement('button');
nextButton.innerText = 'Paddle Out';
nextButton.classList.add('nextButton');

//create object for start over button (Head to Shore)
const startOverButton = document.createElement('button');
startOverButton.innerText = 'Head to Shore';
startOverButton.classList.add('startOverButton');

//create object for end of game message
const thanksForPlaying = document.createElement('p');
thanksForPlaying.innerText = 'Thanks for playing!';

//create list of questions and answers
const questionList = [
  {
    question: 'Where was Duke Kahanamoku born?',
    answerA: 'Honolulu, HI',
    answerB: 'Los Angeles, CA',
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
    correctAnswer: 'Plymouth University (UK)'
  }
];

//add event listeners to buttons
letsPlayButton.addEventListener('click', handleLetsPlayButton);
buttonA.addEventListener('click', checkAnswer);
buttonB.addEventListener('click', checkAnswer);
buttonC.addEventListener('click', checkAnswer);
nextButton.addEventListener('click', handleNextButton);

//CREATE CALLBACK FUNCTION FOR LET'S PLAY BUTTON
function handleLetsPlayButton() {
  //display a question
  document.querySelector('.question').innerHTML =
    questionList[currentQuestion].question;

  // display buttons for each answer
  buttonA.innerHTML = questionList[currentQuestion].answerA;
  document.body.appendChild(buttonA);
  buttonA.classList.add('buttons'); //for style

  buttonB.innerHTML = questionList[currentQuestion].answerB;
  document.body.appendChild(buttonB);
  buttonB.classList.add('buttons');

  buttonC.innerHTML = questionList[currentQuestion].answerC;
  document.body.appendChild(buttonC);
  buttonC.classList.add('buttons');

  //deactivate Let's Play button
  document.getElementById('play').disabled = true;
  document.getElementById('play').classList.add('disabled');
}

//CREATE FUNCTION TO CHECK ANSWER

function checkAnswer(event) {
  //check if question is answered
  if (isQuestionAnswered === false) {
    isQuestionAnswered = true;

    //show results
    document.body.appendChild(answerParagraph);
    document.body.appendChild(nextButton);
    document.body.appendChild(startOverButton);
    document.body.removeChild(buttonA);
    document.body.removeChild(buttonB);
    document.body.removeChild(buttonC);

    if (
      event.target.innerText === questionList[currentQuestion].correctAnswer
    ) {
      //display correct answer message
      answerParagraph.innerText =
        'Awesome! Way to rip! You got the correct answer, ' +
        questionList[currentQuestion].correctAnswer +
        '.';

      //update object for counting correct answers
      score.rips += 1;
      scoreKeeperRips.innerText = `Rips: ${score.rips}`;
    } else {
      answerParagraph.innerText =
        'Wipe out! Sorry, braugh. Correct answer is ' +
        questionList[currentQuestion].correctAnswer +
        '.';

      //update object for counting correct answers
      score.wipeouts += 1;
      scoreKeeperWipeouts.innerText = `Wipeouts: ${score.wipeouts}`;
    }
  }
}

//CREATE FUNCTION FOR PADDLE OUT (AKA NEXT) BUTTON
function handleNextButton() {
  //reset isQuestionAnswered
  isQuestionAnswered = false;

  //remove results paragraph
  answerParagraph.innerText = '';

  //suppress nextButton and startOverButton
  document.body.removeChild(nextButton);
  document.body.removeChild(startOverButton);

  if (currentQuestion < 5) {
    //increment currentQuestion value
    currentQuestion += 1;

    //call lets play function
    handleLetsPlayButton();
  } else {
    document.body.appendChild(thanksForPlaying);
    document.querySelector('.question').innerHTML = '';

    //reactivate Let's Play button
    document.getElementById('play').disabled = false;
    document.getElementById('play').classList.remove('disabled');
    currentQuestion = 0;
  }
}
//CREATE RESTART FUNCTION to remove thanks for playing and reset score
letsPlayButton.addEventListener('click', restartGame);
function restartGame() {
  if (score.rips + score.wipeouts >= 1) {
    thanksForPlaying.innerText = '';
    score.rips = 0;
    scoreKeeperRips.innerText = `Rips: ${score.rips}`;
    score.wipeouts = 0;
    scoreKeeperWipeouts.innerText = `Wipeouts: ${score.wipeouts}`;
  }
}
//CREATE STARTOVER FUNCTION to handle head to shore button
//add event listener to start ove button (head to shore)
startOverButton.addEventListener('click', headToShoreButton);

function headToShoreButton() {
  //call restart function
  restartGame();

  //reactivate Let's Play button
  document.getElementById('play').disabled = false;
  document.getElementById('play').classList.remove('disabled');
  currentQuestion = 0;
  //remove results paragraph
  answerParagraph.innerText = '';

  //suppress nextButton and startOverButton
  document.body.removeChild(nextButton);
  document.body.removeChild(startOverButton);
  //reset isQuestionAnswered
  isQuestionAnswered = false;
  //display a question
  document.querySelector('.question').innerHTML = '';
}
