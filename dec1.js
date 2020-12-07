// Problem URL: https://adventofcode.com/2020/day/1

// Reads a string from the input text file and assign it to a variable
const fs = require("fs");
const data = fs.readFileSync('dec1-input.txt', 'utf8');

// Create an array from the string variable, splitting at newlines
const strArray = data.split('\n');

// Converts the string array into a number array
let numArray = []
for (let str of strArray) {
  numArray.push(Number(str));
}

// Declares a new set with all the values in the number array
const numSet = new Set(numArray)

// Loops through the number array and checks whether (2020-num) exists in the set. If a number does, assign it to num1
let num1
for (let num of numSet) {
  if (numSet.has(2020-num)) {
    num1 = num;
    break;
  }
}

// Prints the product of num1 and (2020-num1), the answer to this question
console.log(num1*(2020-num1));