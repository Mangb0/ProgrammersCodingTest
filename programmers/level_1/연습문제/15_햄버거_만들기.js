// 시간 초과
function solution(ingredient) {
  let str = ingredient.join("");
  let count = 0;
  while (str.includes("1231")) {
    str = str.replace("1231", "");
    count++;
  }
  return count;
}

function solution(ingredient) {
  const str = [];
  let count = 0;
  for (let v of ingredient) {
    str.push(v);
    if (str.slice(-4).join("") === "1231") {
      str.splice(-4);
      count++;
    }
  }
  return count;
}
