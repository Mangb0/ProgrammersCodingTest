function solution(food) {
  let str = "";
  food.forEach((v, foodNum) => {
    if (foodNum !== 0) {
      for (let i = 0; i < Math.floor(v / 2); i++) {
        str += foodNum;
      }
    }
  });
  return str + "0" + [...str].reverse().join("");
}
