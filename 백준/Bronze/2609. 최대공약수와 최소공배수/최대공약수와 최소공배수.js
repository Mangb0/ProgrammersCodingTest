var fs = require("fs");
var input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .toString()
  .trim()
  .split(" ")
  .map((v) => parseInt(v));

const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

const lcm = (a, b) => {
  return (a * b) / gcd(a, b);
};

console.log(gcd(input[0], input[1]), lcm(input[0], input[1]));
