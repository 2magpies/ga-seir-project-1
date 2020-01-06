// Add something to console for warm and fuzzy feeling
console.log('warm and fuzzy feelings');

//Referred to w3schools, MDN, labs, and homework

//GRAB A QUESTION FROM ARRAY

// create question array
const questionList = [
  'Where was Duke Kahanamoku born?',
  'Who was the first professional female surfer?',
  'What is the minimum length for a longboard?'
];

//select Let's Play button
const letsPlayButton = document.querySelector('letsPlay');
console.log(letsPlayButton);

//add event listener to lets play button
letsPlayButton.addEventListener('click', handleLetsPlayButton);

//create callback function for lets play button
function handleLetsPlayButton() {
  //return a question
  document.querySelector('.question').innerHTML = questionList[0];
}

// select question

//add event listener to element

//add callback function

//GRAB LIST OF ANSWERS FOR QUESTION
