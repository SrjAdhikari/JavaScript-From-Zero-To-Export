//* ****************************************************
//* Coding Challenge #3
//* ****************************************************


//* Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the alculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

//? Your tasks:
//* 1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith).
//* 2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
//* 3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!".

//? Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall. 


//? Task Implementation:
const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,

    // Method to calculate BMI (BMI = mass / height^2) and store it in the object
    calcBMI: function() {
        this.bmi =  this.mass / (this.height * this.height);    // Calculate BMI and store it in the 'bmi' property
        return this.bmi;                                        // Return the BMI
    }
};

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,

    // Method to calculate BMI (BMI = mass / height^2) and store it in the object
    calcBMI: function() {
        this.bmi =  this.mass / (this.height * this.height);    // Calculate BMI and store it in the 'bmi' property
        return this.bmi;                                        // Return the BMI
    }
};

// const markBMI = mark.calcBMI();
// const johnBMI = john.calcBMI();

// const msg = (markBMI > johnBMI)
//     ? `${mark.fullName}'s BMI (${markBMI}) is higher than ${john.fullName}'s (${johnBMI})!`
//     : `${john.fullName}s BMI (${johnBMI}) is higher than ${mark.fullName}'s (${markBMI})!`;


// Call calcBMI() for both Mark and John to calculate and store their BMI values
mark.calcBMI();
john.calcBMI();

const msg = (mark.bmi > john.bmi) 
    ? `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!` 
    : `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`;
console.log(msg);
console.log("----------------------------------------------------------");