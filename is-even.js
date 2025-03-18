// write a recursive funtion isEven(n) that returns:
// ture in n is even.
// flase if n is odd.

function isEven(n) {
    if (n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return isEven(-n);
    else return isEven(n - 2);
}
console.log(isEven(75));