var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input.shift();
const array = input.map((v) => v.split(" ")).sort((a, b) => a[0] - b[0]);

console.log(array.map((v) => v.join(" ")).join("\n"));
