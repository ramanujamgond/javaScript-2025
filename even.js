// print even number from (1-50);
let initail = 0;
let captureEven = "";
while (initail < 50) {
    if (initail % 2 === 0) {
        captureEven += initail + " ";
    }
    initail++;
}

console.log(captureEven);