//* ****************************************************
//* Simple Array Methods In JavaScript
//* ****************************************************


//* 1. reverse()
// Reverses the elements of an array in place.
// Syntax: array.reverse();


//* Example:
const array = ['e', 'd', 'c', 'b', 'a'];
console.log(`Array before reverse.`);
console.log(array);     // Output -> [ 'e', 'd', 'c', 'b', 'a' ]

array.reverse();

console.log(`Array after reverse.`);
console.log(array);     // Output -> [ 'a', 'b', 'c', 'd', 'e' ]


//* ****************************************************

//* 2. concat()
// Merges two or more arrays and returns a new array
// Syntax: array1.concat(array2, array3, ..., arrayN)


//* Example:
// 1.
const fruits = ["Apple", "Banana", "Cherry"];
const addFruits = fruits.concat("Mango", "Peach");

console.log(addFruits);     // Output -> [ 'Apple', 'Banana', 'Chery', 'Mango', 'Peach' ]
console.log(fruits);        // Output -> [ 'Apple', 'Banana', 'Chery' ]


// 2.
const char = ['a', 'b', 'c'];
const moreChar = ['d', 'e', 'f'];
const concatChar = char.concat(moreChar);

console.log(concatChar);    // Output -> [ 'a', 'b', 'c', 'd', 'e', 'f' ]


//* ****************************************************

//* 3. join()
//  Joins all elements of an array into a string, separated by the specified separator..
// Syntax: array.join(separator)


//* Example:
const numArray = [10, 20, 30, 40, 50];
const joinArray = numArray.join(' - ');

console.log(joinArray);     // Output -> 10 - 20 - 30 - 40 - 50


//* ****************************************************

//* 4. at()
// Access an element in an array (or string) at a specified index. 
// Syntax: array.at(index);


//* Example:
const fruitArray = ["Apple", "Banana", "Cherry", "Date"];

console.log(fruitArray.at(0));      // Output -> Apple
// Equivalent to:
console.log(fruitArray[0]);         // Output -> Apple

console.log(fruitArray.at(-1));     // Output -> Date (last element)
// Equivalent to:
console.log(fruitArray[fruitArray.length - 1]);     // Output -> Date (last element)

console.log(fruitArray.at(-2));     // Output -> Cherry (second-to-last element)


//* ****************************************************

//* 5. slice()
// Returns a shallow copy of a portion of an array into a new array without modifying the original array.
// Syntax: array.slice(start, end)


//* Example:
const letters = ['a', 'b', 'c', 'd', 'e'];

console.log(letters.slice(2));          // Output -> [ 'c', 'd', 'e' ]
console.log(letters.slice(2, 4));       // Output -> [ 'c', 'd' ]
console.log(letters.slice(-2));         // Output -> [ 'd', 'e' ]
console.log(letters.slice(-1));         // Output -> [ 'e' ]
console.log(letters.slice(1, -2));      // Output -> [ 'b', 'c' ]
console.log(letters);                   // Output -> [ 'a', 'b', 'c', 'd', 'e' ] -> Original array still same.


//* ****************************************************

//* 6. splice()
// Changes the contents of an array by removing, replacing, or adding elements and returns the removed elements.
// Syntax: array.splice(startIndex, deleteCount, item1, item2, ...);


//* Example:
const charArray = ['a', 'b', 'c', 'd', 'e'];

// console.log(charArray.splice(2));        // Output -> [ 'c', 'd', 'e' ]
console.log(charArray.splice(-1));          // Output -> [ 'e' ]
console.log(charArray);                     // Output -> [ 'a', 'b', 'c', 'd' ] -> Original array modified. (1st change)

console.log(charArray.splice(1, 2));        // Output -> [ 'b', 'c' ]
console.log(charArray);                     // Output -> [ 'a', 'd' ] -> Original array modified. (2nd change)

//* ****************************************************