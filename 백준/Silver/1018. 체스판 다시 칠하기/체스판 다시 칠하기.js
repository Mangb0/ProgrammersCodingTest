var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input.shift().split(" ");

const black = ["BWBWBWBW", "WBWBWBWB"];
const whilte = ["WBWBWBWB", "BWBWBWBW"];
let answer = 64;

for (let i = 0; i <= N - 8; i++) {
  for (let j = 0; j <= M - 8; j++) {
    let blackCount = 0;
    let whiteCount = 0;
    for (let k = 0; k < 8; k++) {
      for (let l = 0; l < 8; l++) {
        if (input[i + k][j + l] !== black[k % 2][l]) blackCount++;
        if (input[i + k][j + l] !== whilte[k % 2][l]) whiteCount++;
      }
    }
    answer = Math.min(answer, blackCount, whiteCount);
  }
}

console.log(answer);
