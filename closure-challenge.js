// write a function createCounter that:
/*
- returns another function
- each time the inner function is called, it should increment and return a ccounter value.
- the counter should remember its value between calls (closurre in action!).
*/

function createCounter() {
    let count = 1;
    function countIncrement() {
        return count++;
    }
    return countIncrement;
}

const count = createCounter();
console.log(count());
console.log(count());
console.log(count());
console.log(count());