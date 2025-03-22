// swap two variables without using a third variable.

let a = 1;
let b = 2;

a = a + b;
b = a - b;
a = a - b;

console.log(a);
console.log(b);