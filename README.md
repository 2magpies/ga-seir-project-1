## Project 1: Surfer Trivia Game

A game of who, what, where for surfer geeks!..
May you rip long!

### Description

**_Surfer Triva_** is designed to test your knowledge of surfing history, technology, competition rules, and locales.

Image Placeholder
![Catch a wave!](link goes here)

### Process Journal

#### Project Decision

The trivia option appealed to me because it is very similar to a social app I designed for a class project when I was studying Human-Computer Interaction (HCI) at Iowa State. The app (theBridge) uses contemporary trivia (events from 40 - 70 years ago) to help senior adults connect with each other. I am hopeful that the code I create for the SEIR Project 1 trivia game will give me ideas, maybe even actual code snippets, to use if when I am ready to build theBridge.

The surfing trivia idea came to me while I was going through photos from my holidays the previous week. I had the opportunity over winter break to drive down the Pacific Coast Highway in California where I took beach photos, many of which included surfers. I'm an island girl that has not surfed in years. So, the subject is a nostalgic one for me. I get to _hang loose_ while I code.

#### Getting Started

I created a Trello board for the project to capture tasks, requirements, deliverables, **user stories**, and to track my progress. ..
![GA SEIR 129 Project 1 Trello Board](/images/trello_board.png)

#### Mockups

Following the principal of responsive design to start with the smallest target screen, I sketched mockups by hand using a paper pad with an iPhone template.
![Hand-sketched mockups](/images/IMG_6314.jpg)

Then, I created mockups using Adobe XD where I added more details, including a home page and future improvements to the Question page.
![XD mockups](/images/XD_Mockups.png)

#### Prototypes

Low fidelity prototype: [Low-Fidelity](https://xd.adobe.com/view/83474e16-2e69-4ae0-5a98-d1051f513d9e-f576/)

#### Coding Journal

I created html (index), css, and js files in my project directory. The html houses minimal elements as most of the content will be called by user actions.

Next, I started writing pseudo code in the js file.

Once I had the pseudo code to display a question and 3 possible answers, I started writing js code. The expected behavior is very similar to the Pokemon and Dougie labs, so I used those as my models. The main difference I had to address is that I do not retrieve data from an API.

I tried various approaches to organizing the question-answer data (1 question, 3 possible answers, 1 correct answer. Also, I want to include a hint in the form of an image, but that will probably not happen until the silver version.)
Each approach had advantages and disadvantages. I was concerned that if I created separate objects by type of data (a question object, an answer object, et al), keeping the data matched properly would become a nightmare as I increase the number of questions. I decided to create an object called _questionList_ to house the question, three possible answers, and identify the correct answer. Hou, Jen, Jared, and Esin have each helped me build and update the _questionList_ object as my code went from supporting one question to multiple questions. (BTW, I'm up to six questions now, and one lesson learned is that testing would be much simpler if I only had two or three.)

Coding for the **Let's Play** button was my next challenge. Lessons and labs on manipulating the DOM and adding event listeners provided the guidance I needed to select the button and identify the first function I needed: **handleLetsPlayButton**.

I wanted the **handleLetsPlayButton** function to get a question and the three possible answers. Getting the question when I only had one in my object was simple. Later, when I wanted to call the next question, I needed help

To create the answer buttons, I figured out how to get the desired behavior working if I wrote separate code for each answer to create the button element, add the innerText, and append it to the body. I really wanted to write one block of code that would handle all three possible answers. Hou advised me to use what works now and I could refactor it later to make it more elegant.

Jumping in and coding once I had the pseudo code written for just the Let's Play button turned out to be a poor idea. When something was done, I wasn't clear on what's next. Jen suggested I start with "clean sheet" and write out everything in pseudo code; then, bring over the code from the initial file that I want to keep intact. To do this, I created a new js file (clean-script.js). This really helped me focus on happy path code.  
My testing revealed some ugly behaviors, but since I had all of the initial requirements done, I could tell if my improvements broke anything.

#### Lessons Learned

Not all of my challenges were code related. Here's a short list of other helpful experiences from this project:

- Name projects in github in lower case.
- Learn how to sync origin and master. (More importantly, avoid needing to sync)
- Do not snack all day or night while you code. Stop and eat a real meal.
- Use images that I create or gather from websites that include permissions, such as unsplash.com

### Current Features

The bronze version prompts the user to answer surfing-related questions. Users receive a point

### Technologies Used

HTML, CSS, Javascript

### How to Play

Open this link in your browser: https://2magpies.github.io/ga-seir-project-1/  
Click the **Let's Play** button.  
Choose the answer you think is correct.
If you answer correctly, you score a Rip. If you answer incorrectly, you score a Wipeout. Correct answers are provided so you learn along the way.  
#####Surfer Lingo
Definitions provided by https://www.surfertoday.com/surfing/the-glossary-of-surfing-terms
Rip - to surf very well
Wipeout - an unexpected fall off a surfboard while surfing a wave, or surf accident

### Contribute
