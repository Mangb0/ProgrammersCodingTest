function solution(number, limit, power) {
  let divisor = [];
  let count = 0;
  for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= i / 2; j++) {
      if (i % j === 0) count++;
    }
    divisor.push(count + 1);
    count = 0;
  }
  return divisor
    .map((v) => (v > limit ? power : v))
    .reduce((acc, cur) => acc + cur);
}
