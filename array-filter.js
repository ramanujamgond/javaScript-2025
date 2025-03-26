const number = [1, 2, 3, 4, 5, 6, 7, 8];

const num = number.filter(isEven);

function isEven(value, index, arr) {
    return value % 2 === 0;
}

console.log(num);

const person = [
    {
        name: 'Tom',
        age: 25,
    },
    {
        name: 'Julios',
        age: 18,
    },
    {
        name: 'Julie',
        age: 15,
    }
]

const adults = person.filter(age => age.age >= 18);

console.log(adults);


let numArray = [1, 2, 3, 1, 2, 4, 3, 5, 2, 4];

const removeDublicate = numArray.filter((num, index) => {
    // console.log(numArray.indexOf(num));
    // console.log(index);
    if (numArray.indexOf(num) === index) {
        return num;
    }
})

console.log(removeDublicate);