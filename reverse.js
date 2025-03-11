// reverse a string

let input = 'hello';
let start = input.length - 1;
let output = "";

while (start >= 0) {
    output += input[start];
    start--;
}

console.log(output);