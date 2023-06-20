function solution(strArr) {
  let arr = Array(31).fill(0);
  strArr.forEach((a) => arr[a.length]++);
  return Math.max(...arr);
}
