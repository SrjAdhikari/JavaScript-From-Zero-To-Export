//* ****************************************************
//* Conditions In JavaScript
//* ****************************************************


//* What is condition ?
//? A condition is an expression that evaluates to either true or false. Conditions are used to control the flow of the program, determining which block of code should be executed based on the truthfulness of the expression.

//* Why conditions are important ?
//? Conditions allow you to make decisions in your code, enabling dynamic behavior based on user input, data state, or other factors.

//? **************************************************** //

//* 1. if Statement:
//? The if statement executes a block of code only if the given condition is true.

//* Syntax:
if (condition) {
    // code to run if the condition is true
}

//* Example:
//? 1:
let age = 20;

if (age >= 18) {
    console.log("You are an adult.");     // This will run since age is 20.
}

//? 2:
let num1 = 2;
let num2 = 2;
if(num1 == num2){
    console.log(`Both values are equal`);   // This will run since both values are equal.
}

//? 3:
let num3 = 2;
let num4 = "2";
if(num3 === num4){
    console.log(`Both values are equal`);  // Nothing print because their type is not same.
}


//? **************************************************** //

//* 2. if/else Statement:
//? The if/else statement adds an alternative block of code (the else block) to execute when the condition is false.

//* Syntax:
if (condition) {
    // code to run if the condition is true
}
else {
    // code to run if the condition is false
}

//* Example:
//? 1:
age = 15;

if (age >= 18) {
    console.log("You are an adult.");
}
else {
  console.log("You are not an adult.");     // This will run since age is 15.
}

//? 2:
let value = -10;
if (value > 0) {
    console.log(`Value is positive`);
}
else {
    console.log(`Value is negative`);
}

//? 3:
let temperature = 25;

if (temperature > 20) {
    console.log("It's a nice day!");
}
else if (temperature > 10) {
    console.log("It's a comfortable day.");
}
else {
    console.log("It's a bit chilly.");
}


//? **************************************************** //

//* 3. if/else if/else Statement:
//? The if/else if/else structure lets you check multiple conditions in sequence. It checks each condition until one is found to be true, and if none are true, it runs the else block.

//* Syntax:
if (condition1) {
    // code to run if condition1 is true
}
else if (condition2) {
    // code to run if condition2 is true and condition1 is false
}
else {
    // code to run if both condition1 and condition2 are false
}

//* Example:
//? 1:
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
}
else if (score >= 80) {
    console.log("Grade: B"); // This will run since score is 85.
}
else if (score >= 70) {
    console.log("Grade: C");
}
else {
    console.log("Grade: F");
}

//? 2:
let balance = 1000;
if(balance < 500){
    console.log(`Balance is less than 500`);
}
else if(balance < 750){
    console.log(`Balance is less than 750`);
}
else if(balance < 950){
    console.log(`Balance is less than 950`);
}
else{
    console.log(`Balance is greater than 950`);
}

//* Explanation:
//? if block: Executes only when the specified condition is true.
//? else block: Executes only if none of the previous conditions are true.
//? else if block: Allows for additional conditions to check before falling back to the else block.