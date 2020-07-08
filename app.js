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

let winNum = document.getElementById('games-won');
let loseNum = document.getElementById('games-lost');

let winSpan = document.getElementById('games-won-span');
let loseSpan = document.getElementById('games-lost-span');

// initialize state

let correctNumber = Math.ceil(Math.random() * 20);
    correctNumberSpan.textContent = correctNumber;
    console.log(correctNumber);

let triesLeft = Number(4);
triesLeftSpan.textContent = triesLeft;

let winCounter = 0;
let loseCounter = 0;


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
        winCounter++;
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
        loseCounter++;
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
    winNum.textContent = winCounter;
    loseNum.textContent = loseCounter;
    winSpan.style.display = 'flex';
    loseSpan.style.display = 'flex';
}) 