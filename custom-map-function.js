// write a custom version of Array.prototype.map that takes a function an applies it to each element.

let array = [1, 2, 3];

function customMap(values, doubleNumber) {
    let arr = []

    for (let i = 0; i < values.length; i++) {
        const result = doubleNumber(values[i]);
        arr.push(result);
    }

    return arr;
}

console.log(customMap(array, num => num * 2));