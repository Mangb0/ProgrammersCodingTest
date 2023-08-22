var fs = require("fs");
var input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => parseInt(v));

const T = input.shift();

for (let i = 0; i < T; i++) {
  const k = input.shift();
  const n = input.shift();

  const array = Array.from(Array(k + 1), () => Array(n + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    array[0][i] = i;
  }

  for (let i = 1; i <= k; i++) {
    for (let j = 1; j <= n; j++) {
      array[i][j] = array[i][j - 1] + array[i - 1][j];
    }
  }
  console.log(array[k][n]);
}
