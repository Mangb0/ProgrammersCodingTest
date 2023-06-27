function solution(t, p) {
  const len = p.length;
  let count = 0;
  for (let i = 0; i < t.length - len + 1; i++) {
    if (+p >= +t.slice(i, len + i)) count++;
  }
  return count;
}
