// write a function that logs the data type of every element in an array using typeof

let logData = ["hello", 123, true, null, undefined];

function logTypes(logs) {
    for (log of logs) {
        console.log(typeof log);
    }
}

logTypes(logData);