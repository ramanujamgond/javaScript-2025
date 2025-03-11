// find the largest number in the list
let numbers = [38, 45, 77, 23, 29, 11];
let start = 0;
let largest = 0;


while (start < numbers.length - 1) {
    if (numbers[start] > largest) {
        largest = numbers[start];
    }
    start++;
}

console.log(largest);