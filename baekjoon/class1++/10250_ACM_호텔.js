var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");
// var input = fs.readFileSync("stdin.txt").toString().split("\n");

for (let i = 1; i <= input[0]; i++) {
  const [H, W, N] = input[i].split(" ");
  let floor = N % H;
  let room = Math.floor(N / H) + 1;
  if (floor === 0) {
    floor = H;
    room -= 1;
  }
  console.log(floor * 100 + room);
}
