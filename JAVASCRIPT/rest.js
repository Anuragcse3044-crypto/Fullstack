/*
========================================
       REST OPERATOR IN JAVASCRIPT
========================================

1. DEFINITION:
   Rest operator (...) collects multiple
   elements and packs them into a single
   array or object.

2. REST OPERATOR WITH FUNCTION:
*/

function sum(...numbers) {
    console.log(numbers);
}

sum(10, 20, 30);
// Output: [10, 20, 30]


/*
3. REST OPERATOR WITH FUNCTION PARAMETERS:
   Collects remaining arguments into an array.
*/

function add(a, b, ...rest) {
    console.log(a);    // 10
    console.log(b);    // 20
    console.log(rest); // [30, 40, 50]
}

add(10, 20, 30, 40, 50);


/*
4. REST OPERATOR WITH ARRAY DESTRUCTURING:
   Collects remaining array elements.
*/

const numbers = [10, 20, 30, 40, 50];

const [first, second, ...remaining] = numbers;

console.log(first);     // 10
console.log(second);    // 20
console.log(remaining); // [30, 40, 50]


/*
5. REST OPERATOR WITH OBJECT DESTRUCTURING:
   Collects remaining object properties.
*/

const user = {
    name: "Rahul",
    age: 22,
    city: "Mathura",
    country: "India"
};

const { name, ...details } = user;

console.log(name);    // Rahul
console.log(details); // { age: 22, city: "Mathura", country: "India" }


/*
6. IMPORTANT RULES:

   - Rest operator uses three dots (...).
   - It collects remaining values.
   - In array destructuring, it returns an array.
   - In object destructuring, it returns an object.
   - Rest parameter must be the last parameter.
   - Only one rest parameter is allowed.
   - Rest must be the last element in
     array or object destructuring.

7. REST VS SPREAD:

   REST   = Collects / Packs values.
   SPREAD = Expands / Unpacks values.

   REST EXAMPLE:
   function show(...args) {}
   // Collects arguments into an array.

   SPREAD EXAMPLE:
   const arr = [1, 2, 3];
   console.log(...arr);
   // Expands array elements.

========================================
       END OF REST OPERATOR NOTES
========================================
*/