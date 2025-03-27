// array from
const str = "12345678910";

// const res = Array.from(str);
// const res = Array.from(str, convertToNumber);

// function convertToNumber(item) {
//     return Number(item);
// }

// const res = Array.from(str, item => Number(item));
const res = Array.from(str, Number);


console.log(res);

const numbers = [1, 2, 1, 4, 2, 3, 5, 6, 2, 4, 5, 6, 8, 4];

const removeDublicateNumbers = Array.from(new Set(numbers));
console.log(removeDublicateNumbers);

const names = ['Floran', 'Ivan', 'Lilly', 'Floran', 'Ivan', 'Lilly', 'Ivan', 'Lilly'];
const removeDiblicateNames = Array.from(new Set(names));
console.log(removeDiblicateNames);