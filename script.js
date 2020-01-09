// Add something to console for warm and fuzzy feeling
console.log('warm and fuzzy feelings');

//Referred to w3schools, MDN, labs, homework, GA SEIR 129 cohort teachers

//GRAB A QUESTION FROM ARRAY

let currentQuestion = 0;
let isQuestionAnswered = false;
let score = { rips: 0, wipeouts: 0 };
let scoreKeeperRips = document.createElement('p');
scoreKeeperRips.innerHTML = 'Rips: ' + score.rips;

const buttonA = document.createElement('button');
const buttonB = document.createElement('button');
const buttonC = document.createElement('button');
const answerParagraph = document.createElement('p');
const nextButton = document.createElement('button');
nextButton.innerText = 'Paddle Out';

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
    correctAnswer: 'Greg Noll'
  }
];
//select Let's Play button
const letsPlayButton = document.querySelector('.letsPlay');
console.log(letsPlayButton);

//add event listener to lets play button
letsPlayButton.addEventListener('click', handleLetsPlayButton);

//create callback function for lets play button
function handleLetsPlayButton() {
  //return a question
  document.querySelector('.question').innerHTML =
    questionList[currentQuestion].question;
  // var questionItem = document.createElement('p');
  // questionItem.innerHTML = questionList[currentQuestion].question;
  // document.body.appendChild(questionItem);

  // add element buttons and event listener fo each answer

  buttonA.innerHTML = questionList[currentQuestion].answerA;
  document.body.appendChild(buttonA);
  buttonA.addEventListener('click', checkAnswer);

  buttonB.innerHTML = questionList[currentQuestion].answerB;
  document.body.appendChild(buttonB);
  buttonB.addEventListener('click', checkAnswer);

  buttonC.innerHTML = questionList[currentQuestion].answerC;
  document.body.appendChild(buttonC);
  buttonC.addEventListener('click', checkAnswer);
}

//CREATE LOGIC TO HANDLE ANSWER

// create function to check if answer is correct: innerHTML of clicked button === correctAnswer

function checkAnswer(event) {
  if (isQuestionAnswered === false) {
    isQuestionAnswered = true;
    console.log(event.target.innerText);
    document.body.appendChild(answerParagraph);
    document.body.appendChild(nextButton);

    if (
      event.target.innerText === questionList[currentQuestion].correctAnswer
    ) {
      answerParagraph.innerText = 'Awesome! Way to rip!';
      //update object for counting correct answers
      score.rips += 1;
      //document.body.appendChild(scoreKeeperRips);
    } else {
      answerParagraph.innerText =
        'Wipe out! Sorry, braugh. Correct answer is ' +
        questionList[currentQuestion].correctAnswer +
        '.';
      //update object for counting correct answers
      score.wipeouts += 1;
    }
  }
  console.log(score);
}

console.log(questionList[currentQuestion].correctAnswer);

//add event listener to paddle out button
nextButton.addEventListener('click', handleNextButton);

//create callback function for lets play button
function handleNextButton() {
  //reset isQuestionAnswered so user can click any button
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
    document.body.removeChild(buttonA);
    document.body.removeChild(buttonB);
    document.body.removeChild(buttonC);
    document.body.appendChild(thanksForPlaying);
    document.querySelector('.question').innerHTML = '';
  }
}
//all done message...if currentQuestion = questionList.length then display message
