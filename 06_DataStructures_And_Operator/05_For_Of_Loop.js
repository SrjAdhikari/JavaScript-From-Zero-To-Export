//* ****************************************************
//* For Of Loop In JavaScript
//* ****************************************************


//* What is For Of Loop ?
//? For of loop is used to iterate over iterable objects (arrays, strings, maps and sets) and iterate over their values. It is designed specifically for iterating over values directly rather than indices or properties.


//* Syntax:
// for (variable of iterable) {
//     // code to be executed for each element
// }

// variable: A new variable that will hold each value of the array (or iterable) during the loop.
// iterable: The array (or iterable object) to loop over.

//* ****************************************************

//* Iterating Over Arrays Using for...of Loop:
// The for...of loop iterates through the values of an array, not the indices.

const fruits = ["Apple", "Banana", "Orange", "Mango", "Watermelon"];
for(const fruit of fruits) {
    console.log(fruit);
}

//* Explanation:
// The loop iterates over each element of the fruits array.
// On each iteration, the variable fruit takes the value of the current element.

//* ****************************************************

//* Using break and continue with for...of Loop:
// break: terminates the loop immediately.
// continue: skips the rest of the loop and moves to the next iteration.

//* Break:
const numbers = [10, 20, 30, 40, 50];
for(const number of numbers) {
    if(number === 30) {
        break;  // Exit the loop when 30 is found
    }
    console.log(number);
}

//* Output:
// 10
// 20

//* ****************************************************

//* Continue:
for(const number of numbers) {
    if(number === 30) {
        continue;   // Skip 30 and move to the next iteration
    }
    console.log(number);
}

//* Output:
// 10
// 20
// 40
// 50

//* ****************************************************

//* Iterating Over Strings using of for...of Loop:
const myName = "Suraj";
for(const char of myName) {
    console.log(char);
}

//* Output:
// S
// u
// r
// a
// j