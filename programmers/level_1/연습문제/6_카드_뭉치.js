function solution(cards1, cards2, goal) {
  var answer = "Yes";
  let card1Idx = 0;
  let card2Idx = 0;
  goal.forEach((v) => {
    if (cards1.includes(v)) {
      let card1 = cards1.indexOf(v);
      if (!(card1Idx === card1)) {
        answer = "No";
      }
      card1Idx++;
    } else if (cards2.includes(v)) {
      let card2 = cards2.indexOf(v);
      if (!(card2Idx === card2)) {
        answer = "No";
      }
      card2Idx++;
    } else {
      answer = "No";
    }
  });
  return answer;
}

// 다른 사람 풀이 shift
function solution(cards1, cards2, goal) {
  for (const s of goal) {
    if (cards1[0] == s) {
      cards1.shift();
    } else if (cards2[0] == s) {
      cards2.shift();
    } else {
      return "No";
    }
  }

  return "Yes";
}

// 다른 사람 풀이
function solution(cards1, cards2, goal) {
  let j = 0;
  let k = 0;
  for (let i = 0; i < goal.length; i++) {
    if (goal[i] == cards1[j]) j++;
    else if (goal[i] == cards2[k]) k++;
    else return "No";
  }
  return "Yes";
}
