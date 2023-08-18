function solution(wallpaper) {
  let startY = wallpaper.length,
    startX = wallpaper[0].length;
  let endY = 0,
    endX = 0;
  wallpaper.forEach((v, i) => {
    if (v.includes("#")) {
      let posX = v.indexOf("#");
      let lastX = v.lastIndexOf("#");
      let posY = i;
      if (posX < startX) {
        startX = posX;
      }
      if (lastX + 1 > endX) {
        endX = lastX + 1;
      }
      if (posY < startY) {
        startY = posY;
      }
      if (posY + 1 > endY) {
        endY = posY + 1;
      }
    }
  });
  return [startY, startX, endY, endX];
}

// 다른 사람 풀이
function solution(wallpaper) {
  let left = [];
  let top = [];
  let right = [];
  let bottom = [];
  wallpaper.forEach((v, i) => {
    [...v].forEach((val, ind) => {
      if (val === "#") {
        left.push(i);
        top.push(ind);
        right.push(i + 1);
        bottom.push(ind + 1);
      }
    });
  });
  return [
    Math.min(...left),
    Math.min(...top),
    Math.max(...right),
    Math.max(...bottom),
  ];
}
