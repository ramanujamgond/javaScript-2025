// array reduce method

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const totalNumbers = numbers.reduce(callback, initailNumber);
const totalNumber = numbers.reduce(sum, 0);

function sum(accumulator, value, index, arr) {
    return accumulator + value;
}

console.log(totalNumber);

const numberList = [10, 5, 18, 34, 6, 71, 9, 12, 98];

const bigestNumber = numberList.reduce((accumulator, value) => {
    if (accumulator > value) {
        return accumulator;
    } else {
        return value;
    }
}, -Infinity)

console.log(bigestNumber);

const productList = [
    {
        product: "laptop",
        price: 4000,
        count: 5,
    },
    {
        product: "desktop",
        price: 3000,
        count: 4,
    },
    {
        product: "mobile",
        price: 1300,
        count: 10,
    }
]

const totalPriceValue = productList.reduce((accumulator, value) => {
    return accumulator + (value.price * value.count);
}, 0)


console.log(totalPriceValue);