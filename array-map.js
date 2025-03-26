// array map method

let numbers = [1, 2, 3, 4, 5, 6];

const doubleNumber = numbers.map(double);

function double(item, index, array) {
    return item * 2;
}

console.log(numbers);
console.log(doubleNumber);

const multiplication = numbers.map(mul);

function mul(item, index, array) {
    return item * index;
}

console.log(multiplication);

const productList = [
    {
        name: "latpop",
        price: 5000,
        item: 5,
    },
    {
        name: "desktop",
        price: 3000,
        item: 3,
    },
    {
        name: "mobile",
        price: 1000,
        item: 20,
    }
]

const totalProducts = productList.map((item) => {
    return {
        name: item.name,
        totalPrice: item.price * item.item,
    }
})

console.log(totalProducts);


const stringNumber = ['1', '2', '3', '4', '5'];

// const convertedNumber = stringNumber.map(item => Number(item));

// the above statement can be written as bellow
const convertedNumber = stringNumber.map(Number);

console.log(convertedNumber);


