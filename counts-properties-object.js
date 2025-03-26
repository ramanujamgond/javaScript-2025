// write a function that counts how many properites are in an object(hint: use Object.keys(obj).length)

const person = {
    name: "kate",
    age: 32,
    email: "kate@gmail.com",
    mobile: 9786767656
}

function countProperties() {
    console.log(Object.keys(person).length);
}

countProperties();