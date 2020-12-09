// Problem URL: https://adventofcode.com/2020/day/3

// Reads a string from the input text file and assign it to a variable
const fs = require("fs");
const data = fs.readFileSync('dec3-input.txt', 'utf8');

// Create an array from the string variable, splitting at newlines
const strArray = data.split('\n');

// Declare our counter variable
let treesHit = 0;

// Loop through each row on the slope
for (let row = 0; row < strArray.length; row++) {
  let col = (3 * row) % strArray[1].length; // Slope column is thrice the row index, modulo the width of the repeating section
  if (strArray[row][col] === '#') { // If we hit a hash, increment the counter
    treesHit++;
  }
}

// Print the final answer
console.log(treesHit);