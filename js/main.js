/* Code for WATS 3020 FizzBuzz Assignment */
//Rosie Sabaric Summer 2018

let isInteger,
    maxNumber,
    fbResults,
    fbText,
    alertWarn;


// `isInteger` used as a control value for the
// `while` loop. Set the initial value to `false`.

isInteger = false;

// Created a `while` loop so user will be prompted to enter a number until
// they enter a good number. This loop is controlled by a conditional
// expression that looks at the value of `isSafeInteger`. When `isSafeInteger`
// becomes `true`, the `while` loop should stop looping.

while (!isInteger) {

// Prompt user for the 'maxNumer' value inside `while` loop
maxNumber = prompt ('Enter a number over 0 (must be an integer):', 20);

// Inside the `while` loop, used a conditional to verify if the `maxNumber`
// is a suitable integer.(integer should be greater than zero.)
alertWarn = maxNumber;
maxNumber = parseInt (maxNumber);
if (Number.isSafeInteger(maxNumber) && maxNumber > 0){
    isInteger = true;
    
} else if (!Number.isSafeInteger(maxNumber)){
    alert (alertWarn + " is not a valid integer. Please enter a number greaten than 0.");

} else if (maxNumber <= 0){
    alert (maxNumber + " is less than or equal to 0. Please enter a number greater than 0.");

}
}

// Initialized the `fbResults` variable to an empty Array
fbResults = [];
// Created a `for` loop that will execute the `maxNumber` of times.

for (let i=1; i <= maxNumber; i++) {
    if (i % 15 == 0) {
        fbResults.push('FizzBuzz');
    } else if (i % 3 == 0) {
        fbResults.push('Fizz'); 
    } else if (i % 5 == 0) {
        fbResults.push('Buzz');
    } else {
        fbResults.push(i);
    }

}

// Created logic inside the `for` loop to calculate FizzBuzz.  This 
// requires the use of several conditional statements that use the `%` operator.
// Store the results of this logic in an array called `fbResults`.

fbText = '';

// In preparation for creating the output text for your FizzBuzz results,
// initialize the `fbText` variable to an empty string.

for (let result of fbResults) {
    fbText = fbText + result + "\n";
}
// Used a `for ... of` loop to concatenate the values from `fbResults`
// into the variable `fbText`.


///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let numDisplay = document.querySelector("#max-number");
numDisplay.innerHTML = maxNumber;
let output = document.querySelector("#output");
output.innerHTML = fbText;
