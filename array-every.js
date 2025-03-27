// array every method
const numbers = [-1, 1, 2, 3, 4, 5];

const res = numbers.every(isPositive);

function isPositive(item, index, arr) {
    return item > 0
}

console.log(res);

const persons = [
    {
        name: 'Florin',
    },
    {
        name: 'Ivan',
    },
    {
        name: 'Liam',
    },
    {
        surname: 'Jai',
    }
];

const result = persons.every(persons => persons.name !== undefined);
console.log(result);

const arrays = [[1, 2, 3], [4, 5, 6], '[7, 8, 9]'];
const arrResults = arrays.every(arr => Array.isArray(arr));
console.log(arrResults);