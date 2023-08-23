var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim();

const N = +input;
let count = 0;

for (let i = 2; i <= N; i++) {
  if (i % 5 === 0) count++;
  if (i % 25 === 0) count++;
  if (i % 125 === 0) count++;
}

console.log(count);
