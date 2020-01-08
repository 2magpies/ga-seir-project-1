// create an array (questionList) of 6 question objects that include
// a question,
//3 answers,
//an image source for a hint,
//the correct answer

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

//add an object to identify a question when it is invoked (currentQuestion)
const currentQuestion = 0;

//create an empty array to count number of correct answers and number of incorrect answers
const score = { rips: 0, wipeouts: 0 };

//add function to define the behaviour of the Let's Play button

//get the question in the questions array

//get the image hint

//create 3 answer buttons

//insert the possible answers a, b, and c into the answer buttons

//add function to check answer when user clicks an answer button

//add response to correct answer

//add response to incorrect answer

//update array for counting correct and incorrect answers

//display number of correct answers
score.rips += 1;
//display number of incorrect answers
score.wipeouts += 1;

//prompt user to try another question

//provide option to quit

//add function to increment current question value then run the letsPlay function

//if a user answers all question, display an end of trivia message

//add link to other games
