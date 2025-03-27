// array find
const names = ['Florin', 'Ivan', 'Jay'];

const res = names.find(findIvan);

function findIvan(item) {
    return item === 'Ivan'
}

console.log(res);


const person = [
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
];
// const resPerson = person.find(item => item.name === 'Florin').age;
const { age } = person.find(item => item.name === 'Florin');
console.log(resPerson);