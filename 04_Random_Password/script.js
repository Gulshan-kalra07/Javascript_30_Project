// Correct spelling of the variable
const passwordBox = document.getElementById('password');

// Declare a password length
const length = 12;

// Define characters for password
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbol = "@#$%&";

// Combine all characters into one string
const allchars = upperCase + lowerCase + number + symbol;

function createPassword() {
    // Initialize an empty password
    let password = "";

    // Add one character from each character set to ensure password contains all types
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    // Fill the rest of the password with random characters from allchars until length is reached
    while (password.length < length) {
        password += allchars[Math.floor(Math.random() * allchars.length)];
    }

    // Set the password in the password input box
    passwordBox.value = password;
}

// Get the button and add an event listener
const generatePasswordButton = document.getElementById('generate_password');
generatePasswordButton.addEventListener('click', function () {
    createPassword()
});


function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}

const copy_button = document.getElementById('copy_button');
copy_button.addEventListener('click', function () {
    copyPassword();
})