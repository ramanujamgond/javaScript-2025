// create a recursive function that counts from 1 to 10, make sure you include a base case.

function countNumber(number) {
    // console the number
    console.log(number);

    // increment the number
    let updatedNumber = number + 1;

    // base condition
    if (updatedNumber <= 10) {
        countNumber(updatedNumber);
    }
}

countNumber(1);