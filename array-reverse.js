// array reverse - this changes the original array
const numbers = [1, 2, 3, 4, 5, 6];
const res = numbers.reverse();
console.log(res);

// if you dont want to change the original array do a show copy 
const newRes = numbers.concat().reverse();
console.log(newRes);

// can use spred operator instead 
const newRes1 = [...numbers].reverse();
console.log(newRes1);

// reverse a string
const str = 'Coding is fun!';
const resStr = str.split('').reverse().join();
console.log(resStr);