// array some
const numbers = [1, 2, 3, 4, 5];
const res = numbers.some(greaterThanFour);

function greaterThanFour(item, index, arr) {
    return item > 4;
}

console.log(res);

const persons = [
    {
        name: 'Florin',
        age: 20,
    },
    {
        name: 'Liam',
        age: 25,
    },
    {
        name: 'Ivan',
        age: 16,
    },
]

// const ageResult = persons.some(isAgeGreater);

// function isAgeGreater(item) {
//     return item.age > 18;
// }

const ageResult = persons.some(item => item.age > 18);

console.log(ageResult);