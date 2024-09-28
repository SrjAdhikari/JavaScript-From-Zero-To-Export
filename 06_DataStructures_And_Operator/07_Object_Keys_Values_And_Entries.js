//* ****************************************************
//* Object Keys, Values, And Entries In JavaScript
//* ****************************************************


//* Object.keys() Method
// Object.keys() method is used to get an array of an object's keys (or property names).
// It returns an array of strings representing the properties' names (keys) of the given object.


//* Syntax:
// Object.keys(object);


//* Example:
const person = {
    firstName: "Suraj",
    lastName: "Adhikari",
    birthYear: 1995,
    favCars: ["G-class", "Defender", "Land-Cruiser"],
    hasDrivingLicense: true,
};

// Getting the keys of the person object
const keys = Object.keys(person);
console.log(keys);  
// Output -> ["firstName", "lastName", "birthYear", "favCars", "hasDrivingLicense"]


//* ****************************************************

//* Object.values() Method
// Object.values() is used to get an array of an object's values.
// It returns an array of the values of the object's properties.


//* Syntax:
// Object.values(object);


//* Example:
const user = {
    firstName: "Suraj",
    lastName: "Adhikari",
    birthYear: 1995,
    favCars: ["G-class", "Defender", "Land-Cruiser"],
    hasDrivingLicense: true,
};

// Getting the values of the user object
const values = Object.values(user);
console.log(values);  
// Output -> ["Suraj", "Adhikari", 1995, ["G-class", "Defender", "Land-Cruiser"], true]


//* ****************************************************

//* Object.entries() Method
// Object.entries() is used to get an array of the object's key-value pairs.
// It returns an array where each element is an array with two elements: the key and the value.


//* Syntax:
// Object.entries(object);  


//* Example:
const car = {
    maker: "Mercedes-Benz",
    model: "G-class",
    year: 2024,
    color: "Black",
};

// Getting the key-value pairs of the car object
const entries = Object.entries(car);
console.log(entries);
// Output -> [ ["maker", "Mercedes-Benz"], ["model", "G-class"], ["year", 2024], ["color", "Black"] ]


//* Iterate through the entries using for...of loop
for(const [key, value] of entries) {
    console.log(`${key}: ${value}`);
}

//* Explanation:
// The for...of loop is used to iterate over the entries array. In each iteration, it destructures the inner arrays into key and value.

//* Output:
// maker: Mercedes-Benz
// model: G-class
// year: 2024
// color: Black


//* ****************************************************

//* Summary:
// Object.keys(obj): Returns an array of the object's keys.
// Object.values(obj): Returns an array of the object's values.
// Object.entries(obj): Returns an array of key-value pairs as arrays.