// Assignment Code
//define variables needed for password generator
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

//code for prompt to ask user for password requirements/ must be between 8-128 characters
function generatePassword() {
  var passwordLength = prompt(
    "Your password must be between 8-128 characters. How many characters would you like your password to be"
  );
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8-128 characters");
    return;
  }
  //code for confirm to ask user for password requirements/ must be between 8-128 characters
  var upperCaseConfirm = confirm(
    "Click OK to confirm including uppercase characters."
  );
  var lowerCaseConfirm = confirm(
    "Click OK to confirm including lowercase characters."
  );
  var numbersConfirm = confirm(
    "Click OK to confirm including numeric characters."
  );
  var specialCharactersConfirm = confirm(
    "Click OK to confirm including special characters."
  );
  //code for if user does not select any of the password requirements
  if (
    upperCaseConfirm === false &&
    lowerCaseConfirm === false &&
    numbersConfirm === false &&
    specialCharactersConfirm === false
  ) {
    alert("Must select at least one character type");
    return;
  }
  //code for if user selects all of the password requirements
  if (
    upperCaseConfirm === true &&
    lowerCaseConfirm === true &&
    numbersConfirm === true &&
    specialCharactersConfirm === true
  ) {
    var allCharacters = upperCase + lowerCase + numbers + specialCharacters;
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
      var random = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters[random];
    }
    return password;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
