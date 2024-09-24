//* ****************************************************
//* Variable Scope In JavaScript
//* ****************************************************

//* What is Scope ?
//? Scope determines the accessibility of variables and functions in different parts of your code. It defines where variables are created, where they can be accessed, and what kind of behavior they have in different contexts.

//* Types of Scope:
//? 1. Global Scope
//? 2. Function Scope
//? 3. Block Scope

//* 1. Global Scope:
//? Any variable that is declared outside of functions or blocks ({}) is considered a global variable.
//? Global variables can be accessed from anywhere in the program, both inside functions and in the global context.

//* Example:
let mesage = "Hello!, Good Morning"; // Global variable
function greet() {
	console.log(mesage); // Accessible inside a function
}
greet(); // This will print: "Hello!, Good Morning"
console.log(mesage);

//* 2. Local/Function Scope:
//? Any variable that is declared inside of a function ({}) is considered a local variable.
//? Local variables can only be accessed inside that function. They cannot be accessed from outside.

//* Example:
function addition() {
	let num1 = 10;
	let num2 = 20;
	console.log(`Sum of ${num1} and ${num2} is: ${num1 + num2}`); // num1 and num2 are accessible inside the function only
}
addition(); // This will print: 30
console.log(num1, num2); // This will throw an error, because num1 and num2 are not accessible outside the function

//* 3. Block Scope:
//? Introduced with ES6, block scope refers to the variables declared with "let" and "const" inside curly braces {}, such as in if, for, and while blocks.
//? Variables inside a block are only accessible within that block.

//* Example:
const age = 20;
if (age >= 18) {
	let userName = "Alice";
	console.log(`${userName} is illegible to get a driver's license.`); // userName is accessible inside the block
}
console.log(userName); // This will throw an error, because "userName" is a local variable and is not accessible outside the block
console.log(age); // This will print: 20, because "age" is a global variable and is accessible outside the block
