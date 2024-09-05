//* ****************************************************
//* Switch Case  In JavaScript
//* ****************************************************


//* What is switch case ?
//? The switch statement in JavaScript is used to perform different actions based on different conditions, similar to an if/else statement. It is useful when you need to compare a single expression against multiple potential values.


//* Syntax:
switch(expression) {
    case value1:
        // Code to execute if expression === value1
        break;
    case value2:
        // Code to execute if expression === value2
        break;
    case value3:
        // Code to execute if expression === value3
        break;
    case valueN:
        // Code to execute if expression === valueN
        break;
    default:
        // Code to execute if no cases match
}


//* Example:
//? 1:
let day = 3;
switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number");  // Executes if no case matches.
}
// Output: Wednesday => Because day is 3.


//? 2:
let fruit = "banana";
switch (fruit) {
    case "apple":
        console.log("You selected apple.");
        break;
    case "banana":
        console.log("You selected banana.");
        break;
    case "orange":
        console.log("You selected orange.");
        break;
    default:
        console.log("Unknown fruit.");
}
// Output: You selected banana.


//? 3:
// You can group multiple cases together if they share the same code block.

let grade = "B";
switch (grade) {
    case "A":
    case "B":
        console.log("Excellent!");  // This will run for both A and B.
        break;
    case "C":
        console.log("Good job.");
        break;
    case "D":
    case "F":
        console.log("You need to improve.");
        break;
    default:
        console.log("Invalid grade.");
}
// Output: Excellent!