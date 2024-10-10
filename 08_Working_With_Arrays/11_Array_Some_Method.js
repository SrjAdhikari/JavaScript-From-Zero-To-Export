//* ****************************************************
//* Array Some Method In JavaScript
//* ****************************************************


//* some() Method
// The some() checks if at least one element in the array satisfies the condition.


//* Syntax: array.some(function(element, index, array) {......});

// function:  A function to test each element of the array.
// element: The current element being processed.
// index (optional): The index of the current element.
// array (optional): The array that some() is being called on.


//* How it works:
// 1. The some() method tests whether at least one element in the array passes the test implemented by the provided function.
// 2. It returns true as soon as it finds an element that satisfies the condition.
// 3. If no elements pass the test, it returns false.


//* ****************************************************

//* Example 1: Check if Any Number is Greater Than 10
const numbers = [5, 8, 12, 130, 44];

const hasLarger = numbers.some( num => num > 10);
console.log(hasLarger);     // Output -> true


//* Explanation:
// 1. Array: [5, 8, 12, 130, 44]
// 2. Condition: Find if any number is greater than 10.
// 3. Iteration Process:
    // First element: 5 → Condition 5 > 10 is false, so it continues.
    // Second element: 8 → Condition 8 > 10 is false, so it continues.
    // Third element: 12 → Condition 12 > 10 is true. The some() method stops here and returns true because at least one element (12) satisfies the condition.
// 4. Result: true


//* ****************************************************

//* Example 2: If No Element Matches
// If no elements in the array match the condition, some() returns false.

const numArray = [1, 2, 3, 5, 8];

const hasNumber = numArray.some(function(num) {
    return num > 10;
});

console.log(hasNumber);     // Output -> false


//* ****************************************************

//* Example 3:
const moneyArray = [200, 450, -400, 3000, -650, -130, 70, 1300];

const hasDeposits = moneyArray.some( money => money > 0);
console.log(hasDeposits);     // Output -> true

//* ****************************************************