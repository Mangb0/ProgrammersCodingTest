const solution = (arr, k) => arr.map((v) => (k % 2 === 1 ? v * k : v + k));
