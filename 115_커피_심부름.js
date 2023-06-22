function solution(order) {
  return order
    .map((v) => (v.includes("latte") ? 5000 : 4500))
    .reduce((acc, cur) => acc + cur);
}
