//* ****************************************************
//* Array In JavaScript
//* ****************************************************


//* What is an array ?
//? An array is a special data type that stores multiple values in a single variable.


//* Array Creation:
//? 1: using Array Literal:
const array = ['Apple', 'Banana', 'Orange'];
const numbers = [10, 20, 30, 40, 50];

//? 2: using Array Constructor:
const myArray = new Array('Micheal', 'John', 'David');


//* Access Array Elements:
//? We can access array elements using their index. Remember, arrays are zero-indexed, so the first element is at position 0.

const fruits = ['Apple', 'Banana', 'Orange'];
console.log(fruits[0]);     // Output: Apple
console.log(fruits[1]);     // Output: Banana
console.log(fruits[2]);     // Output: Orange

const numArray = [10, 30, 25, 50, 45];
console.log(numArray[3]);   // Output: 50
console.log(numArray[4]);   // Output: 45


//* Array Length:
//? The length of an array is the number of elements present in the array. We can determine the number of elements in an array using the .length property.

const fruitCollection = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango'];
console.log(`The length of the array is: ${fruitCollection.length}`);
// Output: The length of the array is: 5


//* Last Element:
//? We can also use the .length property to access the last element of an array.

const lastElement = fruitCollection[fruitCollection.length - 1];
console.log(`The last element of the array is: ${lastElement}`);
// Output: The last element of the array is: Mango


//* Modify Array Elements:
//? We can modify array elements using their index. Remember, arrays are zero-indexed, so the first element is at position 0.

const friends = ['John', 'Jackson', 'David', 'Alex'];
friends[2] = 'Peter';
console.log(friends);
// Output: ["John", "Jackson", "Peter", "Alex"]  => We modify the third element of array from "David" to "Peter".


//* Exercise:
// Function expression to calculate age based on the birth year
const calculateAge = function (year) {
    // Subtract the given year from 2030 to calculate the age
    return 2030 - year;
};

// Array of birth years
const years = [1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980];

// Calculate the age for the first year in the array (1970)
const age1 = calculateAge(years[0]);

// Calculate the age for the 6th year in the array (1975)
const age2 = calculateAge(years[5]);

// Calculate the age for the 8th year in the array (1977)
const age3 = calculateAge(years[7]);

// Calculate the age for the last year in the array (1980)
const age4 = calculateAge(years[years.length - 1]);

// Store the calculated ages in a new array
const ages = [age1, age2, age3, age4];

// Log the ages to the console in a formatted string
console.log(`Ages are: ${ages}`);

// Output: Ages are: 60, 55, 53, 50