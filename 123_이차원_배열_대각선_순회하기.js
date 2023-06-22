function solution(board, k) {
  let answer = 0;
  board.forEach((a, i) =>
    a.forEach((b, j) => (i + j <= k ? (answer += b) : b))
  );
  return answer;
}
