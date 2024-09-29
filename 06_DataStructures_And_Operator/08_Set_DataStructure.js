//* ****************************************************
//* Set Data Structure In JavaScript
//* ****************************************************


//* What is Set Data Structure ?
// A Set in JavaScript is a collection of unique values. Unlike arrays, where duplicate values are allowed, a set will automatically remove duplicates, making it useful for storing only unique elements.


//* ****************************************************

//* 1. Creation of Set:
//? Syntax: const set = new Set(iterable);

// You can create an empty set or initialize it with an iterable (like an array).
// If you pass an array with duplicate values, the Set will automatically remove the duplicates.


//* Example:
const mySet = new Set([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);
console.log(mySet);     // Output -> Set(5) {1, 2, 3, 4, 5}

// In this example, the Set removes the duplicate 3, leaving only unique values: [1, 2, 3, 4, 5].


//* ****************************************************

//* 2. Adding values to a Set:
//? Syntax: set.add(value);

// .add() adds a new value to the set.
// If the value is already present, it won’t be added again.


//* Example 1:
const numbers = new Set();
numbers.add(10);
numbers.add(20);
numbers.add(30);
numbers.add(10);
numbers.add(30);
numbers.add(35);

console.log(numbers);   // Output -> Set(4) {10, 20, 30, 35}

// numbers.add(10), numbers.add(30) is ignored the second time since the value 10 and 30 already exists in the set.


//* Example 2:
const fruits = new Set(["Apple", "Banana", "Orange"]);
fruits.add("Mango");
fruits.add("Grape");
fruits.add("Apple");
fruits.add("Banana");

console.log(fruits);    // Output -> Set(5) { 'Apple', 'Banana', 'Orange', 'Mango', 'Grape' }


//* ****************************************************

//* 3. Checking Set Size:
//? Syntax: set.size;

// .size returns the number of values in the set


//* Example:
const number = new Set([1, 2, 3, 4, 5]);
const setSize = number.size;

console.log(`Size of Set: ${setSize}`);   // Output -> Size of Set: 5


//* ****************************************************

//* 4. Checking if a value exists in a Set:
//? Syntax: set.has(value);

// .has() method returns true if the value exists in the set, and false otherwise.


//* Example:
const gadgets = new Set(["iPhone", "Samsung", "Xiaomi", "Nokia"]);

const hasNokia = gadgets.has("Nokia");
console.log(hasNokia);  // Output -> true

const hasSony = gadgets.has("Sony");
console.log(hasSony);   // Output -> false

// The set gadgets contains "Nokia", so .has("Nokia") returns true.
// "Sony" does not exist in the set, so .has("Sony") returns false.


//* ****************************************************

//* 5. Deleting values from a Set:
//? Syntax: set.delete(value);

// .delete() removes the value from the set 


//* Example:
const colors = new Set(["Red", "Green", "Blue"]);

colors.delete("Green");
console.log(colors);    // Output -> Set(2) { 'Red', 'Blue' }

colors.delete("Yellow");
console.log(colors);    // Output -> Set(2) { 'Red', 'Blue' }


//* ****************************************************

//* 6. Clearing a Set:
//? Syntax: set.clear();

// .clear() removes all values from the set


//* Example:
const letters = new Set(["A", "B", "C", "D", "E"]);
letters.clear();
console.log(letters);   // Output -> Set(0) { }


//* ****************************************************

//* 7. Iterating over a Set:
//? Using for...of loop

const animals = new Set(["Cat", "Dog", "Horse"]);
for(const animal of animals) {
    console.log(animal);
}

// Output:
// Cat
// Dog
// Horse


//* ****************************************************

//* 8. Converting Set to Array:
//? Using spread operator

const days = new Set(["Monday", "Tuesday", "Wednesday"]);
const dayArray = [...days];

console.log(dayArray);      // Output -> ["Monday", "Tuesday", "Wednesday"]


//? Using Array.from() method

const days2 = new Set(["Monday", "Tuesday", "Wednesday"]);
const dayArray2 = Array.from(days2);

console.log(dayArray2);     // Output -> ["Monday", "Tuesday", "Wednesday"]


//* ****************************************************

//* Removing duplicates from an array

const numArray = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

// Converting the array to a set
const numSet = new Set(numArray);
console.log(numSet);            // Output -> Set(5) {1, 2, 3, 4, 5}

// Converting the set back to an array using the spread operator
console.log([...numSet]);       // Output -> [1, 2, 3, 4, 5]

//* ****************************************************