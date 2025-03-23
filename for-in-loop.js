// for in loop

let person = {
    name: 'Jhon',
    age: 28,
    phone: 9546478767,
    email: 'john@gmail.com'
}

for (detail in person) {
    console.log(detail);
}

let fruits = ['apple', 'mango', 'pineapple', 'litchi', 'guava', 'graphes'];

for (fruit in fruits) {
    // console.log(fruit);
    console.log(fruits[fruit]);
}