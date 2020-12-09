// Problem URL: https://adventofcode.com/2020/day/4

// Reads a string from the input text file and assign it to a variable
const fs = require("fs");
const data = fs.readFileSync('dec4-input.txt', 'utf8');

// Create an array from the string variable, splitting at double newlines
const strArray = data.split('\n\n');

// Replace all single newlines with spaces and push to a new array. Not actually a necessary step actually
let strArrayClean = [];
for (let passport of strArray) {
  newPass = passport.replace(/\n/g, ' ');
  strArrayClean.push(newPass);
}

// Define the credentials we require each passport to contain
const creds = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

// Declare the result variable
let validPassports = 0;

for (let pass of strArrayClean) { // Loop through each passport in the array
  let credCount = 0; // Declare a credentials counter for each passport and assign it to 0
  for (let cred of creds) { // Loop over each element in creds
    if (pass.includes(cred)) { // If it is in the passport string...
      credCount++; // Increment credCount
    }
  }
  if (credCount === creds.length) { // If all credentials are in the passport
    validPassports++; // Increment the passport counter
  }
}

// Print the result variable
console.log(validPassports);