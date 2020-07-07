export function compareNumbers (guessNumber, correctNumber) {
    if(guessNumber === correctNumber) {
        return 0;
    }
    if (guessNumber < correctNumber) {
        return -1;
    }
    if (guessNumber > correctNumber) {
        return 1;
    }
}