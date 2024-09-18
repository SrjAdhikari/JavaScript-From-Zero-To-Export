// Selecting DOM elements for future manipulation
const displayNumber = document.querySelector(".display-number"); // Displays the secret number or "?" initially
const checkBtn = document.querySelector(".check"); // Button to check the user's guess
const guessChance = document.querySelector(".chance"); // Displays remaining chances
const restartBtn = document.querySelector(".again"); // Button to restart the game
const userInput = document.querySelector(".guess-field"); // Input field for user guesses

// Game state variables
let chance = 20; // Initial number of chances (or score)
let highScore = 0; // To track the highest score achieved in the session
let secretNum = Math.floor(Math.random() * 20) + 1; // Generates a random secret number between 1 and 20

// Function to display a message in the ".message" element
const displayMessage = function (message) {
	document.querySelector(".message").textContent = message;
};

// Event listener for "Check" button
checkBtn.addEventListener("click", () => {
	// Get the player's input value, Convert user input to a number
	const userGuess = Number(userInput.value);

	// Handle case when no number is entered (i.e., userGuess is 0 or NaN)
	if (!userGuess) {
		displayMessage("⛔️ No Number!");
	}
	// If the user guesses the correct number
	else if (userGuess === secretNum) {
		displayMessage("🎉 Correct Number!"); // Show a success message indicating the player guessed correctly
		displayNumber.textContent = secretNum; // Reveal the secret number by updating the content of the 'display-number' element
		document.querySelector("body").style.backgroundColor = "#60b347"; // Change background color to green for success
		displayNumber.style.width = "30rem"; // Expand the number display width

		// Update the high score if the current score is higher
		if (chance > highScore) {
			// Update the high score to the current score (remaining chances)
			highScore = chance;

			// Display the updated high score in the UI
			document.querySelector(".highscore").textContent = highScore; // Update highscore display
		}
	}
	// If the guess is incorrect
	else {
		// Check if the player still has chances left (i.e., more than 1 chance)
		if (chance > 1) {
			// Display a hint message based on whether the guess was too high or too low
			displayMessage(
				userGuess > secretNum
					? "📈 Number is Too High!"
					: "📉 Number is Too Low!"
			);
			// Decrease the number of chances (remaining guesses) by 1
			chance--;

			// Update the displayed number of chances to reflect the new value
			guessChance.textContent = chance;
		}
		// If no chances are left, the player loses the game
		else {
			displayMessage("💥 You lost the game!"); // Display loss message
			guessChance.textContent = 0; // Set the remaining chances display to 0, as the game is over
		}
	}
});

// Event listener for "Again" button to restart the game
restartBtn.addEventListener("click", () => {
	chance = 20;
	secretNum = Math.floor(Math.random() * 20) + 1;

	// Reset the game UI to initial state
	displayMessage("Start Guessing...");
	guessChance.textContent = chance;
	displayNumber.textContent = "?";
	userInput.value = "";
	displayNumber.style.width = "15rem";
	document.querySelector("body").style.backgroundColor = "#222";
});
