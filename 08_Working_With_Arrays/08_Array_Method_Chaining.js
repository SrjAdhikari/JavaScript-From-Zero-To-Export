//* ****************************************************
//* Array Method Chaining In JavaScript
//* ****************************************************


//* What is Array Method Chaining ?
// Array method chaining is the process of calling multiple array methods one after another, where the output of one method becomes the input for the next. 

// JavaScript array methods such as map(), filter(), reduce(), sort(), and others return arrays or values, making them ideal for chaining.


//* ****************************************************

//* Comparison of Comparison of map(), filter(), and reduce()
/*
    ¦===========================================================================================================================================================¦ 
    ¦   Method    ¦       Parameters for Callback           ¦       Returns                        ¦    Example Use Case                                        ¦ 
    ¦===========================================================================================================================================================¦ 
    ¦   map()	  ¦   Transforms each element in an array	¦    New array                         ¦    Modify each element (e.g., double all numbers)          ¦
    ¦   filter()  ¦   Filters elements based on a condition	¦    New array (with fewer elements)   ¦    Select specific elements (e.g., get adults)             ¦
    ¦   reduce()  ¦   Reduces the array to a single value	¦    Single value (or object)          ¦    Combine elements (e.g., sum of all elements, grouping)  ¦
    ¦-----------------------------------------------------------------------------------------------------------------------------------------------------------¦
*/

//* ****************************************************

//* Example 1:
// Suppose you have an array of numbers, and you want to:
// 1. Double each number.
// 2. Filter out numbers that are greater than 10.
// 3. Sum the remaining numbers.

const numbers = [1, 2, 5, 15, 25, 50];

const result = numbers
    .map( num => num * 2)                   // Step 1: Double up each number [2, 4, 10, 30, 50, 100]
    .filter( num => num >= 10)              // Step 2: Filter number >= 10 [10, 30, 50, 100]
    .reduce( (acc, num) => acc + num, 0);   // Step 3: Sum all numbers (10 + 30 + 50 + 100)

console.log(`The result is: ${result}`);    // Output -> The result is: 190


//* Explanation:
// 1. map(): The map() method is used first to double each element in the array. The result is a new array: [2, 4, 10, 30, 50, 100].

// 2. filter(): Next, the filter() method is chained to filter out any numbers that are greater than 10. The result is a new array: [10, 30, 50, 100]

// 3. reduce(): Finally, the reduce() method is used to sum up the remaining numbers. The accumulator starts at 0 and each element in the array is added to it. The result is the sum: 190.


//* ****************************************************

//* Example 2:
// Suppose you have an array of products, and you want to perform the following tasks:
// 1. Filter out products that cost more than $50.
// 2. Extract just the names of the filtered products.
// 3. Sort the product names alphabetically.

const products = [
    { name: 'Laptop', price: 1200 },
    { name: 'Mouse', price: 20 },
    { name: 'Keyboard', price: 50 },
    { name: 'Monitor', price: 200 },
    { name: 'Headphones', price: 45 }
];

const product = products
    .filter( product => product.price > 50)     // Step 1: Filter products with price > 50
    .map( product => product.name)              // Step 2: Map to get product names
    .sort();                                    // Step 3: Sort the product names alphabetically

console.log(`Products that cost more than $50 are: ${product}`);

// Output -> Products that cost more than $50 are: Laptop,Monitor


//* ****************************************************

//* Example 3:
// Suppose you have an array of transactions , and you want to:
// 1. Filter out the deposit transactions.
// 2. Extract the amount of the deposit transactions.
// 3. Sum all deposit amount.

const transactions = [
    { type: 'deposit', amount: 100 },
    { type: 'withdrawal', amount: 50 },
    { type: 'deposit', amount: 200 },
    { type: 'withdrawal', amount: 30 }
];

const depositMoney = transactions
    .filter( transaction  => transaction .type === "deposit")   // Step 1: Filter transactions with type deposits
    .map( transaction  => transaction .amount)                  // Step 2: Map to get deposit amounts
    .reduce( ( acc, amount ) => acc + amount, 0);               // Step 3: Sum all deposit amount

console.log(`Total deposit amount is: ${depositMoney}`);

// Output -> Total deposit amount is: 300

//* ****************************************************