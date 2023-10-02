// JavaScript code to animate the text
const movingText = document.querySelector('.moving-text');
const columnWidth = document.querySelector('.col-md').offsetWidth;

// Calculate the initial position of the text
const initialPosition = -movingText.offsetWidth;

// Set the initial position
movingText.style.left = `${initialPosition}px`;

// Function to move the text
function moveText() {
    const currentPosition = parseFloat(getComputedStyle(movingText).left);
    if (currentPosition > columnWidth) {
        movingText.style.left = `${initialPosition}px`;
    } else {
        movingText.style.left = `${currentPosition + 1}px`; // Adjust the speed by changing the increment value
    }
}

// Start the animation
setInterval(moveText, 4); // Adjust the interval for smoother or faster animation
