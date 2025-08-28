// signup.js
document.getElementById('continueBtn').addEventListener('click', function () {
    let inputField = document.getElementById('userInput').value;
    if (inputField) {
        alert(`Proceeding with: ${inputField}`);
    } else {
        alert("Please enter a phone number or email.");
    }
});
