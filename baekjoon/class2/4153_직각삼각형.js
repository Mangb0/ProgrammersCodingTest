var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
var input = fs.readFileSync("./stdin.txt").toString().trim().split("\n");

input.pop();
input.forEach((v) => {
  const [a, b, c] = v
    .split(" ")
    .map((v) => parseInt(v))
    .sort((a, b) => a - b);
  console.log(a ** 2 + b ** 2 === c ** 2 ? "right" : "wrong");
});
