// Declaring variables to manipulate the DOM with

var passwordText = document.getElementById("password");
var passLength = document.getElementById('length');
var passUpper = document.getElementById('uppercase');
var passLower = document.getElementById('lowercase');
var passNumbers = document.getElementById('numbers');
var passSpecial = document.getElementById('special');
var generateBtn = document.getElementById("generate");

/* Creating an object used in the function for generating a password, with values of the object being the functions used for getting random lowercase letters, random uppercase letters, random numbers, and random special characters.
*/

var randomPass = {
  lower: randomLower,
  upper: randomUpper,
  number: randomNumber,
  special: randomSpecial,
};

// Add event listener to generate button
generateBtn.addEventListener("click", () => {
  var length = passLength.value;
  var hasUpper = passUpper.checked;
  var hasLower = passLower.checked;
  var hasNumber = passNumbers.checked;
  var hasSpecial = passSpecial.checked;

  passwordText.innerText = generatePassword(length, hasUpper, hasLower, hasNumber, hasSpecial);
});

// Function for generating a password
function generatePassword(length, upper, lower, number, special) {

  let passResult = '';

  var optionsCount = upper + lower + number + special;

  var optionsArr = [{upper}, {lower}, {number}, {special}].filter(
    check => Object.values(check)[0]
  );

  if(optionsCount === 0) {
    return '';
  }

  for(let i = 0; i < length; i += optionsCount) {
    optionsArr.forEach(option => {
      var passName = Object.keys(option)[0];

      passResult += randomPass[passName]();
    })
  }

  var finalPass = passResult.slice(0, length);

  return finalPass;
}

// Function for generating a random lowercase letter

function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// Function for generating a random uppercase letter

function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// Function for generating a random number

function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// Function for generating a random special character

function randomSpecial() {
  const special = '!"#$%&()*+,-./:;<=>?@[]^_`{|}~'
  return special[Math.floor(Math.random() * special.length)];
}