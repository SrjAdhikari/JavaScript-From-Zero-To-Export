//* ****************************************************
//* Break And Continue In JavaScript
//* ****************************************************


//* What is Break And Continue Keyword ?
//? Break: Immediately exits the loop and skips the remaining iterations.
//? Continue: Skips the current iteration and moves to the next iteration.


//* Syntax:
//? break;
//? continue;


//* Example of Break And Continue Keyword:
//? 1: Print number from 1 to 10 and break the loop if the number is 5
for (let i = 1; i <= 10; i++) {
    if (i === 5)
        break;      // Break the loop when i is equal to 5
    console.log(`current index: ${i}`);
}

// Output:
// current index: 1
// current index: 2
// current index: 3
// current index: 4


//* Explanation:
//? The loop starts at i = 1 and prints each value of i.
//? When i reaches 5, the break statement is triggered, and the loop terminates immediately.


//* ****************************************************

//? 2: Print number from 1 to 10 and continue the loop if the number is 5
for (let i = 1; i <= 10; i++) {
    if (i === 5)
        continue;   // Skip the rest of the code when i is equal to 5
    console.log(`current index: ${i}`);
}

// Output:
// current index: 1
// current index: 2
// current index: 3
// current index: 4
// current index: 6
// current index: 7
// current index: 8
// current index: 9
// current index: 10


//* Explanation:
//? The loop starts at i = 1 and prints each value of i.
//? When i reaches 5, the continue statement skips that iteration, and 5 is not printed.
//? The loop continues with the next value of i, which is 6.