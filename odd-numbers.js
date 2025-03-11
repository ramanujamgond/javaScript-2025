// sum of odd numbers

let start = 1;
let sum = 0;

while (start < 100) {
    if (start % 2 !== 0) {
        sum += start;
    }
    start++;
}

console.log("Sum of odd number from 1 to 100 is: ", sum);