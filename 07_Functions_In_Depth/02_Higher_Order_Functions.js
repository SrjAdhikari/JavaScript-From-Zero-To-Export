//* ****************************************************
//* Higher Order Functions In JavaScript
//* ****************************************************


//* What is Higher Order Function ?
// A higher-order function is a function that does at least one of the following:
// 1. Takes another function as an argument.
// 2. Returns a function as its result.


//* ****************************************************

//* Example 1:
// Normal functions that performs basic math operations
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// Higher-order function 'calculator' that accepts another function (fun) and two numbers (a, b) as arguments.
// It then calls the passed function with the provided numbers.
function calculator(fun, a, b) {
    return fun(a, b);
}

// Calling the 'calculator' function with different operations (add, subtract, etc.) and storing the results.
const sum = calculator(add, 5, 3);
const difference = calculator(subtract, 10, 8);
const product = calculator(multiply, 2, 8);
const quotient = calculator(divide, 6, 2);

console.log(`Sum of is: ${sum}`);
console.log(`Difference is: ${difference}`);
console.log(`Product is: ${product}`);
console.log(`Quotient is: ${quotient}`);


//* ****************************************************

//* Example 2:
// Arrow function that check if a number is even or odd
const checkEvenOdd = (num) => {
    if(num % 2 === 0){
        console.log(`${num} is Even number.`);
    }
    else {
        console.log(`${num} is Odd number`);
    }
};

// Higher-order function 'provideNumber' that accepts another function (fun) and a number (num) as arguments.
function provideNumber(fun, num) {
    return fun(num);
};

// Calling the higher-order function 'provideNumber' with 'checkEvenOdd' and different numbers.
provideNumber(checkEvenOdd, 10);
provideNumber(checkEvenOdd, 5);
provideNumber(checkEvenOdd, 0);
provideNumber(checkEvenOdd, 1);


//* ****************************************************

//* Example 3:
// Higher-order function 'greeting' that accepts one argument 'greet' and returns another function
const greeting = function(greet) {
    // The returned function accepts a 'name' argument and prints a greeting message
    return function(name) {
        console.log(`${greet}, ${name}`);
    };
};

// Store the returned function (from greeting("Hi")) in the variable 'sayHi'
// The outer function 'greeting' is called with "Hi"
const sayHi = greeting("Hi"); 

// Call the stored function 'sayHi' with the argument "Suraj"
sayHi("Suraj");  // Output: Hi, Suraj

// Another way to call the function in one go: call greeting("Hey") and immediately call the returned function with "Suraj"
greeting("Hey")("Suraj");  // Output: Hey, Suraj


//* ****************************************************

//* Example 4: 
//* Write a higher-order function that takes a function and a number, and calls the function that many times.

// A function that logs how many times it has been called with the number 'num'
const callFunction = function(num) {
    console.log(`Function called ${num} time's.`);
};

// 'higherOrderFun' is a higher-order function that accepts a function 'fun' and a number 'num' as arguments.
function higherOrderFun (fun, num) {
    for(let i = 1; i <= num; i++) {
        // Call the passed function 'fun' with the current value of 'i'
        fun(i);
    }
};

higherOrderFun(callFunction, 5);


//* ****************************************************

//* Example 5: 
//* Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

function performCalc(fun1, fun2, num) {
    const result = fun1(num);   // Apply the first function to the number
    const ans = fun2(result);   // Apply the second function to the result of the first function
    return ans;                 // Return the final result

    // Shorthand of above code : return fun2(fun1(num));
}

const double = num => num * 2;      // Arrow function that doubles the input number
const square = num => num * num;    // Arrow function that squares the input number

// Call 'performCalc' with 'double' and 'square' functions and 5 as the number
const result = performCalc(double, square, 5);

console.log(`Result is: ${result}`);    
// Output -> 100 (first double up the 5, which become 10 and then square 10, which become 100).


//* ****************************************************