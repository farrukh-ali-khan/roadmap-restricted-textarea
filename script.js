// Get the textarea and character count elements
const textarea = document.getElementById("restricted-textarea");
const charCount = document.getElementById("char-count");

// Define maximum character limit
const maxChars = 250;

// Add event listener for input in textarea
textarea.addEventListener("input", () => {
  const currentLength = textarea.value.length;

  // Update the character count display
  charCount.textContent = `${currentLength} / ${maxChars}`;

  // Check if the character limit is reached
  if (currentLength >= maxChars) {
    textarea.classList.add("limit-reached"); // Add red border
    charCount.classList.add("limit-reached"); // Change text color to red
  } else {
    textarea.classList.remove("limit-reached"); // Remove red border
    charCount.classList.remove("limit-reached"); // Reset text color
  }
});
