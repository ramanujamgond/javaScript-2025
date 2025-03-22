// find the larget of three numbers.

let num1 = 24;
let num2 = 7;
let num3 = 187;

if (num1 > num2 && num1 > num3) {
    console.log(num1 + " is the largest number");
} else if (num2 > num1 && num2 > num3) {
    console.log(num2 + " is the largest number");
} else {
    console.log(num3 + " is the largest number");
}

let arr = [8, 77, 5];
let initial = 0;
let largest = 0;

while (initial < arr.length) {
    if (arr[initial] > largest) {
        largest = arr[initial];
    }
    initial++;
}

console.log(largest + " is the largest number");