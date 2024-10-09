//* ****************************************************
//* Array FindIndex Method In JavaScript
//* ****************************************************


//* findIndex() Method
// The findIndex() method in JavaScript is used to find the index of the first element in an array that satisfies a provided testing function.
//  If no element satisfies the condition, it returns -1.


//* Syntax: array.findIndex(function(element, index, array) {......});

// function:  A function to test each element of the array.
// element: The current element being processed.
// index (optional): The index of the current element.
// array (optional): The array that findIndex() is being called on.


//* ****************************************************

//* Example 1:
// Suppose, you have an array of numbers, and you want to find the first number that is greater than 10.

const numbers = [5, 8, 12, 130, 44];
const foundIndex = numbers.findIndex( num => num > 10);
console.log(`The first number that is greater than 10 is: ${foundIndex}`);

// Output -> The first number that is greater than 10 is: 2


//* Explanation:
// 1. Array to Search: [5, 8, 12, 130, 44]
// 2. Predicate (Condition): Find the first number greater than 10 (number > 10).
// 3. Iteration Process:
    // Start with the first element: 5. The condition 5 > 10 is false, so the search continues.
    // Check the second element: 8. The condition 8 > 10 is false, so it moves to the next element.
    // Check the third element: 12. The condition 12 > 10 is true. The findIndex() method stops here and returns the index of this element, which is 2.
// 4. Result: The index of the first element that satisfies the condition is 2.


//* ****************************************************

//* Example 2:
// Suppose, You have a list of products, and you want to find a specific product by its unique ID.

const products = [
    { id: 101, name: 'Laptop', price: 1200 },
    { id: 102, name: 'Mouse', price: 20 },
    { id: 103, name: 'Keyboard', price: 50 }
];

const product = products.findIndex( item => item.id === 102);
console.log(product);       // Output -> 1

// findIndex() helps to locate the product with ID 102 by returning its index in the array, which is 1.


//* ****************************************************

//* Example 3: No match found
const priceArray = [100, 150, 300, 250, 500];

const price = priceArray.findIndex( item => item < 100);
console.log(price);         // Output -> -1

// Here, none of the numbers are greater than 100, so the method returns -1.


//* ****************************************************

//* Example 4:
const values = [5, 8, 12, 130, 44];

const index = values.findIndex( (value, index) => {
    console.log(`Checking index ${index}: ${value}`);
    return value > 100;
});

console.log(`Number greater than 100 found at index: ${index}`);

//* Output:
/*
    Checking index 0: 5
    Checking index 1: 8
    Checking index 2: 12
    Checking index 3: 130
    Number greater than 100 found at index: 3
*/

//* ****************************************************