// Password length prompt
var passwordLength = prompt('How long would you like your password to be? (Enter a number between 8 and 128)');

while (!(8 <= passwordLength && passwordLength <= 128)) {
  var passwordLength = prompt('Please enter a number between 8 and 128 for your password length');
}

// Character types prompt - create variables to hold the truthy/falsey values obtained through a function which gets user input
var lowercase = typeInput('lowercase');
var uppercase = typeInput('uppercase');
var numeric = typeInput('numeric');
var special = typeInput('special'); 

function typeInput (type) {
  answer = confirm(`Would you like to include ${type} characters in your password?`);
  return answer;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(passwordLength, lowercase, uppercase, numeric, special);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate a random password based off the user given criteria
function generatePassword(length, lowercase, uppercase, numeric, special) {
  var characters = '';
  var password = '';

  if (lowercase) {
    characters += 'abcdefghijklmnopqrstuvwxyz';
  }

  if (uppercase) {
    characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  if (numeric) {
    characters += '0123456789';
  }

  if (special) {
    characters += '!"#$%&\'()*+,-./:;<=>?\\@[]^_`{|}~'
  }

  // Generate a length number of random chars from the characters string and add them onto the password string
  for (var i = 0; i < length; i++) {
    // Generate a random number between 0 (inclusive) and 1 (exclusive) and multiply it by the length of the characters string to produce a random index of the characters string
    // Round down that number to the nearest integer which will always be between 0 (inclusive) and the last index of the characters string (inclusive) 
    password += characters[Math.floor(Math.random() * characters.length)];
  }

  return password;
}