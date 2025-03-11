// counting specific characters in a string

let character = "banana";
let initial = 0;
let counter = 0;

while (initial <= character.length) {
    if (character[initial] === "a") {
        counter++;
    }
    initial++;
}

console.log(counter);