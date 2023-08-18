// 시간 초과
// function solution(players, callings) {
//     for(let i = 0; i < callings.length; i++) {
//         let rank = players.indexOf(callings[i]);
//         players[rank] = players[rank-1];
//         players[rank-1] = callings[i];
//     }
//     return players;
// }

const solution = (players, callings) => {
  const obj = {};
  for (let i = 0; i < players.length; i++) {
    obj[players[i]] = i;
  }

  for (let i = 0; i < callings.length; i++) {
    let rank = obj[callings[i]];
    [obj[callings[i]], obj[players[rank - 1]]] = [
      obj[players[rank - 1]],
      obj[callings[i]],
    ];
    [players[rank], players[rank - 1]] = [players[rank - 1], players[rank]];
  }
  return players;
};
