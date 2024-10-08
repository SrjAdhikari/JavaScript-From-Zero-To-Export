//* ****************************************************
//* For Each With Sets In JavaScript
//* ****************************************************


//* forEach() with Sets
// A Set in JavaScript is a collection of unique values. The forEach() method for Sets iterates over each value in the Set and executes the provided callback function.


//* Syntax: set.forEach(function(value, key, set) {........});
// value: The value of the current element in the Set.
// key: This is also the value (not a key) because Sets don't have keys like Maps. This argument exists to maintain consistency with Maps, where keys and values are both present.
// set: The Set object itself.


//* ****************************************************

//* Example:
const number = new Set([1, 2, 3, 4, 5]);

number.forEach(function(value, _value, set) {
    console.log(`Value: ${value}`);
});

//* Output:
// Value: 1
// Value: 2
// Value: 3
// Value: 4
// Value: 5


//* ****************************************************

const values = new Set([10, 20, 10, 30, 20]);

values.forEach(function(value, _value, set) {
    console.log(`Number: ${value}`);
});

//* Output:
// Number: 10
// Number: 20
// Number: 30


//* ****************************************************

//* Comparison of forEach() in Arrays, Maps, and Sets
/*
    ¦----------------------------------------------------------------------------------------------¦
    ¦   Data Structure   ¦   Parameters for Callback    ¦           Usage                          ¦
    ¦----------------------------------------------------------------------------------------------¦
    ¦   Array	         ¦   element, index, array	    ¦    Iterates over array elements          ¦
    ¦   Map	             ¦   value, key, map	        ¦    Iterates over key-value pairs         ¦
    ¦   Set	             ¦   value, value2, set	        ¦    Iterates over unique values (no keys) ¦
    ¦----------------------------------------------------------------------------------------------¦
*/

//* ****************************************************