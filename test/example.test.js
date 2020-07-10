// IMPORT MODULES under test here:
// import example from '../example.js';
import { compareNumbers } from '../utils.js';


const test = QUnit.test;

test('Will take in two paramaters and compares them', (assert) => {
    const myParameter1 = 9;
    const myParameter2 = 15;
    const myParameter3 = 18;

    const userGuess1 = 9;
    const userGuess2 = 16;
    const userGuess3 = 16;

    const expected1 = 0;
    const expected2 = -1;
    const expected3 = 1;


    

    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = compareNumbers (myParameter1, userGuess1);
    const actual2 = compareNumbers(myParameter2, userGuess2);
    const actual3 = compareNumbers(myParameter3, userGuess3);

    
    //Assert
    // Make assertions about what is expected versus the actual result
    assert.equal(expected1, actual1);
    assert.equal(expected2, actual2);
    assert.equal(expected3, actual3);
});
