//* ****************************************************
//* For Each With Maps In JavaScript
//* ****************************************************


//* forEach() with Maps
// A Map in JavaScript is a collection of key-value pairs where the keys can be any data type. The forEach() method for Maps iterates over each key-value pair and executes a callback function.


//* Syntax: map.forEach(function(value, key, map) {........});
// value: The value of the current key-value pair being processed.
// key: The key of the current element being processed.
// map: The Map object itself.


//* ****************************************************

//* Example:
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value, key, map) {
    console.log(`Key: ${key}, Value: ${value}`);
});

//* Output:
// Key: USD, Value: United States dollar
// Key: EUR, Value: Euro
// Key: GBP, Value: Pound sterling


//* ****************************************************

const person = new Map([
    ["Name", "Suraj"],
    ["Age", 27],
    ["Gender", "Male"],
    ["City", "Tokyo"]
]);

person.forEach(function(value, key, map) {
    console.log(`Key: ${key}, Value: ${value}`);
});

//* Output:
// Key: Name, Value: Suraj
// Key: Age, Value: 27
// Key: Gender, Value: Male
// Key: City, Value: Tokyo


//* ****************************************************