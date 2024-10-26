//* ****************************************************
//* Converting and Checking Numbers In JavaScript
//* ****************************************************


//* 1. Number.parseInt():
// ● The Number.parseInt() method converts a string to an integer (whole number). 
// ● It takes a second argument, which specifies the radix (the base in mathematical numeral system).
// ● It stops reading once it encounters a non-numeric character.


//* Syntax: Number.parseInt(string, base);


//* Examples:
console.log(Number.parseInt("123"));            // 123 (integer)
console.log(Number.parseInt("123.45"));         // 123 (only whole number part)
console.log(Number.parseInt("12abc34"));        // 12 (stops at first non-numeric character)
console.log(Number.parseInt("F", 16));          // 15 (F in base 16 is 15 in decimal)
console.log(Number.parseInt('30px', 10));       // 30 
console.log(Number.parseInt('e23', 10));        // NaN (Not a Number)
console.log(Number.parseInt('  2.5rem  '));     // 2 (ignores leading and trailing whitespace)


//* ****************************************************

//* 2. Number.parseFloat():
// ● The Number.parseFloat() method converts a string to a floating-point number. 
// ● It also stops reading at the first non-numeric character, but unlike parseInt, it can include decimal points.


//* Syntax: Number.parseFloat(string);


//* Examples:
console.log(Number.parseFloat("123.45"));       // 123.45 (with decimals)
console.log(Number.parseFloat("12abc34"));      // 12 (stops at non-numeric character)
console.log(Number.parseFloat("123"));          // 123 (converted to floating-point form)
console.log(parseFloat('  2.5rem  '));          // 2.5 (ignores leading and trailing whitespace)


//* ****************************************************

//* 3. Number.isNaN():
// ● The Number.isNaN() checks if a value is NaN ("Not-a-Number"). 
// ● NaN usually comes up when a calculation doesn’t produce a valid number (e.g., dividing a string by a number).
// ● Number.isNaN() only returns true if the value is actually NaN.


//* Syntax: Number.isNaN(value);


//* Examples:
console.log(Number.isNaN(NaN));        // true (NaN is not a number)
console.log(Number.isNaN("Hello"));    // false (a string is not NaN)
console.log(Number.isNaN(123));        // false (123 is a number)
console.log(Number.isNaN(0 / 0));      // true (0/0 is undefined, so it returns NaN)
console.log(Number.isNaN(+'20X'));     // false (+'20X' is a number, but not a valid number)
console.log(Number.isNaN(23 / 0));     // true (23 / 0 is undefined, so it returns NaN)


//* ****************************************************

//* 4. Number.isFinite():
// ● The Number.isFinite() method checks if a value is a finite number. 
// ● It returns true for numbers that are not Infinity, -Infinity, or NaN.
// ● It’s useful to validate if a calculation or input is within the range of real numbers.


//* Syntax: Number.isFinite(value);


//* Examples:
console.log(Number.isFinite(123));          // true (123 is finite)
console.log(Number.isFinite(Infinity));     // false (Infinity is not finite)
console.log(Number.isFinite(-Infinity));    // false (-Infinity is not finite)
console.log(Number.isFinite(NaN));          // false (NaN is not a finite number)
console.log(Number.isFinite("123"));        // false (only checks numbers, not strings)
console.log(Number.isFinite(+'20X'));       // false
console.log(Number.isFinite(23 / 0));       // false


//* ****************************************************

//* 5. Number.isInteger():
// ● The Number.isInteger() method checks if a value is an integer (whole number). 
// ● It returns true only if the number has no decimal part.


//* Syntax: Number.isInteger(value);

//* Examples:
console.log(Number.isInteger(123));         // true (123 is an integer)
console.log(Number.isInteger(123.45));      // false (123.45 has decimals)
console.log(Number.isInteger("123"));       // false (only checks actual numbers, not strings)
console.log(Number.isInteger(0));           // true (0 is an integer)
console.log(Number.isInteger(-10));         // true (negative integers are valid too)
console.log(Number.isInteger(23 / 0));      // false

//* ****************************************************