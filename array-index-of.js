// array index of 
const names = ['Floran', 'Ivan', 'Lilly'];

// indexOf only finds the first occurance of the given items
console.log(names.indexOf('Ivan'));

let idx = names.indexOf('Ivan');

if (idx === -1) {
    console.log("Ivan is not in the list");
} else {
    console.log("Ivan is in the list");
}

// lastIndexOf there is one more method which give the occurance of item from the last in the array 
console.log(names.lastIndexOf("Lilly"));