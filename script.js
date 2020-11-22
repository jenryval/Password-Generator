var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

var chosen = [];

// asking user password criteria
var upperCase = confirm("Insert uppercase letters?");
var lowerCase = confirm("Insert lowercase letters?");
var Symbols = confirm("Insert special characters?");
var numbers = confirm("Insert numbers?");

// Input
while((upperCase===false) && (lowerCase===false) && (Symbols===false) && (numbers===false)) {
alert ("Choose a specification:");
var upperCase = confirm("Insert uppercase letters?");
var lowerCase = confirm("Insert lowercase letters?");
var Symbols = confirm("Insert special characters?");
var numbers = confirm("Insert numbers?");
}

// password length 
var userLength = prompt ("How long would you like your password? Please choose between 8-128.");
while ((userLength < 8) || (userLength > 128)){
  alert("Please choose between 8-128.");
  userLength = prompt("How long would you like your password?");
} 
// array for pass criteria
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var Symbols = ["\"","!","#","$","%","&","\'","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","`","{","|","}","~"];
var Number = ["0","1","2","3","4","5","6","7","8","9"];

