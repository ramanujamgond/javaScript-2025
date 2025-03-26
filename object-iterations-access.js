// create an object student with name, age and grade. Write a fuction that logs all key-value pairs using a for...in loop.

const student = {
    name: "John",
    age: "28",
    grade: "A+",
}

function logStudentData() {
    for (data in student) {
        console.log(data);
    }
}

logStudentData();

function printKeys() {
    const keys = Object.keys(student);
    console.log(keys);
}

printKeys();

function printValues() {
    const values = Object.values(student);
    console.log(values);
}

printValues();

function checkKey() {
    const keyExist = student.hasOwnProperty("age");
    console.log(keyExist);
}

checkKey();