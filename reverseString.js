// write a function reverseString(str) that reverses a given string.

let initial = 1;
let char = "";
function reverseString(str) {
    while (initial <= str.length) {
        char += str[str.length - initial];
        initial++;
    }
    return char;
}

console.log(reverseString("hello"));
console.log(reverseString("JavaScript"));