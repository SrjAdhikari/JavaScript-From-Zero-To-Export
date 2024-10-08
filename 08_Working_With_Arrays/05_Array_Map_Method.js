//* ****************************************************
//* Array Map Method In JavaScript
//* ****************************************************


//* map() Method
// The map() method creates a new array by applying a specified function to each element of the original array. It transforms the data but does not change the original array.


//* Syntax: array.map(function(currentValue, index, array) {......});

// function: A function that is called for every element of the array.
// currentValue: The current element being processed in the array.
// index (optional): The index of the current element.
// array (optional): The array that map() was called upon.


//* ****************************************************

//* Example: Using map() with normal functions
const euroMoney = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUSD = 1.5;

const usdMoney = euroMoney.map(function(money) {
    return Math.abs(money) * euroToUSD;
});

console.log(usdMoney);      // Output -> [ 300, 675, 600, 4500, 975, 195, 105, 1950 ]
console.log(euroMoney);     // Output -> [200, 450, -400, 3000, -650, -130, 70, 1300]


//* ****************************************************

const transaction = euroMoney.map(function(money, index) {
    if(money > 0)
        return `Transaction ${index + 1}: You deposited ${money}`;
    else
        return `Transaction ${index + 1}: You withdrew ${Math.abs(money)}`;
});

console.log(transaction);

//* Output:
/* [
    'Transaction 1: You deposited 200', 
    'Transaction 2: You deposited 450', 
    'Transaction 3: You withdrew 400',  
    'Transaction 4: You deposited 3000',
    'Transaction 5: You withdrew 650',
    'Transaction 6: You withdrew 130',
    'Transaction 7: You deposited 70',
    'Transaction 8: You deposited 1300'
] */


//* ****************************************************

//* Example: Using map() with arrow functions
const moneyArray = [200, 450, -400, 3000, -650, -130, 70, 1300];

const newMoneyArray = moneyArray.map( money => money * euroToUSD);

console.log(newMoneyArray);     // Output -> [ 300, 675, -600, 4500, -975, -195, 105, 1950 ]
console.log(moneyArray);        // Output -> [200, 450, -400, 3000, -650, -130, 70, 1300]


//* ****************************************************

const action = moneyArray.map( (money, index ) => {
    if(money > 0)
        return `Transaction ${index + 1}: You deposited ${money}`;
    else
        return `Transaction ${index + 1}: You withdrew ${Math.abs(money)}`;
});

console.log(action);

//* Output:
/* [
    'Transaction 1: You deposited 200', 
    'Transaction 2: You deposited 450', 
    'Transaction 3: You withdrew 400',  
    'Transaction 4: You deposited 3000',
    'Transaction 5: You withdrew 650',
    'Transaction 6: You withdrew 130',
    'Transaction 7: You deposited 70',
    'Transaction 8: You deposited 1300'
] */


//* ****************************************************

const movement = moneyArray.map( (money, index ) => 
    `Transaction ${index+1}: You ${money > 0 ? 'deposited' : 'withdrew'} ${Math.abs(money)}`
);

console.log(movement);

//* Output:
/* [
    'Transaction 1: You deposited 200', 
    'Transaction 2: You deposited 450', 
    'Transaction 3: You withdrew 400',  
    'Transaction 4: You deposited 3000',
    'Transaction 5: You withdrew 650',
    'Transaction 6: You withdrew 130',
    'Transaction 7: You deposited 70',
    'Transaction 8: You deposited 1300'
] */

//* ****************************************************