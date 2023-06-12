function solution(my_strings, parts) {
  let answer = "";
  parts.forEach(([start, end], i) => {
    const str = my_strings[i].split("");
    const temp = str.splice(start, end - start + 1).join("");
    answer += temp;
  });
  return answer;
}
