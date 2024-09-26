//* ****************************************************
//* Nullish Coalescing Operator In JavaScript
//* ****************************************************

//* What is Nullish Coalescing Operator ?
// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

//* Syntax:
//? let result = leftValue ?? rightValue;

// If leftValue is null or undefined, it will return rightValue.
// If leftValue is anything else (like 0, false, ""), it will return leftValue.

//* Examples:
// 1:
const a = 10;
const b = 20;
console.log(a ?? b); // Output: 10

//* Explanation:
// variable a is 10 (a non-nullish value), so the ?? operator returns 10.

// 2:
const x = null;
const y = 10;
console.log(x ?? y); // Output: 10

//* Explanation:
// variable x is null (a nullish value), so the ?? operator returns 10.

// 3.
const userName = null;
const defaultName = "suraj";
console.log(userName ?? defaultName); // Output: suraj

//* Explanation:
// userName is null, so ?? returns defaultName, which is "suraj".

// 4.
const price = 100;
const discount = undefined;
console.log(discount ?? price); // Output: 100

//* Explanation:
// discount is undefined, so ?? returns price, which is 100.

// 5.
const i = null;
const j = 100;
const k = 500;
console.log(i ?? j ?? k); // Output: 100
console.log(k ?? i ?? j); // Output: 500

// 6.
console.log(null ?? "suraj" ?? 200); // Output: suraj

// 7.
console.log(null ?? undefined ?? "suraj"); // Output: suraj

// 8.
let age;
let defaultAge = 20;
console.log(age ?? defaultAge); // Output: 20

//* Explanation:
// age is undefined, so ?? returns defaultAge, which is 20.

// 9.
let firstname = "Suraj";
let lastname = "Adhikari";
console.log(firstname ?? lastname); // Output: Suraj

// 10.
let score = 0;
let highScore = 100;
let finalScore = score ?? highScore;
console.log(finalScore); // Output: 0

//* Explanation:
// score is 0, which is a valid value, so the ?? operator returns 0 instead of highScore.

//* Summary:
//? The Nullish Coalescing Operator (??) returns the right-hand value if the left-hand value is either null or undefined.
//? It is different from the || operator because ?? does not treat falsy values (like 0, false, or "") as invalid.
