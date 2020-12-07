// Problem URL: https://adventofcode.com/2020/day/2

// Reads a string from the input text file and assign it to a variable
const fs = require("fs");
const data = fs.readFileSync('dec2-input.txt', 'utf8');

// Create an array from the string variable, splitting at newlines
const strArray = data.split('\n');

// Creates an array of arrays variable in which each element in the string array is split by by '-', ': ', ' ' delimiters
let arrayOfArrays = [];
for (let str of strArray) {
  arrayOfArrays.push(str.split('-').join(',').split(': ').join(',').split(' ').join(',').split(','));
}

// Declares the answer variable and sets it to 0
let validPasswords = 0;

// Loops through each item in the password/policy list
for (let passEntry of arrayOfArrays) {
  let charCount = 0;
  for (let char of passEntry[3]) { // Loops through each character in the password and counts how many match with the policy key character
    if (char === passEntry[2]) {
      charCount++;
    }
  }
  if (charCount >= passEntry[0] && charCount <= passEntry[1]) { // If the policy key character exists in the password within the specified range, increment the valid passwords
    validPasswords++;
  }
}
// Prints the number of passwords (answer variable)
console.log(validPasswords);