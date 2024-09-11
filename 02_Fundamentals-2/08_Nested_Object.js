//* ****************************************************
//* Nested Object In JavaScript
//* ****************************************************


//* What is Nested Object ?
//? A nested object in JavaScript is simply an object inside another object. The nested object can be accessed using the dot notation or the bracket notation.


//* Basic Structure of a Nested Object:
const person = {
    firstName: "John",
    lastName: "Doe",
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA"
    },
    hobbies: ["reading", "gaming", "hiking"]
};

//* In te above example:
//? person is an object
//? address is another object nested inside person
//? hobbies is an array nested inside person


//* Examples:
//? 1:
const user = {
    email: "ZGqoN@example.com",
    fullName: {             // "fullName" object inside the "user" object
        userFullName: {     // "userFullName" object inside the "fullName" object
            firstName: "John",
            lastName: "Doe"
        }
    }
};


//? 2:
const userInfo = {
    firstName: "Suraj",
    lastName: "Adhikari",
    details: {
        age: 25,
        gender: "male",
        country: "Nepal",
        moreDetails: {
            email: "ZGqoN@example.com",
            phone: 1234567890,
            dob: "01-01-2000",
            hobbies: ["coding", "reading", "gaming"]
        }
    }
};


//* ****************************************************

//* Accessing Object Properties of Nested Objects:
//? 1: Using Dot Notation:
console.log(userInfo.firstName);                                // Output -> "Suraj"
console.log(userInfo.details.country);                          // Output -> "Nepal"  
console.log(userInfo.details.gender);                           // Output -> "male"
console.log(userInfo.details.moreDetails.phone);                // Output -> 1234567890
console.log(userInfo.details.moreDetails.hobbies[0]);           // Output -> "coding"
console.log(userInfo.details.moreDetails.hobbies[2]);           // Output -> "gaming"


//? 2: Using Bracket Notation:
console.log(userInfo["firstName"]);                             // Output -> "Suraj"
console.log(userInfo["details"]["country"]);                    // Output -> "Nepal"
console.log(userInfo["details"]["gender"]);                     // Output -> "male"
console.log(userInfo["details"]["moreDetails"]["email"]);       // Output -> "ZGqoN@example.com"
console.log(userInfo["details"]["moreDetails"]["dob"]);         // Output -> "01-01-2000"
console.log(userInfo["details"]["moreDetails"]["hobbies"][0]);  // Output -> "coding"
console.log(userInfo["details"]["moreDetails"]["hobbies"][1]);  // Output -> "reading"


//* Example of a More Complex Nested Object:
const company = {
    name: "Tech Corp",
    employees: {
        employee1: {
            name: "Alice",
            role: "Developer",
            salary: 60000
        },
        employee2: {
            name: "Bob",
            role: "Designer",
            salary: 55000
        }
    },
    location: {
        country: "USA",
        city: "San Francisco"
    }
};

//* Accessing employee1's name
console.log(company.employees.employee1.name);      // Output: "Alice"
console.log(company.location.country);              // Output: "USA"

//* Updating employee2's salary
company.employees.employee2.salary = 58000;
console.log(company.employees.employee2.salary);    // Output: 58000

//* Adding new property to employee1's age
company.employees.employee1.age = 35;
console.log(company.employees.employee1.age);       // Output: 35

console.log(company.employees.employee1);
// Output: { name: "Alice", role: "Developer", salary: 60000, age: 35 }