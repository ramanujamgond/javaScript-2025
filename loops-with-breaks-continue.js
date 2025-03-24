// print number from 1 to 20
/*
- skip numbers divisible by 3 (use continue)
- stop the loop completely if the numbers is greater than 15 and divisible by 5(use break)
*/

let initial = 1;

while (initial <= 20) {
    if (initial % 3 === 0) {
        initial++;
        continue;
    }

    if (initial > 15 && initial % 5 === 0) {
        break;
    }

    console.log(initial);
    initial++;
}