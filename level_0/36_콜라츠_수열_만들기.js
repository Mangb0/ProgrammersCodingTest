function solution(n) {
  const answer = [n];
  let a = n;
  do {
    a % 2 === 0 ? (a = a / 2) : (a = 3 * a + 1);
    answer.push(a);
  } while (a !== 1);
  return answer;
}
