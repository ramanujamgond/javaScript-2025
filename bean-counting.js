// bean counting program

function countBs(char) {
    let initial = 0;
    let counter = 0;
    while (initial < char.length) {
        if (char[initial] === "B") {
            counter++;
        }
        initial++;
    }
    return counter;
}

console.log(countBs("BOBACATBOLDBUILDBOX"));

function countChar(charString, char) {
    let initial = 0;
    let count = 0;

    while (initial < charString.length) {
        if (charString[initial] === char) {
            count++;
        }
        initial++;
    }
    return count++;
}

console.log(countChar("kakkerkklak", "k"));