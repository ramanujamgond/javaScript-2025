// write a function power(base, exponent) that calulates base^exponent using recursion.

function power(base, exponent) {
    // Base case: Any number raised to the power of 0 is 1
    if (exponent === 0) {
        return 1;
    }
    // Recursive case: Multiply base with the result of power(base, exponent - 1)
    return base * power(base, exponent - 1);
}

console.log(power(2, 3));
console.log(power(5, 2));
console.log(power(10, 0)); 