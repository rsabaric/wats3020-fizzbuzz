/* Code for WATS 3020 FizzBuzz Assignment */
//Rosie Sabaric Summer 2018

let isInteger,
    maxNumber,
    fbResults,
    fbText;


// TODO: Initialize a variable `isInteger` to use as a control value for the
// `while` loop. Set the initial value to `false`.

// TODO: Create a `while` loop so user will be prompted to enter a number until
// they enter a good number. This loop should be controlled by a conditional
// expression that looks at the value of `isSafeInteger`. When `isSafeInteger`
// becomes `true`, the `while` loop should stop looping.

// TODO: Inside `while` loop prompt the user for the `maxNumber` value.

// TODO: Inside the `while` loop, use a conditional to verify if the `maxNumber`
// is a suitable integer. (It should be an integer greater than zero.)

// TODO: If the value of `maxNumber` is suitable, then change the value of
// `isInteger` so the `while` loop stops looping.

// TODO: Initialize the `fbResults` variable to an empty Array

// TODO: Create a `for` loop that will execute the `maxNumber` of times.

// TODO: Create logic inside the `for` loop to calculate FizzBuzz.  This will
// require the use of several conditional statements that use the `%` operator.
// Store the results of this logic in an array called `fbResults`.

// TODO: In preparation for creating the output text for your FizzBuzz results,
// initialize the `fbText` variable to an empty string.

// TODO: Use a `for ... of` loop to concatenate the values from `fbResults`
// into the variable `fbText`.


///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let numDisplay = document.querySelector("#max-number");
numDisplay.innerHTML = maxNumber;
let output = document.querySelector("#output");
output.innerHTML = fbText;
