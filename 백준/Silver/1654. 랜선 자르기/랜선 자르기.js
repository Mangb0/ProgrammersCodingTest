var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [K, N] = input.shift().split(" ");

let arr = input.map((v) => +v).sort((a, b) => a - b);

let left = 0;
let right = arr[arr.length - 1];
let answer = 0;

while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += Math.floor(arr[i] / mid);
  }
  if (count >= N) {
    left = mid + 1;
    answer = Math.max(answer, mid);
  } else {
    right = mid - 1;
  }
}

console.log(answer);
