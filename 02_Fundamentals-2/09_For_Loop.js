//* ****************************************************
//* For Loop In JavaScript
//* ****************************************************


//* What is For Loop ?
//? A for loop in JavaScript is a control flow statement that allows you to execute a block of code multiple times. It’s useful when you know beforehand how many times you want to repeat a task.


//* Syntax:
for (initialization; condition; increment) {
    // code to be executed
}

//? initialization: This happens once at the beginning of the loop. Typically used to initialize a loop counter.
//? condition: The loop will continue as long as this condition is true.
//? increment: After each iteration, this expression is executed, usually to update the loop counter.


//* Examples:
//? 1: Print number from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


//? 2: Print number from 10 to 1
for (let i = 10; i >= 1; i--) {
    console.log(i);
}


//? 3: Print sum of numbers from 1 to 10
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(`Sum of numbers from 1 to 10 is: ${sum}`);
// Output -> Sum of numbers from 1 to 10 is: 55


//* Looping through an array:
//? 1:
const number = [10, 20, 30, 40, 50];
console.log(`Array length: ${number.length}`);

for (let i = 0; i < number.length; i++) {
    console.log(`Element at index ${i}: ${number[i]}`);
}
// Output:
// Array length: 5
// Element at index 0: 10
// Element at index 1: 20
// Element at index 2: 30
// Element at index 3: 40
// Element at index 4: 50


//? 2:
const fruits = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
    console.log(`Element at index ${i}: ${fruits[i]}`);
}
// Output:
// Element at index 0: apple
// Element at index 1: banana
// Element at index 2: orange


//? 3:
const userInfo = ["Suraj", 2024 - 1996, "male", true, ["coding", "reading", "gaming"]];
console.log(`Array length: ${userInfo.length}`);

console.log(`Printing all elements of array: `);
for (let i = 0; i < userInfo.length; i++) {
    console.log(`Element at index ${i}: ${userInfo[i]}`);
}
// Output:
// Array length: 5
// Printing all elements of array:
// Element at index 0: Suraj
// Element at index 1: 25
// Element at index 2: male
// Element at index 3: true
// Element at index 4: (3) ["coding", "reading", "gaming"]


//? Practice: 
//? 1: Create a new array that contains the types of each element in the person array elements.

const person = ["Suraj", 2024 - 1996, "male", true, ["coding", "reading", "gaming"]];
const types = [];                               // Initialize an empty array to store the types of each element

for (let i = 0; i < person.length; i++) {
    types.push(typeof person[i]);               // Add the type of each element to the types array
    // types[i] = typeof userInfo[i];           // Add the type of each element to the types array
}
console.log(types);                             // Print the types array
// Output -> [ 'string', 'number', 'string', 'boolean', 'object' ]


//? 2: Create a new array that contains the age that is calculated from the years array.

const years = [1970, 1971, 1972, 1973, 1974];
const ages = [];                                // Initialize an empty array to store the calculated ages

for (let i = 0; i < years.length; i++) {
    ages.push(2024 - years[i]);                 // Calculate the age and add it to the ages array
}
console.log(ages);                              // Output -> [44, 43, 42, 41, 40]