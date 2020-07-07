// import functions and grab DOM elements
import { compareNumbers } from './utils.js'

const guessButton = document.getElementById('guess-submit-button');
const newNumberButton = document.getElementById('new-number-button');
let guessNumber = document.getElementById('guess-number').value;
let highOrLow = document.getElementById('high-or-low-span');
let triesLeftSpan = document.getElementById('tries-left-span');
const winOrLose = document.getElementById('win-lose-section');
const winner = document.getElementById('winner-header');
const loser = document.getElementById('loser-header');
const correctNumberSpan = document.getElementById('correct-number-span');

let correctNumber = Math.ceil(Math.random() * 20);

let triesLeft = Number(4);
triesLeftSpan.textContent = triesLeft;


// initialize state

// set event listeners to update state and DOM

guessButton.addEventListener('click', () => {
    highOrLow.style.display = 'flex';
    highOrLow.textContent = guessNumber;

    correctNumberSpan.textContent = correctNumber;

    compareNumbers(guessNumber, correctNumber);
    
    triesLeft--;
    triesLeftSpan.textContent = triesLeft;

    if (compareNumbers === 0) {
        winOrLose.style.display = 'flex';
        winner.style.display = 'flex';
        guessButton.style.display = 'none';
        newNumberButton.style.display = 'flex';
    }
    if (compareNumbers === -1) {
        highOrLow.style.display = 'flex';
        highOrLow.textContent = "Too Low";
    }
    if (compareNumbers === 1) {
        highOrLow.style.display = 'flex';
        highOrLow.textContent = "Too High";
    }

    if (triesLeft === 0) {
       winOrLose.style.display = 'flex';
       loser.style.display = 'flex';
       guessButton.style.display = 'none';
       newNumberButton.style.display = 'flex';
   }

}) 

newNumberButton.addEventListener('click', () => {
    triesLeft = Number(4);
    triesLeftSpan.textContent = triesLeft;
    highOrLow.style.display = 'none';
    winOrLose.style.display = 'none';
    guessButton.style.display = 'flex';
    newNumberButton.style.display = 'none';
    correctNumber = Math.ceil(Math.random() * 20);
}) 