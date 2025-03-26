// create an object user with a method sayHello() that logs "Hello, my name is {name}" using this.name

const user = {
    name: "Johan",
    sayHello: function () {
        console.log("Hello, my name is " + this.name);
    },
}

user.sayHello();