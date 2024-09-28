//* ****************************************************
//* Optional Chaining In JavaScript
//* ****************************************************


//* What is Optional Chaining ?
//? Optional chaining (?.) is a feature in JavaScript that allows us to safely access deeply nested properties of an object without having to check each level for "null" or "undefined". 


//* Why Use Optional Chaining ?
//? This operator helps avoid errors when we try to access properties or methods on objects that may not exist.
//? Instead of throwing an error if the property doesn’t exist, optional chaining returns undefined. 

//* For example:
const user = {
    name: "John",
    address: {
        city: "New York",
    }
};

console.log(user.address.city);  // Output: New York
console.log(user.address.zipcode); // TypeError: Cannot read property 'zipcode' of undefined

//* Here, "user.address.zipcode" is "undefined" because the object "user" doesn't have a property "zipcode", and trying to access "undefined" causes an error. This is where optional chaining comes to the rescue! It will return "undefined" instead of throwing an error.


//* ****************************************************


//* Syntax of Optional Chaining:
// object?.property
// object?.[expression]
// object?.method()


//* ****************************************************

//* Examples: Optional Chaining with Objects
const person = {
    name: "John",
    address: {
        city: "New York",
        country: {
            name: "USA",
            continent: "North America"
        }
    }
};

console.log(person.address?.country.name);  // Output: "USA"
console.log(person.address?.postalCode?.code);  // Output: undefined


//* Explanation: console.log(person.address?.country.name);
// 1. person.address?.country.name will safely access the country.name property because address and country both exist in the object.
// 2. Optional chaining (?.) checks if address exists before proceeding to access country.name.
// 3. Since address and country exist, it successfully retrieves the value "USA".


//* Explanation: console.log(person.address?.postalCode?.code);
// 1. First, it checks if person.address exists (it does).
// 2. Then It checks if person.address.postalCode exists. Since there is no postalCode property in the address object, this evaluates to undefined, and the optional chaining short-circuits, preventing further property access.
// 3. Since postalCode does not exist, the expression person.address?.postalCode?.code evaluates to undefined without throwing an error.


//* ****************************************************

const userInfo = {
    name: "Alice",
    address: {
        city: "New York",
        country: {
            name: "USA",
        }
    },
    getInfo() {
        return `${this.name} lives in ${this.address?.city}`;
    }
};

console.log(userInfo.getInfo()); // Output: Alice lives in New York
console.log(userInfo.address?.country?.name); // Output: USA
console.log(userInfo.address?.postalCode?.code); // Output: undefined
console.log(userInfo.contact?.email ?? "No email provided"); // Output: No email provided


//* Explanation: console.log(userInfo.contact?.email ?? "No email provided"); 
// 1. userInfo.contact?.email checks if contact exists. Since contact is not defined in userInfo, this part evaluates to undefined.

// 2. The ?? operator (Nullish Coalescing Operator) then comes into play. It returns the right-hand side ("No email provided") if the left-hand side is null or undefined.

// 3. Since userInfo.contact?.email evaluates to undefined, the ?? operator returns "No email provided".


//* ****************************************************

//* Examples: Optional Chaining with Arrays
const users = [
    { name: "Alice", age: 25, address: { city: "New York" } },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35, address: { city: "San Francisco" } }
];

// Accessing the city of the first user (Alice)
console.log(users[0]?.address?.city);  // Output: "New York"

// Accessing the city of the second user (Bob), who doesn't have an address
console.log(users[1]?.address?.city);  // Output: undefined

// Safely trying to access the city of a non-existing user at index 5
console.log(users[5]?.address?.city);  // Output: undefined


//* ****************************************************

const teams = [
    {
        name: "Team A",
        members: ["Alice", "Bob"]
    },
    {
        name: "Team B",
        members: null
    },
    {
        name: "Team C"
    }
];

// Accessing the first member of Team A
console.log(teams[0]?.members?.[0]);  // Output: "Alice"

// Accessing the first member of Team B (no members, but safely handled)
console.log(teams[1]?.members?.[0]);  // Output: undefined

// Accessing the first member of Team C (no 'members' property)
console.log(teams[2]?.members?.[0]);  // Output: undefined


//* ****************************************************

//* Summary of Optional Chaining
// 1. Optional chaining (?.) helps safely access properties, methods, or elements that might not exist.
// 2. Instead of throwing an error when encountering null or undefined, it returns undefined.
// 3. We can use optional chaining with nested objects, arrays, methods, and functions.
// 4. It works well with the nullish coalescing operator (??) for providing default values.
// 5. Optional chaining is useful for dealing with inconsistent data structures, such as those returned from APIs.