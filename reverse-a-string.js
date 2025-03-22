// reverse a string

let word = "hello is the string";
start = word.length - 1;
let reverse = "";

while (start >= 0) {
    reverse += word[start];
    start--;
}

console.log(reverse);