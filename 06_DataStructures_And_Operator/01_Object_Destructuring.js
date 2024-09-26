//* ****************************************************
//* Object Destructuring In JavaScript
//* ****************************************************

//* What is Object Destructuring ?
//? Object destructuring in JavaScript is a syntax that allows us to unpack properties from objects and assign them to variables in a clean and concise way.

//* Object Destructuring Syntax:
//? const { var1, var2 } = objectName;
//? Here, var1 and var2 get the values from the object.

//* 1. Basic Example of Object Destructuring
const person = {
	firstName: "Suraj",
	birthYear: 1995,
	country: "Nepal",
};

const { firstName, birthYear, country } = person;

console.log(firstName); // Output: "Suraj"
console.log(birthYear); // Output: 1995
console.log(country); // Output: "Nepal"

//* Explanation:
//? The person object contains 3 properties: firstName, birthYear, and country.
//? Using object destructuring, we extract those properties into variables with the same names (firstName, birthYear, country).

//* 2. Destructuring with Different Variable Names
//? If you want to assign a different variable name to a property, you can use the colon(:) operator in the property name.

const car = {
	maker: "Mercedes-Benz",
	model: "G-class",
	year: 2022,
};

const { maker: brand, model: carName, year: productionYear } = car;

console.log(brand); // Output: "Mercedes-Benz"
console.log(carName); // Output: "G-class"
console.log(productionYear); // Output: 2022

//* 3. Object Destructuring with Default Values
//? If a property doesn’t exist in the object, we can provide a default value for that variable.

const employee = {
	name: "Suraj",
	position: "Software Engineer",
	salary: 500000,
};

const { name, position, salary, location = "Nepal" } = employee;

console.log(name); // Output: "Suraj"
console.log(position); // Output: "Software Engineer"
console.log(salary); // Output: 500000
console.log(location); // Output: "Nepal"

//* Explanation:
//? The object employee has name, position and salary properties but no location.
//? Using destructuring, we assigned a default value of "Nepal" to location.

//* 4. Destructuring Nested Objects
//? If an object has nested objects inside it, you can use destructuring to directly access properties from the inner objects.

const student = {
	firstname: "Suraj",
	grade: 10,
	marks: {
		math: 90,
		science: 80,
	},
};

// Destructuring student object with nested destructuring
const {
	firstname,
	grade,
	marks: { math, science },
} = student;

console.log(firstname); // Output: "Suraj"
console.log(grade); // Output: 10
console.log(math); // Output: 90
console.log(science); // Output: 80

//* Explanation:
//? The student object has a nested marks object.
//? By using nested destructuring (marks: { math, science }), we directly access the math and science properties from the marks object.
