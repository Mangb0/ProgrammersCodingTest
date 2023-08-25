var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const A = input[1].split(" ").map((v) => +v);
const B = input[3].split(" ").map((v) => +v);

A.sort((a, b) => a - b);

const binarySearch = (arr, target, left, right) => {
  let mid = Math.floor((left + right) / 2);

  if (left > right) {
    return arr[mid] === target ? 1 : 0;
  }

  if (arr[mid] > target) {
    right = mid - 1;
  } else {
    left = mid + 1;
  }

  return binarySearch(arr, target, left, right);
};

const result = B.map((v) => binarySearch(A, v, 0, A.length - 1));

console.log(result.join("\n"));
