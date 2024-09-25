//* ****************************************************
//* This Keyword In JavaScript
//* ****************************************************

//* What is This Keyword ?
//? "This" keyword refers to the object that is executing the current function. It is used to access properties and methods of the object.

//* The "this" Keyword refers to different objects depending on how it is used:
//? In the global scope, "this" refers to the global object.
//? In an object method, "this" refers to the object.
//? In a regular function, "this" refers to the global object.
//? In a regular function, in strict mode, "this" is undefined.
//? In an event, "this" refers to the element that received the event.
//? Methods like call(), apply(), and bind() can refer "this" to any object.

//* 1. "this" in the Global Scope
//? When "this" is used outside any function or object, it refers to the global object (usually the browser window).

//* Example:
console.log(this); // Output -> Window {window: Window, self: Window, frames: Window, ...}

//* 2. "this" inside an Object Method
//? When "this" is used inside a method (a function that belongs to an object), it refers to the object that owns the method.

//* Example:
const person = {
	firstname: "suraj",
	lastname: "Adhikari",
	age: 27,

	// Method
	getFullName: function () {
		console.log(this); // Refer to the person object
		// Output -> Object {firstname: "suraj", lastname: "Adhikari", age: 27, getFullName: ƒ}

		return this.firstname + " " + this.lastname;
	},
};
console.log(person.getFullName()); // Output -> suraj Adhikari

//* 3. "this" in a Regular Function (Standalone Function)
//? In a regular function (outside of an object or method), this refers to the global object in non-strict mode, or it is undefined in strict mode.

//* Example:
function myFunction() {
	console.log(this); // Refers to the global object (`window` in the browser)
}
myFunction(); // Output -> Window {window: Window, self: Window, frames: Window, ...}

//* 4. "this" with Arrow Functions
//? Arrow functions behave differently when it comes to this. They do not have their own this context. Instead, they inherit this from their surrounding (lexical) context.

//* Example:
const personInfo = {
	firstname: "suraj",
	lastname: "Adhikari",
	age: 27,
	showInfo: function () {
		// `this` refers to the `person` object
		console.log("Regular function 'this':", this);
		console.log(`Age: ${this.age}`);

		const getFullName = () => {
			// `this` is still the `person` object
			console.log("Arrow function 'this':", this);
			console.log(`Full Name: ${this.firstname} ${this.lastname}`);
		};
		getFullName();
	},
};
personInfo.showInfo();

//? Output:
// Regular function 'this': {firstname: "suraj", lastname: "Adhikari", age: 27, showInfo: ƒ}
// Age: 27
// Arrow function 'this': {firstname: "suraj", lastname: "Adhikari", age: 27, showInfo: ƒ}
// Full Name: suraj Adhikari

//* Summary of "this":
//? Global Context: Refers to the global object (window in browsers).
//? Object Methods: Refers to the object that owns the method.
//? Regular Functions: Refers to the global object (or undefined in strict mode).
//? Arrow Functions: Inherits this from the surrounding (lexical) context.
