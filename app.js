// import functions and grab DOM elements
import { compareNumbers } from './utils.js'

const guessButton = document.getElementById('guess-submit-button');
const guessNumber = document.getElementById('guess-number').value;
const highOrLow = document.getElementById('high-or-low-span');
const triesLeft = document.getElementById('tries-left-span');
const winOrLose = document.getElementById('win-lose-section');
const winner = document.getElementById('winner-header');
const loser = document.getElementById('loser-header');
const correctNumber = document.getElementById('correct-number-span');


// initialize state

// set event listeners to update state and DOM

guessButton.addEventListener('click', () => {
    winOrLose.style.display = 'flex';
    correctNumber = guessNumber;
})