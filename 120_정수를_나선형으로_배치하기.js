// 풀이 참조하여 풀었음
function solution(n) {
  const move = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const answer = Array.from(Array(n), () => Array(n).fill(0));

  let x = 0;
  let y = 0;
  let dir = 0;
  for (let i = 1; i <= n ** 2; i++) {
    answer[x][y] = i;
    let nextX = x + move[dir][0];
    let nextY = y + move[dir][1];
    if (
      nextX >= n ||
      nextX < 0 ||
      nextY >= n ||
      nextY < 0 ||
      answer[nextX][nextY] !== 0
    ) {
      dir = (dir + 1) % 4;
      nextX = x + move[dir][0];
      nextY = y + move[dir][1];
    }
    x = nextX;
    y = nextY;
  }
  return answer;
}
