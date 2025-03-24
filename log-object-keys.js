// write a function that takes an object and logs all key-value pairs.

const user = { name: "user1", age: 25 };

for (key in user) {
    console.log(key);
}