let fs = require("fs");
let data = fs.readFileSync('dec1-input.txt', 'utf8');

strArray = data.split('\n');

numArray = []
for (let str of strArray) {
  numArray.push(Number(str));
}

numSet = new Set(numArray)

let num1
for (let num of numSet) {
  if (numSet.has(2020-num)) {
    num1 = num;
    break;
  }
}

console.log(num1*(2020-num1));