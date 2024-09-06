//* ****************************************************
//* Functions In JavaScript
//* ****************************************************


//* What is a function ?
//? A function is a block of code that performs a specific task. Functions are reusable blocks of code that can be called multiple times. Functions are defined using the function keyword.


//* ****************************************************

//* Function Declaration:
//? A Function Declaration is the most traditional way to define a function in JavaScript. It uses the function keyword, followed by the function’s name, parameters (if any), and a block of code enclosed in curly braces {} that constitutes the function body.

//* Syntax:
function functionName() {
    // Function body
}


//* Example:
//? 1:
function greet() {
    console.log("Hello, World!");       // Function body
}
greet();

//? 2:
function add(a, b) {
    console.log(`Sum is: ${ a + b}`);   // Function body
}
add(5, 7);
add();  // Output -> NaN => Because arguments are not passed in function call


//* Characteristics of Function Declarations:
//? Hoisting: Function Declarations are hoisted, which means that the function can be called before it is defined in the code.


//* Hoisting Example:
// You can call the function before it's defined due to hoisting
greet("Suraj");

function greet(name) {
    console.log(`Hello, ${name}!`);
}


//******************************************************

//* Function Expression:
//? A Function Expression is a function that is assigned to a variable. Function expressions are anonymous, and are not hoisted. They can be called and used later on in the code.

//* Syntax:
const functionName = function() {
    // Function body
}


//* Example:
//? 1:
const greeting = function(name) {
    console.log(`Hello, ${name}!`);
}
greeting("Suraj");

//? 2:
const multiply = function(a, b) {
    console.log(`Sum is: ${ a * b}`);
}
multiply(5, 10);
multiply();  // Output -> NaN => Because arguments are not passed in function call


//* Characteristics of Function Expressions:
//? Anonymous or Named: Function Expressions are often anonymous (unnamed), although you can assign a name if needed.

//? Not Hoisted: Unlike Function Declarations, Function Expressions are not hoisted, meaning you cannot call the function before it is assigned to a variable.


//* Example of Non-Hoisting:

//? Calling the function before its definition will throw an error
//? This will give an error as greet is not defined
// greet("Suraj"); 

const greet = function(name) {
    console.log(`Hello, ${name}!`);
}


//******************************************************

//* Some other examples of function declarations & expressions:

//? 1: Function Declarations
function sayMyName(){
    console.log("S");
    console.log("u");
    console.log("r");
    console.log("a");
    console.log("j");
}

sayMyName();    // -> Function Execution / Call / Invoke a function
sayMyName;      // -> Function Reference


//? 2: Function Expressions
const sayMyName = function() {
    console.log("S");
    console.log("u");
    console.log("r");
    console.log("a");
    console.log("j");
}
sayMyName();


//? 3: Function Declarations:
function product(num1, num2){
    return num1 * num2;
}

// Store the function in a variable
const ans = product(10, 30);
console.log("Result is : ", ans);       // Output -> Result is :  300

const ans1 = product(10, "30");
console.log("Result is : ", ans1);      // Output -> Result is :  300

const ans2 = product("10", 30);
console.log("Result is : ", ans2);      // Output -> Result is :  300


//? 4: Function Declarations:
function logInMessage(userName){
    return `${userName} just logged in.`;
}

// Store the function in a variable
let message = logInMessage("Suraj");
console.log(message);                   // Output -> Suraj just logged in.

console.log(logInMessage("Srj"));       // Output -> Srj just logged in.
console.log(logInMessage(""));          // Output -> just logged in.
console.log(logInMessage());            // Output -> undefined just logged in.


//? 5: Function Expressions:
const divide = function(a, b) {
    return a / b;
};

console.log(divide(10, 2));             // Output: 5