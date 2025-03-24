// create a function that returns a counter function. Each call should increase the count by 1.

function createCounter() {
    let value = 1;

    function increaseCounter() {
        console.log(value++);
    }

    return increaseCounter;

}

const counter = createCounter();
counter();
counter();
counter();
counter();
counter();
counter();
counter();
counter();