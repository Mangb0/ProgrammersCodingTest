var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");
// var input = fs.readFileSync("./stdin.txt").toString().split("\n");

const N = +input[0];

const array = input.splice(1, N).sort((a, b) => {
  if (a.length === b.length) {
    return a > b ? 1 : -1;
  }
  return a.length - b.length;
});

const answer = [];
array.forEach((v) => {
  if (!answer.includes(v)) answer.push(v);
});

console.log(answer.join("\n"));
