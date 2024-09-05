//* ****************************************************
//* Logical Operator In JavaScript
//* ****************************************************


//* Logical Operators:
//? These operators are used to perform logical operations in JavaScript. These operators are used to determine the truthiness or falsiness of a value.  The most common logical operators are && (AND), || (OR), and ! (NOT).


//* 1. Logical AND (&&):
//? The logical AND operator (&&) returns true if both operands are true. Otherwise, it returns false.

//* Syntax: condition1 && condition2
//? If condition1 is true and condition2 is true, the result is true.
//? If either condition1 or condition2 is false, the result is false.

//* Example:
//? 1:
let age = 25;
let hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("You can drive.");      // This will run.
}
else {
    console.log("You cannot drive.");
}

//? 2:
let username = "user123";
let password = "pass456";

if (username && password) {
    console.log("Login successful!");  // Both are provided, so this will run.
} else {
    console.log("Please provide both username and password.");
}


//* 2. Logical OR (||):
//? The logical OR operator (||) returns true if at least one of the operands is true. If both operands are false, it returns false.

//* Syntax: condition1 || condition2
//? If either condition1 or condition2 is true, the result is true.
//? If both condition1 and condition2 are false, the result is false.

//* Example:
//? 1:
let hasKey = false;
let knowsPassword = true;

if (hasKey || knowsPassword) {
    console.log("You can enter.");      // This will run because one condition is true.
}
else {
    console.log("Access denied.");
}

//? 2:
let hasTicket = false;
let isVIP = true;

if (hasTicket || isVIP) {
    console.log("You can enter the event!");  // Since isVIP is true, this will run.
}
else {
    console.log("You cannot enter the event.");
}


//* 3. Logical NOT (!):
//? The logical NOT operator (!) inverts the truth value of an operand. It turns true to false, and false to true.

//* Syntax: !condition
//? If the condition is true, !condition will return false.
//? If the condition is false, !condition will return true.

//* Example:
//? 1:
let isLoggedIn = true;
if (!isLoggedIn) {
    console.log("Please log in.");
}
else {
    console.log("Welcome!");
}

//? 2:
let email = "";

if (!email) {
    console.log("Email is required.");  // This will run because `email` is an empty string (falsy).
}
else {
    console.log("Email provided.");
}


//* Examples of combining logical operators:
//? 1:
let isAdult = true;
let hasTicket1 = false;
let isVIP1 = true;

if (isAdult && (hasTicket1 || isVIP1)) {
    console.log("You can enter the event.");    // This will run.
}
else {
    console.log("You cannot enter the event.");
}

//? 2:
let isPaidMember = true;
let membershipActive = false;
let isVIP2 = true;

if (isPaidMember && (membershipActive || isVIP2)) {
    console.log("Access granted to premium feature.");  // This will run because the user is a paid member and a VIP.
}
else {
    console.log("Access denied.");
}

//? 3:
let hasDriverLicense = true;
let hasCarInsurance = false;
let isOver18 = true;
let hasGoodVision = true;

if (hasDriverLicense && isOver18 && (hasCarInsurance || hasGoodVision)) {
    console.log("You can rent a car.");     // This will run.
}
else {
    console.log("You cannot rent a car.");
}


//* Summary:
//? The logical AND operator (&&) returns true if both operands are true. Otherwise, it returns false.
//? The logical OR operator (||) returns true if at least one of the operands is true. If both operands are false, it returns false.
//? The logical NOT operator (!) inverts the truth value of an operand. It turns true to false, and false to true.