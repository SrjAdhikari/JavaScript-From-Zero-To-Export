//* ****************************************************
//* Custom Object Methods In JavaScript
//* ****************************************************


//* Custom Object Methods:
//? custom object methods are functions defined within an object that can perform operations on the object’s properties or provide custom functionality. Custom object methods are called using the dot notation.

//* Syntax: objectName.methodName()


//* Defining Custom Object Methods:
//? You can define methods within an object just like you define any other key-value pair, except the value is a function. These methods can operate on the object’s data using the "this" keyword. For example, you can use the this keyword to access the object’s properties and methods.


//* Examples:
const person = {
    // Properties of the person object
    firstName: "Suraj",
    lastName: "Adhikari",
    birthYear: 1995,
    favCars: ["G-class", "Defender", "Land-Cruiser"],
    hasDrivingLicense: true,

    // Diferent Method to calculate age
    //? 1: Calculate age by passing a year as an argument. This method requires a year to be passed as an argument to calculate the age
    calcAge: function (year) {
        const currYear = new Date().getFullYear();
        return currYear - year;
    },

    //? 2: Calculate age using the person's birthYear property. This method uses 'this.birthYear' directly to calculate the person's age
    calculateAge: function () {
        const currYear = new Date().getFullYear();
        return currYear - this.birthYear;       // 'this' refers to the 'person' object
    },

    //? 3: Calculates and stores the person's age in a new 'age' property. This method not only calculates but also updates the 'age' property within the object
    personAge: function () {
        const currYear = new Date().getFullYear();
        this.age = currYear - this.birthYear;   // 'this' refers to the 'person' object
        return this.age;
    },

    // Method to get summary of person
    getSummary: function () {
        return `${this.firstName} is a ${this.personAge()} years old, has ${this.favCars.length} cars and ${this.hasDrivingLicense ? "has" : "does not have"} a driving license.`;   // 'this' refers to the 'person' object
    }
};

// Calling methods and logging their output
console.log(person.calcAge(1995));     // Calls 'calcAge' with the year passed explicitly, returns age for 1995
console.log(person.calculateAge());    // Calls 'calculateAge', returns age based on 'birthYear' property
console.log(person.personAge());       // Calls 'personAge', returns age and also sets 'age' property in object
console.log(person.age);               // Logs the 'age' property of the 'person' object
console.log(person.getSummary());      // Calls 'getSummary', returns a summary of the person's details