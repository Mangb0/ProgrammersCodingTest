var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
// var input = fs.readFileSync("./stdin.txt").toString().trim().split(" ");
console.log(input[0] === "" ? 0 : input.length);
