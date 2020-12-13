// Problem URL: https://adventofcode.com/2020/day/5

// Reads a string from the input text file and assign it to a variable
const fs = require("fs");
const data = fs.readFileSync('dec5-input.txt', 'utf8');

// Create an array from the string variable, splitting at double newlines
const strArray = data.split('\n');

// Translate the array into an array of binary strings
binaryArray = [];
for (let pass of strArray) {
  binaryPass = ''
  for (let char of pass) {
    if (char === 'B' || char === 'R') {
      binaryPass += '1';
    } else if (char === 'F' || char === 'L') {
      binaryPass += '0';
    }
  }
  binaryArray.push(binaryPass);
}

// Computes an array of [row, col] pairs for each boarding pass 
let passCoords = [];
for (let pass of binaryArray) {
  let coord = [];
  let row = 0;
  let col = 0;
  for (let i = 0; i < 7; i++) {
    row += (pass[i] * (2 ** (6 - i)));
  }
  for (let k = 0; k < 3; k++) {
    col += (pass[k + 7] * (2 ** (2 - k)));
  }
  coord.push(row);
  coord.push(col);
  passCoords.push(coord);
}

// Calculates an array of all seat IDs
let seatIds = [];
for (let pass of passCoords) {
  let seatId = (pass[0] * 8 + pass[1]);
  seatIds.push(seatId);
}

// Determines the highest seat ID in the array
let maxId = 0;
for (let id of seatIds) {
  if (id > maxId) {
    maxId = id;
  }
}

console.log(maxId); // Prints the answer (highest seat ID)