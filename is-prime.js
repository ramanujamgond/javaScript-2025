// check if a number i prime 

let number = 6;
let start = 2;
let isPrime = true;

while (start * start <= number) {
    if (number % start === 0) {
        isPrime = false;
        break;
    }
    start++;
}

console.log(isPrime ? "The " + number + " is prime number" : "The " + number + " is not a prime number");