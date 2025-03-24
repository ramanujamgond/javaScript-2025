// Create a function doMath that takes two numbers and a callback. Then wriet two different arrow function: one that adds the numbers, and one that multiplies them. Pass each into doMath and log the result.

function doMath(num1, num2, callback) {
    callback(num1, num2);
}

doMath(3, 6, (num1, num2) => console.log(num1 + num2));

doMath(3, 6, (num1, num2) => console.log(num1 * num2));