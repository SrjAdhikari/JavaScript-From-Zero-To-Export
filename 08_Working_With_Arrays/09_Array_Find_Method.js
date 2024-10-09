//* ****************************************************
//* Array Find Method In JavaScript
//* ****************************************************


//* find() Method
// The find() method in JavaScript is used to search through an array and return the first element that satisfies a given condition (predicate).
// It stops once it finds the first match and doesn't continue searching. If no element satisfies the condition, it returns undefined.


//* Syntax: array.find(function(element, index, array) {......});

// function:  A function to test each element of the array.
// element: The current element being processed.
// index (optional): The index of the current element.
// array (optional): The array that find() is being called on.


//* ****************************************************

//* Example 1:
// Suppose, you have an array of numbers, and you want to find the first number that is greater than 10.

const numbers = [5, 8, 12, 130, 44];

const result = numbers.find(function(number, index) {
    if(number > 10) {
        console.log(`Number found at index: ${index}`);
        return number;
    }
});

console.log(`First number that is greater than 10 is: ${result}`);


//* Output:
// Number found at index: 2
// First number that is greater than 10 is: 12


//* Explanation:
// 1. Array to Search: [5, 8, 12, 130, 44]
// 2. Predicate (Condition): Find the first number greater than 10 (number > 10).
// 3. Iteration Process:
    // Start with the first element: 5. The condition 5 > 10 is false, so the search continues.
    // Check the second element: 8. The condition 8 > 10 is false, so it moves to the next.
    // Check the third element: 12. The condition 12 > 10 is true. The find() method stops here and returns 12 because it's the first element that satisfies the condition.
// 4. Result: The first number greater than 10 is 12, so 12 is returned.


//* ****************************************************

//* Example 2:
// Suppose, You have a list of products, and you want to find a specific product by its unique ID.

const products = [
    { id: 101, name: 'Laptop', price: 1200 },
    { id: 102, name: 'Mouse', price: 20 },
    { id: 103, name: 'Keyboard', price: 50 }
];

const product = products.find( item => item.id === 102);

console.log(product);   
// Output -> { id: 102, name: 'Mouse', price: 20 } 


//* ****************************************************

//* Example 3: No match found
const priceArray = [100, 150, 300, 250, 500];

const price = priceArray.find( item => item < 100);
console.log(price);         // Output -> undefined

// Here, none of the numbers are smaller than 100, so the result is undefined.

//* ****************************************************