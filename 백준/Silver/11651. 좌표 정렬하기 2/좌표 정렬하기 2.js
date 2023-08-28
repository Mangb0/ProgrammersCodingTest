var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input.shift();
const arr = input.map((v) => v.split(" ").map((k) => +k));

console.log(
  arr
    .sort((a, b) => a[1] - b[1] || a[0] - b[0])
    .map((v) => v.join(" "))
    .join("\n")
);
