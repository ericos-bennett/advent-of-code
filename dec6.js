// Problem URL: https://adventofcode.com/2020/day/6

// Reads a string from the input text file and assign it to a variable
const fs = require("fs");
const data = fs.readFileSync('dec6-input.txt', 'utf8');

// Create an array from the string, splitting at double newlines (distinguishing travel groups)
const strArray = data.split('\n\n');

// Remove all single newlines and push to a new array
let strArrayClean = [];
for (let form of strArray) {
  newForm = form.replace(/\n/g, '');
  strArrayClean.push(newForm);
}

let totalCount = 0; // Declare the output count

for (let form of strArrayClean) { // Loop through each group's collective answers
  let uniqueChars = ''; // Set an empty string for the unique 'yes' answers
  for (let char of form) { // Loop through each character in the group's answers
    if (uniqueChars.indexOf(char) === -1) { // If the character isn't already in uniqueChars
      uniqueChars += char; // ...Concatenate it to uniqueChars
    }
  }
  totalCount += uniqueChars.length; // Add the count of each group's unique 'yes' answers to the total
}

console.log(totalCount);
