function solution(arr) {
  let cur = [];
  let count = -1;
  while (JSON.stringify(arr) !== JSON.stringify(cur)) {
    count++;
    cur = arr;
    arr = arr.map((a) =>
      a >= 50 && a % 2 === 0 ? a / 2 : a < 50 && a % 2 === 1 ? a * 2 + 1 : a
    );
  }
  return count;
}
