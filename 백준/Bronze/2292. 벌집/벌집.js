var fs = require("fs");
var input = +fs.readFileSync("/dev/stdin").toString().trim();

let count = 1;
let num = 1;
while (input > num) {
  num += 6 * count;
  count++;
}

console.log(count);
