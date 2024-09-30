//* ****************************************************
//* String In JavaScript -> Part-2
//* Common String Methods
//* ****************************************************


//* 1. toUpperCase() And toLowerCase():

// Syntax: string.toUpperCase();　
// Converts the string to uppercase

// Syntax: string.toLowerCase();
// Converts the string to lowercase


//* Example:
const myName = "Suraj Adhikari";
const upperCase = myName.toUpperCase();
const lowerCase = myName.toLowerCase();

console.log(upperCase);     // Output -> SURAJ ADHIKARI
console.log(lowerCase);     // Output -> suraj adhikari


//* ****************************************************

//* 2. trim():

// Syntax: string.trim();
// Removes whitespace from both ends of a string. 
// It does not remove the space between the string and the variable.


//* Example:
const myFullName = "   Suraj Adhikari   ";
const trimmedname = myFullName.trim();
console.log(trimmedname);  // Output -> Suraj Adhikari


//* ****************************************************

//* 3. replace():

// Syntax: string.replace(searchValue, replaceValue);
// Replaces the first occurrence of a specified value with another value.


//* Example 1:
const britishPound = "288,97£";

const americanDollar = britishPound.replace("£", "$");  // Replace '£' with '$'
const usDollar = americanDollar.replace(",", ".");      // Replace ',' with '.'

console.log(`USA Currency: ${usDollar}`);     // Output -> USA Currency: 288.97$


//* Example 2:
// To replace all occurrences, use a regular expression with the global flag (/g).
const announcement = "All passengers come to boarding door 23. Boarding door 23!";
const newAnnouncement = announcement.replace(/door/g, "gate");

// OR ↓ replaceAll() method
// const newAnnouncement = announcement.replaceAll("door", "gate");

console.log(newAnnouncement);
// Output -> All passengers come to boarding gate 23. Boarding gate 23!


//* ****************************************************

//* 4. includes(substring):
// Checks if a string contains a specified substring.
// Returns true or false.


//* Example:
const plane = "Airbus A320neo";

const hasAirbus = plane.includes("Airbus");
const hasA320 = plane.includes("A320");
const hasBoeing = plane.includes("Boeing");
const hasNeo = plane.includes("neo");

console.log(hasAirbus);         // Output -> true
console.log(hasA320);           // Output -> true
console.log(hasBoeing);         // Output -> false
console.log(hasNeo);            // Output -> true


//* ****************************************************

//* 5. startsWith(substring):
// Checks if a string starts with a specified substring.
// Returns true or false.


//* Example:
const airCraft = "Airbus A320neo";

const startWithAir = airCraft.startsWith("Air");
const startWithAbus = airCraft.startsWith("Abus");
const startWithA = airCraft.startsWith("A");

console.log(startWithAir);      // Output -> true
console.log(startWithAbus);     // Output -> false
console.log(startWithA);        // Output -> true


//* ****************************************************

//* 6. endsWith(substring):
// Checks if a string ends with a specified substring.
// Returns true or false.


//* Example:
const newPlane = "Airbus A320neo";

const endWithNeo = newPlane.endsWith("neo");
const endWithA = newPlane.endsWith("A");
const endWithBus = newPlane.endsWith("Bus");
const endwithO = newPlane.endsWith("o");

console.log(endWithNeo);        // Output -> true
console.log(endWithA);          // Output -> false
console.log(endWithBus);        // Output -> false
console.log(endwithO);          // Output -> true


//* ****************************************************