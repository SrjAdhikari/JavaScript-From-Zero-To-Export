//* ****************************************************
//* Array Methods In JavaScript
//* ****************************************************


//* JavaScript Array Methods:

//? 1: push(): Adds an element to the end of an array.
//* Syntax: arrayName.push(element);


//* Example:
//? 1:
const fruits = ['Apple', 'Banana', 'Orange'];
fruits.push('Mango');
console.log(fruits);            // Output: ["Apple", "Banana", "Orange", "Mango"]


//? 2:
const numbers = [10, 15, 20, 25, 30];

// The arrayLength variable contains the new length of the array.
const arrayLength = numbers.push(35, 40, 50);
console.log(numbers);           // Output: [10, 15, 20, 25, 30, 35, 40, 50]
console.log(arrayLength);       // Output: 8


//* ****************************************************

//? 2: pop(): Removes the last element from an array.
//* Syntax: arrayName.pop();


//* Example:
//? 1:
const animals = ['Lion', 'Tiger', 'Elephant', 'Horse'];
const poppedAnimal = animals.pop();
console.log(poppedAnimal);     // Output: "Horse"
console.log(animals);          // Output: ["Lion", "Tiger", "Elephant"]


//* ****************************************************

//? 3: unshift(): Adds an element to the beginning of an array.
//* Syntax: arrayName.unshift(element);


//* Example:
const numArray = [11, 22, 33, 44, 55];
numArray.unshift(1);
console.log(numArray);         // Output: [1, 11, 22, 33, 44, 55]


//* ****************************************************

//? 4: shift(): Removes the first element from an array.
//* syantax: arrayName.shift();


//* Example:
const price = [1000, 1521, 4500, 3502, 7800];
const shiftedPrice = price.shift();
console.log(shiftedPrice);     // Output: 1000
console.log(price);            // Output: [1521, 4500, 3502, 7800]


//* ****************************************************

//? 5: indexOf(): Returns the first index at which a given element can be found in the array, or - 1 if it is not present.
//* Syntax: arrayName.indexOf(element);


//* Example:
const pet = ['Dog', 'Cat', 'Bird', 'Horse'];
const birdIndex = pet.indexOf('Bird');
console.log(birdIndex);                 // Output: 2
console.log(pet.indexOf('Cow'));        // Output: - 1


//* ****************************************************

//? 6: includes(): Returns true if an element is present in the array, otherwise false.
//* Syntax: arrayName.includes(element);


//* Example:
const gadget = ['Laptop', 'Mobile', 'Watch', 'Speaker'];
const isGadgetPresent = gadget.includes('Mobile');
console.log(isGadgetPresent);                   // Output: true
console.log(gadget.includes('Smart Phone'));    // Output: false


//* ****************************************************

//? 7: slice(): Returns a shallow copy of a portion of an array into a new array. The ending index is not inclusive.
//* Syntax: arrayName.slice(startIndex, endIndex);


//* Example:
const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Orange'];
const slicedColors = colors.slice(1, 3);
console.log(slicedColors);         // Output: ["Green", "Blue"]
console.log(colors);               // Output: ["Red", "Green", "Blue", "Yellow", "Orange"]
console.log(colors.slice(3));      // Output: ["Yellow", "Orange"]


//* What happen when we pass only one argument in slice() method?
//? It will return all the elements from the starting index to the end of the array.

const colorCollection = ['Red', 'Green', 'Blue', 'Yellow', 'Orange'];
const slicedColor = colorCollection.slice(1);
console.log(slicedColor);         // Output: ["Green", "Blue", "Yellow", "Orange"]
console.log(colorCollection);     // Output: ["Red", "Green", "Blue", "Yellow", "Orange"]


//* ****************************************************

//? 8: splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
//* Syntax: arrayName.splice(startIndex, deleteCount, item1, item2, ...);

// startIndex: The index at which to start removing elements.
// deleteCount: The number of elements to remove (starting from the startIndex).
// item1, item2, ... (optional): Elements to add to the array at the startIndex.


//* Example:
const numberArray = [0, 1, 2, 3, 4, 5];
const splicedArray = numberArray.splice(1, 3);
console.log(splicedArray);         // Output: [1, 2, 3]
console.log(numArray);             // Output: [0, 4, 5]



const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
// Use splice() to remove 2 elements starting from index 2 ('Wednesday' and 'Thursday'),
// and replace them with 'Saturday' and 'Sunday'
const splicedWeekDays = weekDays.splice(2, 2, 'Saturday', 'Sunday');

// Log the removed elements (those that were spliced out)
console.log(splicedWeekDays);      // Output: ['Wednesday', 'Thursday']

// Log the modified original array after the splice operation
console.log(weekDays);             // Output: ['Monday', 'Tuesday', 'Saturday', 'Sunday', 'Friday']


//* ****************************************************

//* Interview Question : Different between slice() & splice()
//? slice() : Does not modify the original array. Returns a new array with the selected elements.
//? splice() : Modifies the original array. Returns an array of the removed elements.