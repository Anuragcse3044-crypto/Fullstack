// function memoize(fn) {
//   let cache = {};

//   return function (n) {
//     if (n in cache) {
//       console.log("From cache");
//       return cache[n];
//     }

//     console.log("Calculating...");
//     let result = fn(n);
//     cache[n] = result;

//     return result;
//   };
// }

// function square(n) {
//   return n * n;
// }

// const memoizedSquare = memoize(square);

// console.log(memoizedSquare(5));
// console.log(memoizedSquare(5));
// console.log(memoizedSquare(6));

function memoize(fn) {
  let cache = {};

  return function (n) {
    if (n in cache) return cache[n];

    cache[n] = fn(n);
    return cache[n];
  };
}