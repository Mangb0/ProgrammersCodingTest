var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");
// var input = fs.readFileSync("./stdin.txt").toString().split("\n");
var a = input[0];
var b = parseInt(input[1]);
console.log(a[b - 1]);
