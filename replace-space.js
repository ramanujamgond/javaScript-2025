// replace space with hyphens

let input = "hello world javascript";
let output = "";
let start = 0;

while (start < input.length - 1) {
    if (input[start] === " ") {
        output += "-";
    } else {
        output += input[start];
    }
    start++;
}

console.log(output);