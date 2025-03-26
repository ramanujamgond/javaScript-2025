const person = {
    name: "kate",
    age: 32,
    email: "kate@gmail.com",
    mobile: 9786767656
}

Object.seal(person);

person.city = "Berlin";

person.age = 55;

console.log(person);