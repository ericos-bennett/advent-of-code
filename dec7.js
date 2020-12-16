// Problem URL: https://adventofcode.com/2020/day/7

// Reads a string from the input text file and assign it to a variable
const fs = require("fs");
const data = fs.readFileSync('dec7-input.txt', 'utf8');

// Create an array from the string, splitting at newlines
const ruleList = data.split('\n');

// Split the list of rules into 2 elements - the type of bag and the string of its containing bags
const ruleListSplit = [];
for (let rule of ruleList) {
  ruleListSplit.push(rule.split(' bags contain '));
}

// Establish the initial search critera
let canContain = ['shiny gold'];

// Create an array of unique possible bags
let possibleBags = [];

/* Loop until we only find bags that can't be contained by any others
This would be an infinite loop if the shiny gold's parent bags could also be its children */
while (canContain.length > 0) {
  const canContainDirectly = [];
  for (let rule of ruleListSplit) { // Looking for a match between each bag rule
    for (let bag of canContain) { // And each bag in our search criteria
      if (rule[1].includes(bag)) {
        canContainDirectly.push(rule[0]); // Push to this iteration's results
      }
    }
  }
  for (let bag of canContainDirectly) { // If the bag doesn't already exist in the output, add it
    if (possibleBags.indexOf(bag) == -1) {
      possibleBags.push(bag);
    }
  }
  canContain = canContainDirectly; // Update the search criteria to the last iteration's results
}

// Log the count of unique bags found
console.log(possibleBags.length);