var fs = require("fs");
var input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => parseInt(v));

const [N, K] = input;

let n = 1;
for (let i = N - K + 1; i <= N; i++) {
  n *= i;
}

let k = 1;
for (let i = 1; i <= K; i++) {
  k *= i;
}

console.log(n / k);
