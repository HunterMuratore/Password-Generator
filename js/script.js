// Password length prompt
var passwordLength = prompt('How long would you like your password to be? (Enter a number between 8 and 128)');

while (!(8 <= passwordLength && passwordLength <= 128)) {
  var passwordLength = prompt('Please enter a number between 8 and 128 for your password length');
}

// Character types prompt - create an array and a function to assign their responses to the correct index of the array
var characterTypes = [['lowercase'], ['uppercase'], ['numeric'], ['special']];

characterTypes[0][1] = typeInput('lowercase');
characterTypes[1][1] = typeInput('uppercase');
characterTypes[2][1] = typeInput('numeric');
characterTypes[3][1] = typeInput('special'); 

function typeInput (type) {
  answer = confirm(`Would you like to include ${type} characters in your password?`);
  return answer;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(passwordLength, characterTypes[0][1], characterTypes[1][1], characterTypes[2][1], characterTypes[3][1]);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate a random password based off the user given criteria
function generatePassword(length, lowercase, uppercase, numeric, special) {
  var characters = '';
  var password = '';

  if (lowercase === true) {
    characters += 'abcdefghijklmnopqrstuvwxyz';
  }

  if (uppercase === true) {
    characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  if (numeric === true) {
    characters += '0123456789';
  }

  if (special === true) {
    characters += '!"#$%&\'()*+,-./:;<=>?\\@[]^_`{|}~'
  }

  // Generate a length number of random chars from the characters string and add them onto the password string
  for (var i = 0; i < length; i++) {
    // Generate a random number between 0 (inclusive) and 1 (exclusive) and multiply it by the length of the characters string to produce a random index of the characters string
    // Round down the number to the nearest integer which will always be between 0 (inclusive) and the last index of the characters string (inclusive) 
    password += characters[Math.floor(Math.random() * characters.length)];
  }

  return password;
}