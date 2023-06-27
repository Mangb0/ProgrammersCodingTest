function solution(s, skip, index) {
  let char = "abcdefghijklmnopqrstuvwxyz";
  char = [...char].filter((a) => ![...skip].includes(a));
  return [...s]
    .map((v) => char[(char.indexOf(v) + index) % char.length])
    .join("");
}
