// write a function factorial(n) that returns the factorial of n

let initial = 1;
let fact = 1;
function factorial(n) {
    while (initial <= n) {
        fact *= initial;
        initial++;
    }
    return fact;
}

console.log(factorial(0));