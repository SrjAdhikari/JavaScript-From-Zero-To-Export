//* ****************************************************
//* String Practice
//* ****************************************************


//* 1. Write a function that inform weather the seat of a flight is middle or not. Middle seat is "B" and "E".
const middleSeat = function(seat) {
    // Get the last character of the string
    const lastChar = seat.slice(-1);

    // Check if the last character is "B" or "E"
    if(lastChar === "B" || lastChar === "E") {
        console.log("You got a middle seat 😒");
    }
    else {
        console.log("You got lucky 😎");
    }
};

middleSeat("11B");
middleSeat("23A");
middleSeat("22E");
middleSeat("9C");


//* ****************************************************

//* 2. Write a function that fix the capitalization of passenger names.
const fixCapitalize = function(name) {
    const lowerName = name.toLowerCase();
    const correctName = lowerName[0].toUpperCase() + lowerName.slice(1);
    console.log(correctName);
}

fixCapitalize("suraj"); // Output -> Suraj
fixCapitalize("aDam");  // Output -> Adam
fixCapitalize("jOHN");  // Output -> John


//* ****************************************************

//* 3. Write a function that compare the user input email with the stored email.
const checkEmail = function(email, storedEmail) {
    if(email === storedEmail) {
        console.log(`Email ${email} is verified`);
    }
    else {
        console.log(`Email is under verification......`);
        const lowerEmail = email.toLowerCase();
        const logInEmail = lowerEmail.trim();

        if(logInEmail === storedEmail) {
            console.log(`Your email is matched.`);
        }
    }
};

checkEmail("Suraj123@Gmail.com", "suraj123@gmail.com");
checkEmail("user123@gmail.com", "user123@gmail.com");


//* ****************************************************

//* 4. Write an function that check if a current plane is the part of new Airbus Family.
const checkPlane = function(plane) {
    if(plane.startsWith("Airbus") && plane.endsWith("neo")) {
        console.log(`"${plane}" is part of new Airbus Family`);
    }
    else {
        console.log(`"${plane}" is not part of new Airbus Family`); 
    }
};

checkPlane("Airbus A320neo");
checkPlane("Boeing 747");
checkPlane("Airbus A380");


//* ****************************************************

//* 5. Write a function that check the baggage of passenger and inform if it is allowed to chekin or not.
const checkBaggage = function(item) {
    const baggage = item.toLowerCase();
    if(baggage.includes("knife") || baggage.includes("gun")) {
        console.log("You are NOT allowed to board");
    }
    else {
        console.log("Welcome to board!");
    }
};

checkBaggage("I have a laptop, some food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");


//* ****************************************************

//* 6. Write a function that accept multiple name as a parameter and capatialize the first letter of each name.
const capatializeName = function(name) {
    const names = name.split(" ");  // Split the string into an array of words
    const capNames = [];            // Empty array to store the capitalized words

    for(const n of names) {
        // Push the capitalized word to the 'capNames' array
        // n[0].toUpperCase() capitalizes the first letter of the word
        // n.slice(1) keeps the rest of the word unchanged
        capNames.push(n[0].toUpperCase() + n.slice(1));

        // OR ↓
        // Replaces the first character of the word with its uppercase version
        // capNames.push(n.replace(n[0], n[0].toUpperCase()));
    }
    // Join the capitalized words into a single string separated by spaces and log the result
    console.log(capNames.join(" "));
};

capatializeName("jessica adam ann smith davis");
capatializeName("suraj adhikari");


//* ****************************************************

//* 7. Write a functio that accept a number and mask the digits except the last four.
const maskCreditCard = function(number) {
    const lastFourDigit = number.slice(-4);
    const maskedNumber = lastFourDigit.padStart(number.length, "*");
    console.log(maskedNumber);
}

maskCreditCard("1234567890123456");         // Output -> ************3456
maskCreditCard("1234567890122981");         // Output -> ************2981
maskCreditCard("123456789012345358964");    // Output -> *****************8964

//* ****************************************************