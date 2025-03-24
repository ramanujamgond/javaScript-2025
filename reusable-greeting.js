// write a function greetUser(name, callback) that greets the user and then runs the callback.

function greetUser(name, callback) {
    return callback(name);
}

greetUser("John", name => console.log("Hello " + name));