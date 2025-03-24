// create a function that accepts a number and returns a new function that multiplies any input by that number.

function multiplier(number) {
    function mul(value) {
        console.log(value * number);
    }

    return mul;
}

const double = multiplier(2);
double(5);

const triple = multiplier(3);
triple(4);