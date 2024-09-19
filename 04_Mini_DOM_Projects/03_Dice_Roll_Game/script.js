// Selecting DOM elements for both players, score and current score displays
const playerZeroElement = document.querySelector(".player--0"); // Player 1 container
const playerOneElement = document.querySelector(".player--1"); // Player 2 container

// Selecting elements that display each player's total score
const scoreZeroElement = document.querySelector("#score--0"); // Player 1 total score
const scoreOneElement = document.querySelector("#score--1"); // Player 2 total score

// Selecting elements for each player's current score (the score for the current turn)
const currentZeroElement = document.querySelector("#current--0"); // Player 1 current score
const currentOneElement = document.querySelector("#current--1"); // Player 2 current score

// Selecting the dice element that displays the image of the rolled dice
const diceElement = document.querySelector(".dice");

// Selecting buttons for the game's functionality: New Game, Roll Dice, and Hold
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Defining variables to keep track of the game state
let scores, currentScore, activePlayer, playing;

// Function to initialize the game, setting up default values
const initialiseGame = function () {
	// Starting conditions
	scores = [0, 0];
	currentScore = 0;
	activePlayer = 0; // Set Player 0 as the active player
	playing = true; // Boolean to check if the game is still ongoing

	// Reset the UI: set the current and total scores to 0 for both players
	currentZeroElement.textContent = 0;
	currentOneElement.textContent = 0;
	scoreZeroElement.textContent = 0;
	scoreOneElement.textContent = 0;

	// Hide the dice at the start of the game
	diceElement.classList.add("hidden");

	// Remove winner class from both players
	playerZeroElement.classList.remove("player--winner");
	playerOneElement.classList.remove("player--winner");

	// Set Player 0 as active and remove active state from Player 1
	playerZeroElement.classList.add("player--active");
	playerOneElement.classList.remove("player--active");
};
// Call function to initialize game
initialiseGame();

// Function to switch the active player
const switchPlayer = function () {
	// Reset current score of the active player
	document.getElementById(`current--${activePlayer}`).textContent = 0;

	// Reset current score
	currentScore = 0;

	// Switch the active player (from 0 to 1, or 1 to 0)
	activePlayer = activePlayer === 0 ? 1 : 0;

	// Toggle the 'active' class to visually show which player is active
	playerZeroElement.classList.toggle("player--active");
	playerOneElement.classList.toggle("player--active");
};

// Event listener for the Roll Dice button
btnRoll.addEventListener("click", () => {
	// Only allow dice rolling if the game is still active
	if (playing) {
		// 1. Generate a random dice roll between 1 and 6
		const diceNum = Math.floor(Math.random() * 6) + 1;

		// 2. Display the corresponding dice image
		diceElement.classList.remove("hidden"); // Show the dice
		diceElement.src = `./assets/dice-${diceNum}.png`; // Update dice image based on the roll

		// 3. Check the result of the dice roll
		// If dice roll is not 1, add dice number to current score
		if (diceNum !== 1) {
			// Accumulate the dice roll value to the current score
			currentScore += diceNum;

			// Update the UI to reflect the new current score
			document.getElementById(`current--${activePlayer}`).textContent =
				currentScore;
		}
		// If a 1 is rolled, switch to the next player and reset the current score
		else {
			switchPlayer();
		}
	}
});

// Event listener for the 'Hold' button
btnHold.addEventListener("click", () => {
	// Only allow holding the score if the game is still active
	if (playing) {
		// 1. Add current score to the active player's total score
		scores[activePlayer] += currentScore;

		// Update the UI to reflect the total score of the active player
		document.getElementById(`score--${activePlayer}`).textContent =
			scores[activePlayer];

		// 2. Check if the active player has won (reached a score of 100 or more)
		if (scores[activePlayer] >= 100) {
			// 2.1 End the game and declare the active player as the winner
			playing = false;
			diceElement.classList.add("hidden"); // Hide the dice as the game ends

			// Mark the active player as winner
			document
				.querySelector(`.player--${activePlayer}`)
				.classList.add("player--winner");

			// Remove active player state
			document
				.querySelector(`.player--${activePlayer}`)
				.classList.remove("player--active");
		} else {
			// 2.2 If score < 100, switch to the next player
			switchPlayer();
		}
	}
});

// Event listener for the 'New Game' button, reset game state
btnNew.addEventListener("click", initialiseGame);
