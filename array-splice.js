// array splice

const numbers = [1, 2, 3, 4, 5, 6, 7];

// splice changes the original array
//numbers.splice("starting index", "number of items to be removed", "optional - extra items/values can be added");
numbers.splice(2, 3);
console.log(numbers);

// more items and values can be added and also old values can be removed
numbers.splice(2, 1, 8, 9, 10, 11, 12, 13);

console.log(numbers);

numbers.splice(1, 0, 8, 9, 10, 11, 12, 13);

console.log(numbers);
