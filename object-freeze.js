const person = {
    name: "kate",
    age: 32,
    email: "kate@gmail.com",
    mobile: 9786767656
}

Object.freeze(person);

person.name = "Johan";

console.log(person);