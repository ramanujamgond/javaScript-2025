// write a function multiplication(a,b) that multiplies two numbers uisng only additiion(+) and loops

let initial = 0;
let count = 0;
function multiplication(a, b) {
    while (initial < a) {
        count += b;
        initial++;
    }
    return count;
}

console.log(multiplication(5, 3));