// Problem URL: https://adventofcode.com/2020/day/10

// Reads a string from the input text file and assign it to a variable
const fs = require("fs");
const data = fs.readFileSync('dec10-input.txt', 'utf8');

// Create an array from the string, splitting at newlines
const lines = data.split('\n');

// Convert our array's strings to numbers and assign to a new variable
let adapters = [];
for (let line of lines) {
  adapters.push(Number(line));
}

// Sort the array numerically, using a compareFunction which retruns elements in ascending order
adapters.sort((a, b) => a - b);

// Initialize counters at 0
let singleJumps = 0;
let doubleJumps = 0;
let tripleJumps = 0;

// Initialize the comparison variable at the charging outlet's voltage
let currentJolts = 0;

// Increment the appropriate counters given the joltage difference between subsequent adapter pairs
for (let adapter of adapters) {
  if (adapter - currentJolts === 1) {
    singleJumps++;
  } else if (adapter - currentJolts === 2) {
    doubleJumps++;
  } else if (adapter - currentJolts === 3) {
    tripleJumps++;
  }
  currentJolts = adapter; // Update the comparison variable after each iteration
}

// Add an extra triple jomp for the 3J difference between your device and the highest rated adapter
tripleJumps++;

console.log(singleJumps * tripleJumps);