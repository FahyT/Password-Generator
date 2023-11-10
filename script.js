// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

  let pw_length = parseInt(prompt("How long should your password be? (enter a number between 8 and 128): "));

  while ((pw_length > 128) || (pw_length < 8)) {
    alert("Your password length must be between 8 and 128 characters. Please try again. ");
    pw_length = parseInt(prompt("How long should your password be? (enter a number between 8 and 128): "));
  }

  let character_options = [];

  character_options.push(prompt("Should the password use lower-case characters? Y/N: "));
  character_options.push(prompt("Should the password use upper-case characters? Y/N: ")); 
  character_options.push(prompt("Should the password use numerals? Y/N: "));
  character_options.push(prompt("Should the password use special characters ? Y/N: "));
  
  // check for nonsense Input
  // check at least one character type has been selected

  let password_options = {length: pw_length, char_options: character_options};

  return password_options;  


}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);