var generateLower = document.getElementById("generateLower");
var generateUpper = document.getElementById("generateUpper");
var generateNumber = document.getElementById("generateNumber");
var generateSymbols = document.getElementById("generateSymbols");

var button = document.getElementById("generate")

var UpperCaseCharCodes = CharacterValue(65, 90)
var LowerCaseCharCodes = CharacterValue(97, 122)
var NumberCaseCharCodes = CharacterValue(48, 57)
var SymbolsCaseCharCodes = CharacterValue(35, 47).concat(
  CharacterValue(58, 64))

button.addEventListener("click", e => {
  e.preventDefault()
  var generateUpper = Prompt("do you want to include Upper Case Letters?");
  var generateLower = Prompt("do you want to include Lower Case Letters?");
  var generateSymbols = Prompt("do you want to include Symblos?");
  var generateNumber = Prompt("do you want to include Numbers?");
  var password = generatePassword(generateLower, generateUpper, generateNumber, generateSymbols);
})

function generatePassword(generateLower, generateUpper, generateNumber, generateSymbols) {
  console.log(UpperCaseCharCodes)
}

function CharacterValue(low, high) { 
  var array =[]
  for (i = low; i<=high; i++){
    array.push(i)
  }
  return array
}


































// // // DOM elements
// var generateBtn = document.getElementById("button");
// var generateLower = document.getElementById("lower");
// var generateUpper = document.getElementById("Upper");
// var generateNumber = document.getElementById("Number");
// var generateSymbols = document.getElementById("Symbles");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// var randomFunctions = {
//   lower: getRandomLower,
//   upper: getRandomUpper,
//   number: getRandomNumber,
//   symbol: getRandomSymbols
// };