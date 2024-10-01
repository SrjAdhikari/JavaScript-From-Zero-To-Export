//* ****************************************************
//* Function With Default Parameters In JavaScript
//* ****************************************************


//* Syntax:
function functionName(param1 = value1, param2 = value2) {
	// Function body
};


//* How it works?
// If an argument is not passed or is undefined, the default value is used. If an argument is passed, it overrides the default value.


//* ****************************************************

//* Example 1: 
const calcultion = function(num1, num2 = 5) {
    return num1 * num2;
};

console.log(calcultion(10, 10)); // Output -> 100   
console.log(calcultion(2));     // Output -> 10  => num2 is set to 5 by default


//* ****************************************************

//* Example 2:
const greet = (name = "Suraj", greeting = "Hello") => {
    return `${greeting}, ${name}`
};

console.log(greet("John", "Hi"));   // Output -> Hi, John   
console.log(greet("Adam"));         // Output -> Hello, Adam  => greeting is set to "Hello" by default
console.log(greet());               // Output -> Hello, Suraj => name and greeting is set to "Suraj" and "Hello" by default


//* ****************************************************

//* Example 3:
const confirmOrder = function(name = "Customer", item = "Chip", quantity = 1) {
    console.log(`Thank you, ${name}, for ordering ${quantity} ${item}(s)!`);
};

confirmOrder();                     // Output -> Thank you, Customer, for ordering 1 Chip(s)!
confirmOrder("Suraj", "Book", 2);   // Output -> Thank you, Suraj, for ordering 2 Book(s)!


//* ****************************************************

//* Example 4:
const sendEmail = (to, subject = "No Subject", body = "No content provided") => {
    console.log(`To: ${to}\nSubject: ${subject}\nBody: ${body}`);
};

sendEmail("nSj9n@example.com"); // subject and body are set to "No Subject" and "No content provided" by default
// Output:
// To: nSj9n@example.com
// Subject: No Subject
// Body: No content provided

sendEmail("nSj9n@example.com", "Order Confirmation", "Thank you for your order!");
// Output:
// To: nSj9n@example.com
// Subject: Order Confirmation
// Body: Thank you for your order!


//* ****************************************************

//* Example 5:
const booking = [];     // Array to store booking details
const bookTickets = (flightNumber, passenger = 1, price = 599 * passenger) => {
    // Create an object to store the flight ticket details
    const ticketDetail = {flightNumber, passenger, price};

    // Add the ticket details to the 'booking' array
    booking.push(ticketDetail)

    console.log(ticketDetail);
};

bookTickets("LH123");                   // Output -> { flightNumber: 'LH123', passenger: 1, price: 599 }
bookTickets("LH456", 2);                // Output -> { flightNumber: 'LH456', passenger: 2, price: 1198 }
bookTickets("LH789", 3, 999);           // Output -> { flightNumber: 'LH789', passenger: 3, price: 999 }
bookTickets("LH101", undefined);        // Output -> { flightNumber: 'LH101', passenger: 1, price: 599 }


//* ****************************************************