// Problem URL: https://adventofcode.com/2020/day/9

// Reads a string from the input text file and assign it to a variable
const fs = require("fs");
const data = fs.readFileSync('dec9-input.txt', 'utf8');

// Create an array from the string, splitting at newlines
const lines = data.split('\n');

// Convert our array's strings to numbers and assign to a new variable
let nums = [];
for (let line of lines) {
  nums.push(Number(line));
}

// Declare an array of the last 25 numbers and initialize it
let last25 = [];
for (i = 0; i < 25; i++) {
  last25.push(nums[i])
}

// Declare the testing index and initialize it where we will start
let nextNumberIndex = 25;

// Declare the success variable, assign it to true so that the loop starts
let numWorks = true;

while (numWorks === true) {
  numWorks = false;
  for (let num1 of last25) { // Loop through each pair of numbers in the last 25
    for (let num2 of last25) {
      if (num1 + num2 == nums[nextNumberIndex] && num1 != num2) { // If they meet the criteria
        last25.shift(); // Remove the first element
        last25.push(nums[nextNumberIndex]); // And push out tested number to the array
        nextNumberIndex++; // Increment the index we are testing
        numWorks = true; // Allow the while loop to restart
      }
    }
  }
}

console.log(nums[nextNumberIndex]);