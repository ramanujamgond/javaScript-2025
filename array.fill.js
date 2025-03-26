// array fill 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
numbers.fill(0);
console.log(numbers);

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
num.fill('*', 2, 5);
console.log(num);

function fillTheArray(n) {
    return Array(n).fill(0).map((_, idx) => idx + 1);
}

console.log(fillTheArray(20));