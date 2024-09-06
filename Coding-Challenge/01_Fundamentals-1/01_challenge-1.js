//* ****************************************************
//* Coding Challenge #1
//* ****************************************************


//! Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
//! BMI = mass / (height * height) (mass in kg and height in meter).

//? Your tasks:
//* 1. Store Mark's and John's mass and height in variables
//* 2. Calculate both their BMIs using the formula (you can even implement both versions)
//* 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

//? Test data:
//* Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
//* Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.


//? Task Implementation:
let markBodyMass = 78;
let markHeight = 1.69;

let johnBodyMass = 92;
let johnHeight = 1.95;

const markBMI = markBodyMass / (markHeight * markHeight);
const johnBMI = johnBodyMass / (johnHeight * johnHeight);
const markHigherBMI = markBMI > johnBMI;

console.log(markBMI);           // Output-> 27.309968138370508
console.log(johnBMI);           // Output-> 24.194608809993426
console.log(markHigherBMI);     // Output-> true