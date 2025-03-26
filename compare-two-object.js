function areObjectsEqual(obj1, obj2) {
    // Get keys of both objects
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // Check if number of keys is different
    if (keys1.length !== keys2.length) {
        return false;
    }

    // Loop through keys of obj1
    for (let key of keys1) {
        // Compare both value and type
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    // If all checks pass, the objects are equal
    return true;
}

// ✅ Example usage:
const a = { name: "Alice", age: 25 };
const b = { age: 25, name: "Alice" };
const c = { name: "Alice", age: 26 };

console.log(areObjectsEqual(a, b)); // true
console.log(areObjectsEqual(a, c)); // false
