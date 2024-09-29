//* ****************************************************
//* String In JavaScript -> Part-1
//* ****************************************************


//* What is String ?
// A string is a sequence of characters enclosed within quotes, either single ('), double ("), or backticks (`). Strings are immutable, meaning once a string is created, it cannot be altered.


//* ****************************************************

//* String Creation:
//? I: Using single Literals
let singleQuote = 'Suraj';
let doubleQuote = "Suraj";
let backTick = `Suraj`;

console.log(singleQuote);
console.log(doubleQuote);
console.log(backTick);

//? II: using String Constructor
let myName = new String("Suraj Adhikari");
console.log(myName);   


//* ****************************************************

//* String length Property:
// Syntax: string.length;

// length property returns the number of characters in a string

//* Example:
const fullName = "Suraj Adhikari";
const length = fullName.length;
console.log(`Length of string: ${length}`);     // Length of string: 14


//* ****************************************************
//* Common String Methods
//* ****************************************************


//* 1. indexOf(substring)
// Returns the index of the first occurrence of a substring.
// Returns -1 if the substring is not found.


//* Example:
const airline = "ANA Airlines Japan";

const japanIndex = airline.indexOf("Japan");
const iIndex = airline.indexOf("i");
const position = airline.indexOf("japan");

console.log(`Index of "Japan": ${japanIndex}`);     // Index of "Japan": 13
console.log(`Index of "i": ${iIndex}`);             // Index of "i": 5
console.log(`Index of "japan": ${position}`);       // Index of "japan": -1


//* ****************************************************

//* 2. lastIndexOf(substring)
// Returns the index of the last occurrence of a substring.
// Returns -1 if the substring is not found.


//* Example:
const message = "Good Morning!, Good Afternoon!";

const index = message.lastIndexOf("Good");
const lastIndex = message.lastIndexOf("r");

console.log(`LastIndex of "Good": ${index}`);       // LastIndex of "Good": 15
console.log(`LastIndex of "r": ${lastIndex}`);      // LastIndex of "r": 24


//* ****************************************************

//* 3. slice(start, end)
// Extracts a part of a string and returns it as a new string.
// The "end" parameter is optional and not inclusive.
// The original string is not modified.


//* Example:
const text = "Good to see you";

const slicePart = text.slice(0, 4);     // Extract from 0th character to 4th character
const slicePart2 = text.slice(5);       // Extract from 5th character to the end
const lastPart = text.slice(-3);        // Extract last 3 characters
const slice = text.slice(1, -1);        // Extract from 1st character to 2nd last character

console.log(slicePart);                 // Output: Good
console.log(slicePart2);                // Output: to see you
console.log(lastPart);                  // Output: you
console.log(slice);                     // Output: ood to see yo


//* ****************************************************

//* 4. substring(start, end)
// Similar to slice, but substring doesn't accept negative indices.


//* Example:
const msg = "Good to see you!";

const subStr = msg.substring(8, 16);    // Extract from 8th character to 16th
const subStr2 = msg.substring(8);       // Extract from 8th character to the end

console.log(subStr);                    // Output: see you!
console.log(subStr2);                   // Output: see you!


//* ****************************************************

//* Write an function that inform weather the seat of a flight is middle or not. Middle seat is "B" and "E".

const middleSeat = function(seat) {
    // Get the last character of the string
    const lastChar = seat.slice(-1);

    // Check if the last character is "B" or "E"
    if(lastChar === "B" || lastChar === "E") {
        console.log("You got a middle seat 😒");
    }
    else {
        console.log("You got lucky 😎");
    }
};

middleSeat("11B");
middleSeat("23A");
middleSeat("22E");
middleSeat("9C");


//* ****************************************************