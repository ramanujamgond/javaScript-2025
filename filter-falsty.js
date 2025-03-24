// write function that removes all falsy values (fale, 0, '', null, undefined, NaN) from an array.

let falsyValue = [0, "hello", false, 42, "", undefined];

function filterFalsy(falsy) {
    let results = []
    for (falsyValue of falsy) {
        if (falsyValue) {
            results.push(falsyValue);
        }
    }
    return results;
}

console.log(filterFalsy(falsyValue));