// import functions and grab DOM elements
import { compareNumbers } from './utils.js'

const guessButton = document.getElementById('guess-submit-button');
const newNumberButton = document.getElementById('new-number-button');

let guessNumber = document.getElementById('guess-number');

let highOrLow = document.getElementById('high-or-low-span');

let triesLeftSpan = document.getElementById('tries-left-span');
let triesLeftP = document.getElementById('tries-left-p');

const winOrLose = document.getElementById('win-lose-section');
const winner = document.getElementById('winner-header');
const loser = document.getElementById('loser-header');
const correctNumberSpan = document.getElementById('correct-number-span');

// initialize state

let correctNumber = Math.ceil(Math.random() * 20);
    correctNumberSpan.textContent = correctNumber;
    console.log(correctNumber);

let triesLeft = Number(4);
triesLeftSpan.textContent = triesLeft;

// set event listeners to update state and DOM

guessButton.addEventListener('click', () => {

    let guess = guessNumber.value;
    console.log(guess);
    
    triesLeft--;
    triesLeftSpan.textContent = triesLeft;

    let comparision = compareNumbers(guess, correctNumber);
    console.log(comparision);

    if (comparision === 0) {
        winOrLose.style.display = 'flex';
        winner.style.display = 'flex';
        guessButton.style.display = 'none';
        newNumberButton.style.display = 'flex';
        highOrLow.style.display = 'none';
        triesLeftP.style.visibility = 'hidden';
    }
    else if (comparision === -1) {
        highOrLow.style.display = 'flex';
        highOrLow.textContent = "Too Low";
    }
    else if (comparision === 1) {
        highOrLow.style.display = 'flex';
        highOrLow.textContent = "Too High";
    }

    if (triesLeft === 0 && comparision !== 0) {
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
    winner.style.display = 'none';
    loser.style.display = 'none';
    correctNumber = Math.ceil(Math.random() * 20);
    correctNumberSpan.textContent = correctNumber;
    console.log(correctNumber);
    triesLeftP.style.visibility = 'visible';
    guessNumber.value = 0;
}) 