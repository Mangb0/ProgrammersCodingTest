function solution(s) {
    const array = s.split(" ").map(v => +(v));
    return `${Math.min(...array)} ${Math.max(...array)}`;
}