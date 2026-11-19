const memo = {};

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  if (memo[n] !== undefined) {
    return memo[n];
  }

  memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
  return memo[n];
}

const terms = 10;
const series = [];

for (let i = 0; i < terms; i++) {
  series.push(fibonacci(i));
}

console.log(series.join(" "));