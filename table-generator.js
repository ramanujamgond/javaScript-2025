// create a function that prints the multiplication table (1-10) of a given number using a for loop

function printMultiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(number + " x " + i + " = " + number * i);
    }
}

printMultiplicationTable(5);