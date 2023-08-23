var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();

const array = input.map((v) => v.split(" ").map((k) => +k));

array.sort((a, b) => {
  return a[0] - b[0] === 0 ? a[1] - b[1] : a[0] - b[0];
});

console.log(array.map((v) => v.join(" ")).join("\n"));
