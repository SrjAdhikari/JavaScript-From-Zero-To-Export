//* ****************************************************
//* Array Destructuring In JavaScript
//* ****************************************************

//* What is Array Destructuring ?
//? Array destructuring is a way to extract values from arrays and assign them directly to distinct variables, without acessing array elements individually.

//* Array Destructuring Syntax:
//? const [var1, var2] = arrayName;
//? Here, var1 and var2 get the values from the array.

//* 1. Basic Example of Array Destructuring
const numbers = [10, 20, 30];
const [first, second, third] = numbers;

console.log(first); // Output: 10
console.log(second); // Output: 20
console.log(third); // Output: 30

//* Explanation:
//? The numbers array contains 3 values: 10, 20, and 30.
//? The array destructuring syntax [first, second, third] extracts the values from the array and assigns them to the respective variables first, second, and third.

//* 2. Array Destructuring by Skipping Values
//? If you don't want to assign a value to a variable, you can skip it using the comma operator.

const colors = ["Red", "Green", "Blue", "Yellow", "Orange"];
const [firstColor, , thirdColor] = colors;

console.log(firstColor); // Output: Red
console.log(thirdColor); // Output: Blue

//* Explanation:
//? The second value ('Green') is skipped by using an empty space ,, and the first and third value is assigned to firstColor and thirdColor.

//* 3. Array Destructuring with Default Values
//? You can assign default values when destructuring, in case the array does not have enough elements.

const fruits = ["Apple", "Banana"];
const [firstFruit, secondFruit, thirdFruit = "Mango"] = fruits;

console.log(firstFruit); // Output: Apple
console.log(secondFruit); // Output: Banana
console.log(thirdFruit); // Output: Mango

//* Explanation:
//? Since the fruits array only has two element ('Apple', 'Banana'), the thirdFruit variable gets the default value 'Mango'.

//* 4. Destructuring Nested Arrays
//? You can destructure nested arrays by matching the structure of the array.

const nestedArray = ["Apple", ["Orange", "Mango"]];
const [firstVar, [secondVar, thirdVar]] = nestedArray;

console.log(firstVar); // Output: Apple
console.log(secondVar); // Output: Orange
console.log(thirdVar); // Output: Mango

const numArray = [10, [20, 30, [40, 50]]];
const [firstNum, [secondNum, thirdNum, [fourthNum, fifthNum]]] = numArray;

console.log(`First Number: ${firstNum}`); // Output: 10
console.log(`Second Number: ${secondNum}`); // Output: 20
console.log(`Third Number: ${thirdNum}`); // Output: 30
console.log(`Fourth Number: ${fourthNum}`); // Output: 40
console.log(`Fifth Number: ${fifthNum}`); // Output: 50

//* 5. Array Destructuring by swapping variables
//? You can use array destructuring to swap the values of two variables without needing a temporary variable.

let a = 10;
let b = 20;

[a, b] = [b, a]; // Swapping values

console.log(`Value of a: ${a}`); // Output: 20
console.log(`Value of b: ${b}`); // Output: 10
