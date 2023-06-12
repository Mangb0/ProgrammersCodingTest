function solution(my_string, queries) {
  var answer = "";
  my_string.split("");
  const arr = [...my_string];
  for (let i = 0; i < queries.length; i++) {
    let temp = arr
      .splice(queries[i][0], queries[i][1] - queries[i][0] + 1)
      .reverse();
    for (let j = 0; j < temp.length; j++) {
      arr.splice(queries[i][0] + j, 0, temp[j]);
    }
  }

  return arr.join("");
}

// 처음에 내가 생각했던 공식
function solution(my_string, queries) {
  let str = my_string.split("");
  queries.forEach(([start, end]) => {
    const changeStr = str.slice(start, end + 1);
    str.splice(start, changeStr.length, ...changeStr.reverse());
  });
  return str.join("");
}
