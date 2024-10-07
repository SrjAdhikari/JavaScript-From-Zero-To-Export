//* ****************************************************
//* For Each Method In JavaScript
//* ****************************************************


//* forEach()
// The forEach() method is a useful tool when we want to perform an operation on every element in an array without modifying or returning a new array.

// Syntax: array.forEach(callbackFun);


//* Example:
// 1. Basic Example
const moneyArray = [200, 450, -400, 3000, -650, -130, 70, 1300];

moneyArray.forEach(function(money) {
    if(money > 0) {
        console.log(`You deposited ${money}`);
    }
    else {
        console.log(`You withdrew ${Math.abs(money)}`);
    }
});


//* ****************************************************

// 2. Accessing the Index of Each Element
// We can access the index of the current element being processed by adding a second parameter to the callback.

moneyArray.forEach(function(money, index) {
    if(money > 0) {
        console.log(`Action ${index + 1} : You deposited ${money}`);
    }
    else {
        console.log(`Action ${index + 1} : You withdrew ${Math.abs(money)}`);
    }
});


//* ****************************************************

// 3. Accessing the Array Itself
// We can also access the entire array being iterated by adding a third parameter to the callback.

const fruits = ['Apple', 'Banana', 'Cherry'];

fruits.forEach(function(fruit, index, array) {
    console.log(`${fruit} is at index ${index} in [${array}]`);
});

//* Output:
// Apple is at index 0 in [Apple,Banana,Cherry]
// Banana is at index 1 in [Apple,Banana,Cherry]
// Cherry is at index 2 in [Apple,Banana,Cherry]


//* ****************************************************

// 4. Modifying Each Element
// Though forEach() allows us to iterate over elements, it doesn’t change the array elements unless we modify the original array within the callback.

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(num, index, array) {
    array[index] = num * num;
});

console.log(`Modified Array:`);
console.log(numbers);   // Output -> [ 1, 4, 9, 16, 25 ]

//* ****************************************************