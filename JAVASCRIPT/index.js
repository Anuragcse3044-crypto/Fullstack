// let a =5;
// console.log(a);

// a = "anurag";
// console.log(a, typeof a);

// a = true;
// console.log(a, typeof a);

// a = null;
// console.log(a, typeof a);

// a = undefi 
// ed;
// console.log(a, typeof a);

var number = 153;
let originalNumber = number;
let temp = number;
let digitCount = 0;
let sum = 0;

while (temp > 0) {
    digitCount++;
    temp = Math.floor(temp / 10);
}

temp = number;
while (temp > 0) {
    let digit = temp % 10;
    sum += digit ** digitCount;
    temp = Math.floor(temp / 10);
}

if (sum === originalNumber) {
    console.log(`${originalNumber} is an Armstrong number`);
} else {
    console.log(`${originalNumber} is not an Armstrong number`);
}
