//* *******************************************************
//* Truthy And Falsy Values In JavaScript
//* *******************************************************


//? In JavaScript, every value is either "truthy" or "falsy." These terms refer to how values are evaluated in Boolean contexts, such as conditions in if statements or loops. Truthy values evaluate to true, and falsy values evaluate to false.


//* Truthy Values:
//? All values that are not falsy are considered truthy. The following values are considered truthy:

//? - true (the Boolean value).
//? - Non-zero numbers (e.g., 42, -1, 3.14).
//? - Non-empty strings (e.g., "Hello", " ", "42", "-1", "0", "false")
//? - Objects (e.g., {}, [])
//? - Functions (e.g., function () {})
//? - Anything that is not null
//? - Anything that is not undefined
//? - Anything that is not NaN
//? - Special values like: Infinity and -Infinity

//* Examples:
if (42) {
    console.log("This will run because 42 is truthy.");
}

if ("Hello") {
    console.log("This will run because a non-empty string is truthy.");
}

if ({}) {
    console.log("This will run because an object is truthy.");
}

if ([]) {
    console.log("This will run because an empty array is truthy.");
}

if (function () {}) {
    console.log("This will run because a function is truthy.");
}

if (Infinity) {
    console.log("This will run because Infinity is truthy.");
}

if (-Infinity) {
    console.log("This will not run because -Infinity is falsy.");
}


//* Falsy Values:
//? The following values are considered falsy, meaning they evaluate to false in Boolean contexts:

//? - false: The Boolean false itself.
//? - 0: The number zero.
//? - "" (empty string): A string with no characters.
//? - null: Represents the intentional absence of any value.
//? - undefined: A variable that has been declared but not assigned a value.
//? - NaN: Stands for "Not-a-Number," typically the result of an invalid mathematical operation.

//* Examples:
if (0) {
    console.log("This will not run because 0 is falsy.");
}

if ("") {
    console.log("This will not run because an empty string is falsy.");
}

if (null) {
    console.log("This will not run because null is falsy.");
}

if (undefined) {
    console.log("This will not run because undefined is falsy.");
}

if (NaN) {
    console.log("This will not run because NaN is falsy.");
}


//* Conclusion:
//? - Falsy values: false, 0, "", null, undefined, NaN
//? - Truthy values: Everything else, including non-zero numbers, non-empty strings, objects, arrays, functions, etc.