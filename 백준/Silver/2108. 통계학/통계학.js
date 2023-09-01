var fs = require("fs");
var input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

const N = input.shift();

input.sort((a, b) => a - b);

const sum = input.reduce((acc, cur) => acc + cur);
const avg = Math.round(sum / N) === 0 ? 0 : Math.round(sum / N);
console.log(avg);

const mid = input[Math.floor(N / 2)];
console.log(mid);

const map = new Map();
let max = 1;
for (let num of input) {
  if (map.has(num)) {
    max = Math.max(max, map.get(num) + 1);
    map.set(num, map.get(num) + 1);
  } else map.set(num, 1);
}
const maxArr = [];
for (let [key, value] of map) {
  if (value === max) {
    maxArr.push(key);
  }
}
console.log(maxArr.length === 1 ? maxArr[0] : maxArr[1]);

console.log(input[N - 1] - input[0]);
