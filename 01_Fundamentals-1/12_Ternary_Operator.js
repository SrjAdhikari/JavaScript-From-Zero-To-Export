//* ****************************************************
//* Ternary Operator In JavaScript
//* ****************************************************


//* What is Ternary Operator ?
//? The ternary operator in JavaScript is a shorthand for writing simple if/else statements. It’s called “ternary” because it takes three operands: a condition, a result if the condition is true, and a result if the condition is false.


//* Syntax:
//? condition ? expressionIfTrue : expressionIfFalse;

//? condition: This is the condition that evaluates to either true or false.
//? expressionIfTrue: The expression to be executed if the condition is true.
//? expressionIfFalse: The expression to be executed if the condition is false.


//* Examples:
//? 1: Simple Ternary Operator
let age = 25;
let message = (age >= 18) ? "You are an adult." : "You are not an adult.";
console.log(message);       // Output: You are an adult.


//? 2: Simple Ternary Operator
let isRaining = true;
let activity = isRaining ? "Stay inside" : "Go outside";
console.log(activity);      // Output: "Stay inside"


//? 3: Assigning Values Based on Condition
let isMember = true;
let discount = isMember ? 10 : 0;
console.log(discount);      // Output: 10 (since `isMember` is true)


//? 4: Ternary with Expressions
let num = 5;
let result = (num % 2 === 0) ? "Even" : "Odd";
console.log(result);        // Output: "Odd" (since 5 is odd)


//? 5: Nesting Ternary Operators
let score = 85;
let grade = (score >= 90) ? "A" :
            (score >= 80) ? "B" :
            (score >= 70) ? "C" :
            (score >= 60) ? "D" : "F";
console.log(grade);         // Output: "B" (since score is 85)


//* Summary:
//? Ternary operator is a compact alternative to if/else.
//? It's best suited for simple conditional checks.
//? Avoid deeply nesting ternary operators as they can reduce readability.