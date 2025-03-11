// Create a simple given triangle pattern

let number = 16;
let outer = 0;
let pattern = "";

while (outer < number) {
    let inner = 0;
    while (inner <= outer) {
        pattern += "#";
        inner++;
    }
    pattern += "\n";
    outer++;
}

console.log(pattern);