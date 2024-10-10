//* ****************************************************
//* Array Every Method In JavaScript
//* ****************************************************


//* every() Method
// The every() checks if all elements in the array satisfy the condition.


//* Syntax: array.every(function(element, index, array) {......});

// function:  A function to test each element of the array.
// element: The current element being processed.
// index (optional): The index of the current element.
// array (optional): The array that some() is being called on.


//* How it works:
// 1. The every() method tests whether all elements in the array pass the test implemented by the provided function.
// 2. It returns true only if all elements satisfy the condition.
// 3. If even one element fails the condition, it returns false.


//* ****************************************************

//* Example 1: Check if All Numbers Are Greater Than 10
const numbers = [5, 8, 12, 130, 44];

const allLarger = numbers.every( num => num > 10);
console.log(allLarger);     // Output -> false


//* Explanation:
// 1. Array: [5, 8, 12, 130, 44]
// 2. Condition: Check if all numbers are greater than 10.
// 3. Iteration Process:
    // First element: 5 → Condition 5 > 10 is false. The every() method immediately stops and returns false because not all elements satisfy the condition.
// 4. Result: false


//* ****************************************************

//* Example 2: All Elements Satisfy the Condition
// If all elements in the array satisfy the condition, every() returns true.

const numArray = [12, 130, 44];

const allNumber = numArray.every(function(num) {
    return num > 10;
});

console.log(allNumber);     // Output -> true


//* Explanation:
// 1. Array: [12, 130, 44]
// 2. Condition: Check if all numbers are greater than 10.
// 3. Iteration Process:
    // First element: 12 → Condition 12 > 10 is true, so it continues.
    // Second element: 130 → Condition 130 > 10 is true, so it continues.
    // Third element: 44 → Condition 44 > 10 is true.
    // All elements satisfy the condition, so the every() method returns true.
// 4. Result: true


//* ****************************************************

//* Example 3: If No Element Matches
// If no elements in the array match the condition, some() returns false.

const array = [1, 2, 3, 5, 8];

const allGreater = array.every(function(num) {
    return num > 10;
});

console.log(allGreater);     // Output -> false


//* ****************************************************

//* Example 4: Check if all products have a price less than 2000.
const products = [
    { name: 'Laptop', price: 1200 },
    { name: 'Mouse', price: 25 },
    { name: 'Keyboard', price: 50 }
];

const areAllProductsAffordable = products.every(product => product.price < 2000);
console.log(areAllProductsAffordable);      // Output: true


//* ****************************************************

//* Differences Between some() and every()
// some():
    // Returns true if at least one element passes the test.
    // Stops as soon as it finds one matching element.
    // Returns false if no elements pass the test.

// every():
    // Returns true only if all elements pass the test.
    // Stops as soon as it finds one element that doesn’t match.
    // Returns false if even one element fails the test.

//* ****************************************************