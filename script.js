// // DOM elements
var generateBtn = document.getElementById("button");
var generateLower = document.getElementById("lower");
var generateUpper = document.getElementById("Upper");
var generateNumber = document.getElementById("Number");
var generateSymbols = document.getElementById("Symbles");
var generateLength = document.getElementById("Length");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

var randomFunctions = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbols
};

// // Add event listener to Upper button
generateBtn.addEventListener("click", function(){
  var length =  +generateLength.value;
  var hasLower = generateLower.checked;
  console.log(hasLower)
});
  


// random character funcions/numbers

function getRandomLower(){
 return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
 }

 function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
 }

 function getRandomSymbols(){
   var symbols = "!@#$%^&*(){}=+/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
 }
console.log(getRandomSymbols())

   