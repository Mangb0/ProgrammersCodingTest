function solution(park, routes) {
  const dir = {
    E: [0, 1],
    W: [0, -1],
    N: [-1, 0],
    S: [1, 0],
  };
  let board = park.map((v) => v.split(""));
  let point = [0, 0];
  board.forEach((v, i) => {
    if (v.includes("S")) {
      point = [i, v.indexOf("S")];
    }
  });
  routes.forEach((v) => {
    let move = v.split(" ");
    let cur = [...point];
    let check = true;
    for (let i = 0; i < Number(move[1]); i++) {
      cur[0] += dir[move[0]][0];
      cur[1] += dir[move[0]][1];

      if (
        cur[0] >= board.length ||
        cur[1] >= board[0].length ||
        cur[0] < 0 ||
        cur[1] < 0
      ) {
        check = false;
        break;
      } else if (board[cur[0]][cur[1]] === "X") {
        check = false;
        break;
      }
    }
    if (check) {
      point = cur;
    }
  });
  return point;
}
