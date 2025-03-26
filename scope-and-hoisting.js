// what will be logged to the console?

let x = 10;

function outer() {
    let x = 20;

    function inner() {
        let x = 30;
        console.log(x);
    }

    inner();
}

outer();
console.log(x);

// 30
// 10