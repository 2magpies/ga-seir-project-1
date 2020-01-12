// JM: Really well done.  Nicely commented and it's clear that you grasped the important concepts from the lessons and we're able to fill in the blanks with Google!

// I've reorganized your code, which made it easier to see where things were redundant.  To be honest, as we begin using React from this point forward, there won't be occasions for you to write all of your code in one file any more and it's unlikely that you'll do this in a professional setting either.  Nonetheless, organizing your code so that all of the variables are defined first such that they will be available throughout the file, function, class or module, followed by your functions, followed by any listeners, can help to make it easier to write DRY code.

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

let currentQuestion = 0;
let isQuestionAnswered = false;

// JM: No need to use `let` for any of these others.  The only time you need `let` is if you're going to reassign the variable.
const score = { rips: 0, wipeouts: 0 };
const scoreKeeperRips = document.querySelector('.rips');
const scoreKeeperWipeouts = document.querySelector('.wipeouts');
const letsPlayButton = document.querySelector('.letsPlay');
const buttonA = document.createElement('button');
const buttonB = document.createElement('button');
const buttonC = document.createElement('button');
const answerParagraph = document.createElement('p');
const question = document.querySelector('.question');
const nextButton = document.createElement('button');
const startOverButton = document.createElement('button');
const thanksForPlaying = document.createElement('p');
const playBtn = document.getElementById('play');

buttonA.classList.add('buttons');
buttonB.classList.add('buttons');
buttonC.classList.add('buttons');
nextButton.innerText = 'Paddle Out';
nextButton.classList.add('nextButton');
startOverButton.innerText = 'Head to Shore';
startOverButton.classList.add('startOverButton');
thanksForPlaying.innerText = 'Thanks for playing!';

function handleLetsPlayButton() {
  // No need to add the classes over and over here.
  // Just add them once when you initialize the page.
  // Remember, you're not adding the class to the element on the page
  // just the one in memory, so whether you remove it from the page or
  // not, the class is still stored on the element in memory.
  question.innerHTML = questionList[currentQuestion].question;
  buttonA.innerHTML = questionList[currentQuestion].answerA;
  document.body.appendChild(buttonA);

  buttonB.innerHTML = questionList[currentQuestion].answerB;
  document.body.appendChild(buttonB);

  buttonC.innerHTML = questionList[currentQuestion].answerC;
  document.body.appendChild(buttonC);

  // You can just style the button when it's disabled instead of adding a special class here
  // The selector you'd use in CSS is: button:disabled
  playBtn.disabled = true;
  playBtn.classList.add('disabled');
}

function checkAnswer(event) {
  // JM: Rather than check if the value is equal to false
  // you can shorten it up using the negation operator
  // So now if the value is true, it's negated thus evaluates
  // as false, so the code block is skipped. If it's false,
  // the value is negated thus true and the code is run.
  if (!isQuestionAnswered) {
    isQuestionAnswered = true;

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

function handleNextButton() {
  isQuestionAnswered = false;
  answerParagraph.innerText = '';
  document.body.removeChild(nextButton);
  document.body.removeChild(startOverButton);

  if (currentQuestion < 5) {
    currentQuestion += 1;
    //Good reuse of this function!
    handleLetsPlayButton();
  } else {
    document.body.appendChild(thanksForPlaying);
    question.innerHTML = '';
    playBtn.disabled = false;
    playBtn.classList.remove('disabled');
    currentQuestion = 0;
  }
}

function restartGame() {
  if (score.rips + score.wipeouts >= 1) {
    thanksForPlaying.innerText = '';
    score.rips = 0;
    scoreKeeperRips.innerText = `Rips: ${score.rips}`;
    score.wipeouts = 0;
    scoreKeeperWipeouts.innerText = `Wipeouts: ${score.wipeouts}`;
  }
}

function headToShoreButton() {
  restartGame();
  playBtn.disabled = false;
  playBtn.classList.remove('disabled');
  currentQuestion = 0;
  answerParagraph.innerText = '';
  document.body.removeChild(nextButton);
  document.body.removeChild(startOverButton);
  isQuestionAnswered = false;
  question.innerHTML = '';
}

// It's much easier to have all of your event listners in one place at the bottom of the page.  Organizing it this way, it was immediately clear that you had accidentally had two handlers on the letsPlayButton.
letsPlayButton.addEventListener('click', handleLetsPlayButton);
nextButton.addEventListener('click', handleNextButton);
startOverButton.addEventListener('click', headToShoreButton);
buttonA.addEventListener('click', checkAnswer);
buttonB.addEventListener('click', checkAnswer);
buttonC.addEventListener('click', checkAnswer);
