// Problem URL: https://adventofcode.com/2020/day/8

// Reads a string from the input text file and assign it to a variable
const fs = require("fs");
const data = fs.readFileSync('dec8-input.txt', 'utf8');

// Create an array from the string, splitting at newlines
const lines = data.split('\n');

// Split each instruction into its operation and argument
let instructions = [];
for (let step of lines) {
  instructions.push(step.split(' '));
}

// Convert each string argument into a number
for (let step of instructions) {
  step[1] = Number(step[1]);
}

// Initialize our variables
let accumulator = 0;
let instructionsHit = [];
nextInstruction = 0

// Break the instructions loop when you hit an instruction index already logged
while (instructionsHit.indexOf(nextInstruction) === -1) {

  instructionsHit.push(nextInstruction); // Add the instruction index to the log

  if (instructions[nextInstruction][0] === 'acc') { // Add to the accumulator, then go to the next step
    accumulator += instructions[nextInstruction][1];
    nextInstruction++;
  } else if (instructions[nextInstruction][0] === 'jmp') { // Jump to a new step
    nextInstruction += instructions[nextInstruction][1];
  } else if (instructions[nextInstruction][0] === 'nop') { // Move directly to the next step
    nextInstruction++;
  }
}

console.log(accumulator);