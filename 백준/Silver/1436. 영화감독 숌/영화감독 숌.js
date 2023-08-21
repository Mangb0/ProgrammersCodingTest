var fs = require("fs");
var input = +fs.readFileSync("/dev/stdin").toString().trim();

let cnt = 1;
let num = 666;
while (cnt < input) {
  num++;
  if (String(num).includes("666")) cnt++;
}
console.log(num);
