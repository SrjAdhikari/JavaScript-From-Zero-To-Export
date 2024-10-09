//* ****************************************************
//* Array Reduce Method In JavaScript
//* ****************************************************


//* reduce() Method
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value. This method can be used for a variety of purposes, such as summing numbers, flattening arrays, or accumulating values.

//* Syntax: array.reduce(function(accumulator, currentValue, index, array) {......}, initialValue);

// function: A function that runs for each element in the array.
// accumulator: The accumulated value that the callback function returns after each iteration.
// currentValue: The current element being processed in the array.
// index (optional): The index of the current element.
// array (optional): The original array on which reduce() was called.
// initialValue (optional): The initial value for the accumulator.


//* ****************************************************

//* Example: Using reduce() with normal functions
const moneyArray = [200, 450, -400, 3000, -650, -130, 70, 1300];

const balance = moneyArray.reduce(function(accumulator, currentValue, index) {
    console.log(`Iteration: ${index + 1}`);
    console.log(`Accumulator: ${accumulator}, CurrentValue: ${currentValue}`);
    return accumulator + currentValue;
}, 0);

console.log(`Remaining balance is: ${balance}`);

//* Output:
/*
    Iteration: 1
    Accumulator: 0, CurrentValue: 200    
    Iteration: 2
    Accumulator: 200, CurrentValue: 450  
    Iteration: 3
    Accumulator: 650, CurrentValue: -400 
    Iteration: 4
    Accumulator: 250, CurrentValue: 3000 
    Iteration: 5
    Accumulator: 3250, CurrentValue: -650
    Iteration: 6
    Accumulator: 2600, CurrentValue: -130
    Iteration: 7
    Accumulator: 2470, CurrentValue: 70  
    Iteration: 8
    Accumulator: 2540, CurrentValue: 1300
    Remaining balance is: 3840 
*/


//* ****************************************************

//* Example: Using reduce() with arrow functions
const money = [200, 450, -400, 3000, -650, -130, 70, 1300];

const currBalance = money.reduce( (accumulator, currBalance) => accumulator + currBalance, 0);
console.log(`Current Balance is: ${currBalance}`);      // Output -> Current Balance is: 3840


//* ****************************************************

const shoppingCart = [
    {
        itemName : "Book",
        price : 599
    },
    {
        itemName : "Pen",
        price : 99
    },
    {
        itemName : "Mouse",
        price : 1999
    },
    {
        itemName : "Keyboard",
        price : 2999
    },
    {
        itemName : "Earphone",
        price : 5999
    },
]

// Calculating the total price to pay
const priceToPay = shoppingCart.reduce( (accumulator, currentItem) => accumulator + currentItem.price, 0);

// Print the total price to pay
console.log(`Total price to pay: $${priceToPay}`);

// Output -> Total price to pay: $11695


//* ****************************************************

//* Example: Finding the maximum number in an array
const numbers = [12, 51, 124, 514, 30, 5];

const maxValue = numbers.reduce( (accumulator, currentValue) => 
    currentValue > accumulator ? currentValue : accumulator, 
    numbers[0]  // Initial value
);

console.log(`Max Number is: ${maxValue}`);      // Output -> Max Number is: 514


//* Finding the minimum number in an array
const minValue = numbers.reduce(function (accumulator, currentValue) {
    return accumulator < currentValue ? accumulator : currentValue;
}, numbers[0]);

console.log(`Min Number is: ${minValue}`);      // Output -> Min Number is: 5

//* ****************************************************