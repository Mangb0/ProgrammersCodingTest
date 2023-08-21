var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map((v) => parseInt(v));
const arr = input[1]
  .split(" ")
  .map((v) => parseInt(v))
  .sort((a, b) => a - b);

let max = 0;

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      const sum = arr[i] + arr[j] + arr[k];
      if (sum <= M) {
        max = Math.max(max, sum);
      } else break;
    }
  }
}

console.log(max);
