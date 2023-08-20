var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const array = input[1].split(" ").map((v) => parseInt(v));
for (let i = 0; i < +input[0]; i++) {
  if (array[i] < 2) {
    array[i] = 0;
    continue;
  }
  for (let j = 2; j <= Math.sqrt(array[i]); j++) {
    if (array[i] % j === 0) {
      array[i] = 0;
      break;
    }
  }
}

console.log(array.filter((v) => v !== 0).length);
