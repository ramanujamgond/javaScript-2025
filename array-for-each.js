// array forEach method

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// this is the underlying way to do use the forEach as it takes a call back an iterate over the items and does not return anything
// numbers.forEach(iterateNumbers);

// function iterateNumbers(item, index, array) {
//     console.log(item);
//     console.log(index);
//     console.log(array);
// }

// another way to use the forEach or concise way using arrow function is
numbers.forEach((item, index, array) => {
    console.log(item);
    console.log(index);
    console.log(array);
});

let sum = 0;
numbers.forEach((item) => {
    sum += item
});

console.log(sum);


let letters = ['a', 'b', 'a', 'a', 'c', 'd', 'd', 'f', 'c', 'd', 'b', 'f', 'b', 'f'];

let count = {};

letters.forEach((item) => {
    if (count[item]) {
        count[item]++;
    } else {
        count[item] = 1;
    }
});

console.log(count);