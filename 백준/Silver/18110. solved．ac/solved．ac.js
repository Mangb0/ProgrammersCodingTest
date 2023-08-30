var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input.shift();
let cnt = Math.round(n * 0.15);
const arr = input.map((v) => +v).sort((a, b) => a - b);

const answer = arr.slice(cnt, n - cnt);
const avg = answer.reduce((acc, cur) => acc + cur, 0) / answer.length;
console.log(Math.round(avg) || 0);
