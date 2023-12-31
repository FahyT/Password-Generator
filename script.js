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


//helper function to check input
function checkTextInput (text) {
  while (text != "Y" || text != "N") {
    alert("Your password length must be between 8 and 128 characters. Please try again. ");
  }
}

// Function to prompt user for password options
function getPasswordOptions() {

  let pwOptions = {};
  let noOptionChosen = true;

  // get user password length, check for nonsense input
  pwOptions.length = parseInt(prompt("How long should your password be? (enter a number between 8 and 128): "));
  while (pwOptions.length > 128 || pwOptions.length < 8 || Number.isNaN(pwOptions.length)) {
    alert("Your password length must be a number between 8 and 128. Please try again. ");
    pwOptions.length = parseInt(prompt("How long should your password be? (enter a number between 8 and 128): "));
  }

  while (noOptionChosen) {

  // get user password options and check for nonsense input
    pwOptions.pwLowercase = prompt("Should the password use lower-case characters? Y/N: ").toUpperCase();
    while (pwOptions.pwLowercase != "Y" && pwOptions.pwLowercase != "N") {
      alert("You must enter Y or N. Please try again.");
      pwOptions.pwLowercase = prompt("Should the password use lower-case characters? Y/N: ").toUpperCase();
    }

    pwOptions.pwUppercase = prompt("Should the password use upper-case characters? Y/N: ").toUpperCase();
    while (pwOptions.pwUppercase != "Y" && pwOptions.pwUppercase != "N") {
      alert("You must enter Y or N. Please try again.");
      pwOptions.pwUppercase = prompt("Should the password use upper-case characters? Y/N: ").toUpperCase();
    }

    pwOptions.pwNumerals = prompt("Should the password use numerals? Y/N: ").toUpperCase();
    while ( pwOptions.pwNumerals != "Y" &&  pwOptions.pwNumerals != "N") {
      alert("You must enter Y or N. Please try again.");
      pwOptions.pwNumerals = prompt("Should the password use numerals? Y/N: ").toUpperCase();
    }

    pwOptions.pwSpecials = prompt("Should the password use special characters ? Y/N: ").toUpperCase();
    while (pwOptions.pwSpecials != "Y" && pwOptions.pwSpecials != "N") {
      alert("You must enter Y or N. Please try again.");
      pwOptions.pwSpecials = prompt("Should the password use special characters ? Y/N: ").toUpperCase();
    }

     //check at least one character type has been selected
    if (Object.values(pwOptions).includes("Y")) {
      noOptionChosen = false;
    } else {
      alert("You must pick at least one character type for your password. Please try again.")
    }
  }
 
  return pwOptions;

}

// Function for getting a random element from an array
function getRandom(arr) {
  let randomArr = arr[Math.floor(Math.random()*arr.length)];
  return randomArr;
}

// Function to generate password with user input. Only accepts pwOptions object as argument.
function generatePassword(pwOptions) {
  let pwCharArray = [];
  let password = "";

  //TODO: maybe switch / case ?
  if (pwOptions.pwLowercase == "Y") {
    pwCharArray.push(lowerCasedCharacters);
  }
  if (pwOptions.pwUppercase == "Y") {
    pwCharArray.push(upperCasedCharacters);
  } 
  if (pwOptions.pwNumerals == "Y") {
    pwCharArray.push(numericCharacters);
  } 
  if (pwOptions.pwSpecials == "Y") {
    pwCharArray.push(specialCharacters);
  } 

  let flatArr = pwCharArray.flat();

  for (let i = 0; i < pwOptions.length; i++) {
    password += getRandom(flatArr);
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword(getPasswordOptions());
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);