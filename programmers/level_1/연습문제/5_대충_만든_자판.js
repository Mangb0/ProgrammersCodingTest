function solution(keymap, targets) {
  let answer = [];
  let sum = 0;

  targets.forEach((a) => {
    for (let i = 0; i < a.length; i++) {
      let count = Infinity;
      keymap.forEach((map) => {
        let press = map.indexOf(a[i]);
        if (press > -1) {
          count = Math.min(count, press + 1);
        }
      });
      sum += count;
    }
    answer.push(sum);
    sum = 0;
  });
  return answer.map((a) => (a === Infinity ? -1 : a));
}

// 다른 사람 풀이
function solution(keymap, targets) {
  const answer = [];
  const map = {};
  for (const items of keymap) {
    items
      .split("")
      .map(
        (item, index) =>
          (map[item] = map[item] < index + 1 ? map[item] : index + 1)
      );
  }
  for (const items of targets) {
    answer.push(
      items.split("").reduce((cur, item) => (cur += map[item]), 0) || -1
    );
  }
  return answer;
}
