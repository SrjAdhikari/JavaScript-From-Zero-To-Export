//* ****************************************************
//* Hoisting And TDZ In JavaScript
//* ****************************************************

//* What is Hoisting ?
//? Hoisting is the process where variable and function declarations are moved to the top of their respective scopes during the compilation phase before the code is executed. This means that you can use variables and functions before they are declared in the code.

//? However, Only declarations are hoisted, not initializations.
// For example, var x = 5; is split into two phases:
// Declaration: var x; (hoisted)
// Initialization: x = 5; (not hoisted)

//* ****************************************************
//* How Hoisting Works:
//* ****************************************************

//* 1. Variable Declaration

//* I. Hoisting of Variable Declarations "var"
//? Variable Declarations with "var" are hoisted but set to "undefined" until they are initialized.

console.log(x); // Output -> undefined
var x = 10;
console.log(x); // Output -> 10

//* What happens here?
//? During hoisting, var x is moved to the top, but it is initialized to undefined.
//? So, the first console.log(x) prints undefined, and the second one prints 5 after assignment.

//* Internally, the code is interpreted like this:
var x; // Declaration hoisted to the top
console.log(x); // x is undefined at this point
x = 5; // Now x is assigned the value 5
console.log(x); // Now the value of x is 5

//* II. Hoisting of Variable Declarations "let" and "const"
//? With let and const, the behavior is a bit different from var. They are also hoisted, but they are not initialized and are in a "temporal dead zone" until the actual line of code where they are defined is reached.

console.log(job); // ReferenceError: Cannot access 'job' before initialization
console.log(year); // ReferenceError: Cannot access 'year' before initialization

let job = "Software Developer";
const year = 2020;

console.log(job); // Output -> Software Developer
console.log(year); // Output -> 2020

//* What happens here?
//? The variable "job" and "year" is hoisted, but they ares not accessible before the line where they are initialized. Trying to access them before the initialization throws an error.

//* Internally, the code is interpreted like this:
// "job" and "year" are hoisted to the top, but they are in a "temporal dead zone". They're exists but can't be accessed
console.log(job); // Error, job is in temporal dead zone
console.log(year); // Error, year is in temporal dead zone

let job = "Software Developer"; // job is initialized here
const year = 2020; // year is initialized here

console.log(job); // Output -> Software Developer
console.log(year); // Output -> 2020

//* 2. Hoisting of Function Declarations
//? Function declarations are fully hoisted, meaning you can call a function before you define it in your code.

greet(); // This will work
function greet() {
	console.log("Hello, world!");
}

//* What happens here?
//? Even though greet() is called before its definition, JavaScript moves the function declaration to the top of the code during the execution phase.

//* Internally, the code is interpreted like this:
function greet() {
	console.log("Hello, world!");
}
greet(); // Now it works because the function is hoisted

//* 3. Hoisting of Function Expressions
//? Unlike function declarations, function expressions (functions assigned to a variable) are not hoisted in the same way. Only the variable declaration is hoisted, but not the function definition.

//? Function expressions behave like variables declared with var. The variable is hoisted but the function assignment happens later.

sayHello(); // Error: sayHello is not a function
var sayHello = function () {
	console.log("Hello!");
};

//* What happens here?
//? The variable sayHello is hoisted, but its value is not set to the function until the code reaches the assignment.

//* Internally, the code is interpreted like this:
var sayHello; // Variable is hoisted but set to undefined
sayHello(); // Error: sayHello is undefined at this point
sayHello = function () {
	console.log("Hello!");
};

//* 4. Hoisting of Arrow Function
//? Since arrow functions are function expressions, they behave like variables declared with let or const. Only the declaration is hoisted, not the initialization. The function itself remains uninitialized until the line where it’s defined is executed.

//* I. Arrow Function Hoisting with const
console.log(sayHello); // Output: ReferenceError: Cannot access 'sayHello' before initialization
const sayHello = () => {
	return "Hello!";
};
console.log(sayHello()); // Output: "Hello!"

//* What happens here?
//? The arrow function sayHello is declared with const.
//? Because const variables are hoisted in a different way (they are in a "temporal dead zone" until they are initialized), you get a ReferenceError when trying to access sayHello before its declaration.

//* II. Arrow Function Hoisting with let
console.log(add); // Output: ReferenceError: Cannot access 'add' before initialization
let add = (a, b) => a + b;
console.log(add(5, 3)); // Output: 8

//* What happens here?
//? Similar to const, the let keyword also puts the variable add into a "temporal dead zone" until the line let add = ... is executed.
//? Attempting to use add before the declaration results in a ReferenceError.

//* Key Points:
//? Variable Declarations with "var" are hoisted but initialized to undefined.
//? "let" and "const" are hoisted but not initialized, and they reside in a "temporal dead zone" until the line where they are initialized is reached.
//? Function Declarations are hoisted completely, so you can call the function before defining it.
//? Function Expressions behave like var variables—only the variable is hoisted, not the function itself.
