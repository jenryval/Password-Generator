var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

var generate = [];

// asking user password criteria
var upperCase = confirm("Insert uppercase letters?");
var lowerCase = confirm("Insert lowercase letters?");
var Symbols = confirm("Insert Symbols characters?");
var numbers = confirm("Insert numbers?");

// Input
if((!upperCase) && (!lowerCase) && (!Symbols) && (!numbers)) {
alert ("Please choose one!");
var upperCase = confirm("Insert uppercase letters?");
var lowerCase = confirm("Insert lowercase letters?");
var numbers = confirm("Insert numbers?");
var Symbols = confirm("Insert Symbols characters?");

}

// password length 
var PasswordLength = prompt ("choose characters between 8 and 128.");
if((PasswordLength < 8) || (PasswordLength > 128)){
  alert("Please choose between parameters.");
  PasswordLength = prompt("How long would you like your password?");
} 
// Variables for characters
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var Symbols = ["\"","!","#","$","%","&","\'","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","`","{","|","}","~"];
var Number = ["0","1","2","3","4","5","6","7","8","9"];


// if statement to generate
if (upperCase) {
  for(var i = 0; i < upperCase.length; i++ ){
    generate.push(upperCase[i]);
  }
}
if(lowerCase){
  for(var i=0; i < lowerCase.length; i++){
    generate.push(lowerCase[i]);
  }
}
if(Symbols){
  for(var i=0; i < Symbols.length; i++){
    generate.push(Symbols[i]);
  }
}
if(Number){
  for(var i=0; i < Number.length; i++){
    generate.push(Number[i]);
  }
}
var finalPassword = [];
for(i=0; i < PasswordLength; i++){
  finalPassword.push(generate[Math.floor(Math.random() * generate.length)]);
}

return(finalPassword.join(""));

}
// event listener for submit
generateBtn.addEventListener("click", writePassword);