//* **************************************************************
//* Immediately Invoked Function Expression (IIFE) In JavaScript
//* **************************************************************


//* What is IIFE ?
// IIFE (Immediately Invoked Function Expression) is a JavaScript function that is defined and executed immediately after it is created.


//* Syntax: 
// (function() { ... })();
// (function() { ... }());  <-- Alternative


//* How it works ?
// 1. It starts with a function keyword followed by parentheses (), but without a name. This is called an anonymous function.
// 2. We wrap the function in parentheses ( ... ) to turn it into a function expression. Normally, a function declaration requires a name, but wrapping it in parentheses forces it to be treated as an expression.
// 3. To immediately invoke this function, we add () after the parentheses.


(function() {
    console.log("This is an IIFE");
})();

// The function will execute right after being defined.


//* **************************************************************

//* Examples:
// 1. Simple IIFE
(function () {
    console.log(`This IIFE runs immediately`);
})();


// 2. IIFE with Parameters
(function (a, b) {
    console.log(`The sum of ${a} and ${b} is: ${a + b}`);
}(5, 8));


// 3. IIFE with Arrow Function
(() => {
    console.log(`Arrow function IIFE runs immediately!`);
})();


// 4. IIFE for Data Privacy (Encapsulation)
(function () {
    let privateVar = "This is a private variable";
    console.log(privateVar);
}());

// Trying to access 'privateVar' outside the IIFE will result in an error:
// console.log(privateVar); // ReferenceError: privateVar is not defined


// 5. IIFE to Avoid Polluting the Global Namespace
(function () {
    let myVar = "Inside IIFE";
    console.log(myVar);     // Inside IIFE
})();


(function () {
    let myVar = "Inside another IIFE";
    console.log(myVar);     // Inside another IIFE
})();

// Variables 'myVar' do not clash because they are scoped inside their respective IIFEs.


//* **************************************************************