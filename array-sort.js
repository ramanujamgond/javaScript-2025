// array sort

// array sort works from ascending orders
const names = ['Florian', 'Liam', 'Jai', 'Ivan'];
names.sort();

console.log(names);

// array sort for numbers will not work as expected as under the hood sort converts the numbers to string then it compares the utf16 code and its value
const numbers = [76, 8, 12, 2, 45, 9, 3, 6, 18, 23, 13];

// to handle the sort we need to pass an alogrithem

numbers.sort(compareFunction);

function compareFunction(a, b) {
    // 1. < 0 .... a comes first
    // 2. 0 .... nothing will be changed
    // 3. > 0 .... b comes first
    // return a - b;
    // to reverse the order that is for descending order just do b - a;
    return b - a
}

console.log(numbers);

const product = [
    {
        name: 'laptop',
        price: 1000,
    },
    {
        name: 'desktop',
        price: 1500,
    },
    {
        name: 'phone',
        price: 500
    }
];

product.sort((a, b) => a.price - b.price);

// function functionSort(a, b) {
//     // return a.price - b.price;
//     return b.price - a.price;
// }

console.log(product);