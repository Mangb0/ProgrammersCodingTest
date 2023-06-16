function solution(myString, pat) {
  let answer = 0;
  let temp = myString;
  for (let i = 0; i < myString.length; i++) {
    if (temp.indexOf(pat) === 0) {
      answer++;
    }
    temp = temp.substr(1);
  }
  return answer;
}
