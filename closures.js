function outer() {
  let count = 10;

  function inner() {
    console.log(count);
  }

  return inner;
}

let myFunction = outer();

myFunction();

 // function counter() {
//   let count = 0;

//   return function () {
//     count++;
//     console.log(count);
//   };
// }

// let increment = counter();

// increment();
// increment();
// increment();