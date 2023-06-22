function solution(myString) {
  const test = "abcdefghijk";
  return [...myString].map((v) => (test.includes(v) ? "l" : v)).join("");
}
