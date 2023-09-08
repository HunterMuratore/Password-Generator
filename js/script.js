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
  answer = prompt(`Would you like to include ${type} characters in your password? (Enter Yes or No only)`).toLowerCase();

  while(answer !== 'yes' && answer !== 'no') {
    answer = prompt('Please retype your answer using only Yes or No').toLowerCase();
  }

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
  var characters = ' !"#$%&\'()*+,-./:;<=>?\\@[]^_`{|}~'

  

  for (var i = 0; i <= length; i++) {

  }
}