// write a function that takes an object and returns a clone of it using Object.assign() or spread syntax {...obj}

function cloneObject(obj) {
    return Object.assign({}, obj);
}

// function clone(obj) {
//     return { ...obj };
// }

const original = { a: 1, b: 2 };

const newObj = cloneObject(original);
// const newObj = clone(original);


console.log(newObj);