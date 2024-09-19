// Select modal, overlay, and close button elements from the DOM
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const showModal = document.querySelectorAll(".show-modal");
const closeModal = document.querySelector(".close-modal");

// Loop through each "show-modal" button and add a click event listener
// When clicked, the modal and overlay will be shown by removing the 'hidden' class
for (let i = 0; i < showModal.length; i++) {
	showModal[i].addEventListener("click", () => {
		// Remove "hidden" class to display the modal and overlay when button is clicked
		modal.classList.remove("hidden");
		overlay.classList.remove("hidden");
	});
}

// Function to hide modal and overlay by adding "hidden" class
const hideModal = () => {
	modal.classList.add("hidden");
	overlay.classList.add("hidden");
};

// Add event listener to the close button to hide modal on click
closeModal.addEventListener("click", hideModal);

// Add event listener to the overlay to hide modal on click (outside modal)
overlay.addEventListener("click", hideModal);

// Add event listener to the document to listen for the 'Escape' key press
// If the modal is visible and the 'Escape' key is pressed, the modal is hidden
document.addEventListener("keydown", (event) => {
	if (event.key === "Escape" && !modal.classList.contains("hidden")) {
		hideModal();
	}
});
