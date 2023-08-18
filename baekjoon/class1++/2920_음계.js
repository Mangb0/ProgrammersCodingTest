var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split(" ");
// var input = fs.readFileSync("stdin.txt").toString().split(" ");

let count = 0;
for (let i = 0; i < 8; i++) {
  if (input[i] < input[i + 1]) {
    count++;
  }
}

console.log(count === 7 ? "ascending" : count === 0 ? "descending" : "mixed");
