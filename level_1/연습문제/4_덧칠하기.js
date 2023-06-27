function solution(n, m, section) {
  const arr = Array(n).fill("o");
  let count = 0;

  for (let i = 0; i < section.length; i++) {
    arr[section[i]] = "x";
  }

  while (arr.includes("x")) {
    let start = arr.indexOf("x");
    let end = start + m;
    for (let i = start; i < end; i++) {
      arr[i] = "o";
    }
    count++;
  }
  return count;
}

// 다른 사람 풀이
function solution(n, m, section) {
  let count = 0;
  const arr = Array.from(Array(n + 1).fill(null));

  section.forEach((el) => {
    arr[el] = 1;
  });

  section.forEach((el) => {
    if (arr[el]) {
      arr.fill(null, el, el + m);
      count++;
    }
  });
  return count;
}

// 다른 사람 풀이
function solution(n, m, sections) {
  var answer = 0;
  var painted = 0;
  for (var section of sections) {
    if (painted < section) {
      answer++;
      painted = section + m - 1;
    }
  }
  return answer;
}
