function solution(myString) {
  return myString
    .toLowerCase()
    .split("")
    .map((a) => (a === "a" ? "A" : a))
    .join("");
}
