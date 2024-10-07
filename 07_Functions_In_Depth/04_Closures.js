//* **************************************************
//* Closures In JavaScript
//* **************************************************


//* What is Closures ?
// A function inside a function that still has access to the outer function’s variables even when the outer function is no longer in the execution context. This allows the inner function to "remember" the scope (environment) in which it was created.


//* Basic Example:
function outerFunction() {
    let outerVar = "I am outside!";

    function innerFunction() {
        console.log(outerVar);      // innerFunction can access outerVar
    };
    return innerFunction;           // Returning the function definition, not executed yet
};

const closure = outerFunction();    // outerFunction runs, returns innerFunction
closure();                          // It executes the innerFunction that was returned.
// Output -> I am outside!

//* closure() is a function that remembers its surrounding state (like outerVar), allowing it to access it even when the outer function is done.


//* **************************************************

//* Examples:
// 1.
const secureBooking = function () {
    let passengerCount = 0;     // Step 1: Declare a variable to track the number of passengers.

    return function() {         // Step 2: Return an inner function that has access to passengerCount.
        passengerCount++;       // Step 3: Increment the passengerCount each time the inner function is called.
        console.log(`${passengerCount} passengers`);
    };
};

// Step 4: Call secureBooking and store the returned function in "booker".
const booker = secureBooking();

booker();   // Step 5: Call booker, which outputs "1 passengers".
booker();   // Call booker again, which outputs "2 passengers".
booker();   // Call booker again, which outputs "3 passengers".

//* The inner function creates a closure over the "passengerCount" variable. This means it retains access to "passengerCount" even after "secureBooking" has finished executing. The variable "passengerCount" is kept alive in memory for as long as the inner function exists.


//* **************************************************

// 2.
function uniqueIDGenerator () {
    // Step 1: Initialize a variable to store the last ID.
    let lastID = 0;

    // Step 2: Return an inner function that generates IDs.
    return function () {    
        // Step 3: Add a random number between 1 and 100 to the last ID.
        lastID += Math.floor(Math.random() * 100) + 1;
        console.log(`Last created ID: ${lastID}`);
    };
};

// Step 4: Call uniqueIDGenerator and store the returned function in "uniqueID".
const uniqueID = uniqueIDGenerator();

// Step 5: Call uniqueID, which generates a random unique ID on each call.
uniqueID();
uniqueID();
uniqueID();

//* The "generateID" function forms a closure over the "lastID" variable. This means it keeps access to "lastID", even after "uniqueIDGenerator" has finished executing. Therefore, every time you call "uniqueID()", it can update and access the "lastID" variable.


//* **************************************************

// 3.
let f;

const g = function () {
    const a = 25;
    f = function () {
        console.log(a * 2);
    };
};

g();
f();    // Output -> 50

//* The function assigned to "f" forms a closure over "a". Even though "g()" has finished running and "a" is no longer in the scope of "g()", the function assigned to "f" still remembers "a" because of this closure.

//* **************************************************