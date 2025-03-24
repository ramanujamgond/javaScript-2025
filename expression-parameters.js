/*
Write a function expression greetUser that:

Accepts username and language as parameters.

If language is "en", return "Hello, <username>".

If "es", return "Hola, <username>".

If "fr", return "Bonjour, <username>".

For any other language, return "Hi, <username>".
*/

greetUser = (username, language) => {
    if (language === "en") {
        return "Hello, " + username;
    } else if (language === "es") {
        return "Hola, " + username;
    } else if (language === "fr") {
        return "Bonjour, " + username;
    }
}

console.log(greetUser("John", "es"));