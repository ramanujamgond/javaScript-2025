// Write a program to find the minimum from given two number

function min(num1, num2) {
    if(num1 > num2) {
        return num2
    } else {
        return num1;
    }
}

console.log(min(30, 100));
console.log(min(-90, -10));

