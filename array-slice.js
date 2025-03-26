// array slice

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const num = numbers.slice("starting point to slice", "end point within which data is needed");

const num = numbers.slice(1, 6);
console.log(num);

const num1 = numbers.slice(2);
console.log(num1);

// slice can also be used for shallow copy
const shallowCopy = numbers.slice();
console.log(shallowCopy);

const participants = ['Florin', 'Ivan', 'Liam', 'Jai', 'Patrik'];

const winners = participants.slice(0, 3);

console.log(winners);

// to get the numbers from the last side we can use negative numbers
const lastDigits = numbers.slice(-4);
console.log(lastDigits);