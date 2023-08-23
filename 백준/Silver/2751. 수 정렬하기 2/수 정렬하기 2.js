var fs = require("fs");
var input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

input.shift();
input = input.sort((a, b) => a - b).join("\n");
console.log(input);
