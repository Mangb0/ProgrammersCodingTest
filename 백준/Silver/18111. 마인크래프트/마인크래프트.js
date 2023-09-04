var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M, B] = input
  .shift()
  .split(" ")
  .map((v) => +v);

const land = input.map((v) => v.split(" ").map((v) => +v));

let answer = [Infinity, -1];

for (let h = 0; h <= 256; h++) {
  let left = 0;
  let cnt = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      const diff = land[i][j] - h;
      if (diff < 0) {
        left -= diff;
      } else {
        cnt += diff;
      }
    }
  }

  if (cnt + B >= left) {
    const time = cnt * 2 + left;
    if (answer[0] >= time) {
      answer[0] = time;
      answer[1] = h;
    }
  }
}

console.log(answer.join(" "));
