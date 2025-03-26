// array concat

const a = [1, 2, 3];
const b = [4, 5, 6];

const c = a.concat(b);
c.push(8);
console.log(c);

// concat can be used as shallow copy as well
const d = a.concat();
console.log(d);

// using concat multiple varibles and values can be passed
const e = a.concat(d, a, 1, 2, b);
console.log(e);
console.log(a);
console.log(b);