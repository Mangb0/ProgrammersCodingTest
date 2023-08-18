var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split(" ");
// var input = fs.readFileSync("./stdin.txt").toString().split(" ");
console.log(input.map((v) => parseInt(v) ** 2).reduce((a, b) => a + b) % 10);
