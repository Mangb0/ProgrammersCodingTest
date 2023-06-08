function solution(arr, queries) {
  var answer = [];
  let test = [];
  for (let i = 0; i < queries.length; i++) {
    test = [];
    for (let j = queries[i][0]; j <= queries[i][1]; j++) {
      if (arr[j] > queries[i][2]) test.push(arr[j]);
    }
    test.sort((a, b) => a - b);
    if (test.length === 0) test.push(-1);
    answer.push(test[0]);
  }
  return answer;
}
