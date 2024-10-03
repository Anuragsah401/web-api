// Get the button and text elements
const changeTextBtn = document.getElementById('click-btn');
const textElement = document.getElementById('change-txt');

// Add event listener to button
changeTextBtn.addEventListener('click', function() {
    textElement.textContent = "The text has been changed!";
});