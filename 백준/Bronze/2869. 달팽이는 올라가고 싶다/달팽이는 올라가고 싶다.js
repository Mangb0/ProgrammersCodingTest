var fs = require("fs");
var input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => parseInt(v));

const [A, B, V] = input;

console.log(Math.ceil((V - B) / (A - B)));
