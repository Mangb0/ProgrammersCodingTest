function solution(myStr) {
  const answer = [...myStr]
    .map((v) => (v === "a" || v === "b" || v === "c" ? " " : v))
    .join("")
    .split(" ")
    .filter((v) => v);
  return answer.length ? answer : ["EMPTY"];
}

// 다른 사람 풀이
const solution = (s) => s.match(/[^a-c]+/g) || ["EMPTY"];

// 다른 사람 풀이
function solution(myStr) {
  const list = myStr.split(/[a|b|c]/).filter((str) => str);
  return list.length ? list : ["EMPTY"];
}
