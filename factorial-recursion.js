// write a function factorial(n) that returns the factorial of n using recursion

function fact(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * fact(n - 1);
}

console.log(fact(5));