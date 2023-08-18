function solution(arr) {
  var answer = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i]; j++) {
      answer.push(arr[i]);
    }
  }
  return answer;
}

// 다른 사람 풀이
function solution(arr) {
  return arr.reduce((a, c) => a.concat(Array(c).fill(c)), []);
}
