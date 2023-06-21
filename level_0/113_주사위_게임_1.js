function solution(a, b) {
  let odd = (a % 2) + (b % 2);
  return odd === 2
    ? a ** 2 + b ** 2
    : odd === 1
    ? 2 * (a + b)
    : Math.abs(a - b);
}
