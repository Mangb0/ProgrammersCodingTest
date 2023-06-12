function solution(my_string, index_list) {
  const arr = [...my_string];
  const answer = [];
  index_list.forEach((a) => answer.push(arr[a]));
  return answer.join("");
}
