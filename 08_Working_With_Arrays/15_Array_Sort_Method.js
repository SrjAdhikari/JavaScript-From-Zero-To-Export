//* ****************************************************
//* Array Sort Method In JavaScript
//* ****************************************************


//* sort() Method
// The sort() method in JavaScript is used to arrange the elements of an array either in ascending or descending order. 
// By default, it sorts elements as strings, which can lead to unexpected results when sorting numbers. 


//* Syntax: array.sort();


//* ****************************************************

//* Example 1: Sorting Strings (Default Behavior)
const fruits = ["Mango, Grape", "Watermelon", "Apple", "Banana"];
fruits.sort();

console.log(`Array after sort:`);
console.log(fruits);        // Output -> [ 'Apple', 'Banana', 'Mango, Grape', 'Watermelon' ]


//* Explanation:
// The sort() method sorts the strings in alphabetical order. It compares string characters using their UTF-16 code unit values.


//* ****************************************************

//* Example 2: Sorting Numbers
// When sort() is used without a comparison function on an array of numbers, it converts them to strings and then compares them lexicographically.

const numbers = [25, 100, 10, 2];
numbers.sort();

console.log(`Array after sort:`);
console.log(numbers);        // Output -> [ 10, 100, 2, 25 ]


//* Explanation:
// 1. This result might seem strange, but it's because sort() compares '10' with '2' as strings, not as numbers.
// 2. Lexical sorting means that '10' comes before '2', leading to an incorrect order.


//* ****************************************************

//* Using a Comparison Function to Sort Numbers
// To properly sort numbers, you need to provide a comparison function. This function compares two values and determines their order.


//* Syntax:
// array.sort((a, b) => a - b);     // Ascending order
// array.sort((a, b) => b - a);     // Descending order


//* ****************************************************

//* Example 3: Ascending Order
const nums = [200, 450, -400, 3000, -650, -130, 70, 1300];
nums.sort( (a, b) => a - b);

console.log(`Array after sort:`);
console.log(nums);        // Output -> [ -650, -400, -130, 70,  200,  450, 1300, 3000 ]


//* Explanation:
// 1. The comparison function (a, b) => a - b compares two numbers, a and b.
// 2. If the result is:
    // Negative (a < b), a comes before b.
    // Zero (a === b), the order remains unchanged.
    // Positive (a > b), b comes before a.


//* ****************************************************

//* Example 4: Descending  Order
const numArray = [200, 450, -400, 3000, -650, -130, 70, 1300];
numArray.sort( (a, b) => b - a);

console.log(`Array after sort:`);
console.log(numArray);        // Output -> [ 3000, 1300,  450, 200,   70, -130, -400, -650 ]

// b - a sorts numbers in descending order.


//* ****************************************************

//* Example 5: Sorting Objects by Property
const users = [
    { name: 'John', age: 25 },
    { name: 'Anna', age: 22 },
    { name: 'Mike', age: 32 }
];

users.sort( (a, b) => a.age - b.age);
console.log(users);

// The comparison function (a, b) => a.age - b.age sorts the array of objects based on the age property in ascending order.

//* Output:
/* [
    { name: 'Anna', age: 22 },
    { name: 'John', age: 25 },
    { name: 'Mike', age: 32 }
] */

//* ****************************************************