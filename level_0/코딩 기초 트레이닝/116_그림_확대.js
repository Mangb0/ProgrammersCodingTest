function solution(picture, k) {
  const answer = [];
  for (let i = 0; i < picture.length; i++) {
    let temp = "";
    for (let j = 0; j < picture[i].length; j++) {
      for (let l = 0; l < k; l++) {
        temp += picture[i][j];
      }
    }
    for (let j = 0; j < k; j++) {
      answer.push(temp);
    }
  }
  return answer;
}
