//Referred to w3schools, MDN, labs, homework, GA SEIR 129 cohort teachers, and classmates

//select elements from html
const letsPlayButton = document.querySelector('.letsPlay');
console.log(letsPlayButton);

let currentQuestion = 0;
let isQuestionAnswered = false;
let score = { rips: 0, wipeouts: 0 };

//create objects for elements to create in js
const buttonA = document.createElement('button');
const buttonB = document.createElement('button');
const buttonC = document.createElement('button');
const answerParagraph = document.createElement('p');
let scoreKeeperRips = document.querySelector('.rips');
let scoreKeeperWipeouts = document.querySelector('.wipeouts');

const nextButton = document.createElement('button');
nextButton.innerText = 'Paddle Out';
nextButton.classList.add('nextButton');

const thanksForPlaying = document.createElement('p');
thanksForPlaying.innerText = 'Thanks for playing!';

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

//add event listeners for calls to action
letsPlayButton.addEventListener('click', handleLetsPlayButton);
buttonA.addEventListener('click', checkAnswer);
buttonB.addEventListener('click', checkAnswer);
buttonC.addEventListener('click', checkAnswer);

//CREATE CALLBACK FUNCTION FOR LET'S PLAY BUTTON
function handleLetsPlayButton() {
  //return a question
  document.querySelector('.question').innerHTML =
    questionList[currentQuestion].question;

  // add element buttons and event listener fo each answer
  buttonA.innerHTML = questionList[currentQuestion].answerA;
  document.body.appendChild(buttonA);
  buttonA.classList.add('buttons');

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
  if (isQuestionAnswered === false) {
    isQuestionAnswered = true;
    console.log(event.target.innerText);

    document.body.appendChild(answerParagraph);
    document.body.appendChild(nextButton);
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
  console.log(score);
}

console.log(questionList[currentQuestion].correctAnswer);

//add event listener to paddle out button
nextButton.addEventListener('click', handleNextButton);

//CREATE FUNCTION FOR PADDLE OUT (AKA NEXT) BUTTON
function handleNextButton() {
  //reset isQuestionAnswered
  isQuestionAnswered = false;

  //remove results paragraph
  answerParagraph.innerText = '';

  //suppress nextButton
  document.body.removeChild(nextButton);

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
  console.log(currentQuestion);
}
//handle second Let's Play round: remove thanks for playing and reset score
letsPlayButton.addEventListener('click', restartGame);
function restartGame() {
  if (score.rips + score.wipeouts >= 1) {
    thanksForPlaying.innerText = '';
    score.rips = 0;
    scoreKeeperRips.innerText = `Rips: ${score.rips}`;
    score.wipeouts = 0;
    scoreKeeperWipeouts.innerText = `Wipeouts: ${score.wipeouts}`;
  }
  console.log(score);
}
