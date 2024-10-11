//* ****************************************************
//* Array FlatMap Method In JavaScript
//* ****************************************************


//* flatMap() Method
// The flatMap() method first applies a mapping function to each element of the array (like map()), and then flattens the result by one level.
// It is a combination of map() and flat() (with depth 1).


//* Syntax: array.flatmap(function(element, index, array) {......});

// function: A function that produces elements for the new array.
// element: The current element being processed.
// index (optional): The index of the current element.
// array (optional): The array that flatmap() is being called on.


//* How it works:
// 1. First, flatMap() applies the provided callback function to each element in the array, creating a new array.
// 2. Then, it flattens the array by one level.


//* ****************************************************

//* Example 1: Mapping and Flattening
const arr = [1, 2, 3, 4];

const flatMapped = arr.flatMap( num => [num, num * 2]);
console.log(flatMapped);        // Output -> [ 1, 2, 2, 4, 3, 6, 4, 8 ]


//* Explanation:
// 1. Original array: [1, 2, 3, 4].
// 2. Mapping function: Each element is mapped to [num, num * 2], where num is the current element.
    // For 1: It becomes [1, 2]
    // For 2: It becomes [2, 4]
    // For 3: It becomes [3, 6]
    // For 4: It becomes [4, 8]
// 3. Flattening: The array is flattened by one level.
// 4. The result is [1, 2, 2, 4, 3, 6, 4, 8].


//* ****************************************************

//* Example 2: Remove Empty Elements and Flatten
// We can also use flatMap() to filter out unwanted elements (e.g., null or undefined values) and flatten the result.

const num = [1, 2, 3, null, 4, 5];

const flatArray = num.flatMap( num => num ? [num] : []);
console.log(flatArray);        // Output -> [ 1, 2, 3, 4, 5 ]


//* Explanation:
// 1. Original array: [1, 2, 3, null, 4, 5].
// 2. Mapping function: The mapping function returns [num] if num is truthy; otherwise, it returns an empty array.
    // For 1, 2, 3, 4, and 5: They are returned as [1], [2], etc.
    // For null: It returns an empty array [].
// 3. Flattening: The array is flattened by one level.
// 4. The result is [1, 2, 3, 4, 5].


//* ****************************************************

//* Example 3: Splitting Strings and Flattening
const phrases = ["Hello world", "How are you", "JavaScript is fun"];

const flatWords = phrases.flatMap( phrase => phrase.split(" "));
console.log(flatWords);        // Output -> [ 'Hello', 'world', 'How', 'are', 'you', 'JavaScript', 'is', 'fun' ]

//* ****************************************************