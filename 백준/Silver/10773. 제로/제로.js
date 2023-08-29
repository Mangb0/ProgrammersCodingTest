var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const K = input.shift();
const answer = [];
for (let i = 0; i < K; i++) {
  if (+input[i] === 0) {
    answer.pop();
  } else answer.push(+input[i]);
}

console.log(answer.reduce((acc, cur) => acc + cur, 0));
