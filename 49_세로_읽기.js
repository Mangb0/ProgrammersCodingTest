function solution(my_string, m, c) {
  var answer = "";
  const arr = my_string.split("");
  for (let i = 0; i < my_string.length / m; i++) {
    answer += arr.splice(0, m)[c - 1];
  }
  return answer;
}
