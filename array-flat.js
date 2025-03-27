// array flat
const arr = [1, [2, [3, [4]]]];
// this will only give a flat array of depth 1 all the reminig array inside the array will not be flaten
const res = arr.flat();  // [ 1, 2, [ 3, [ 4 ] ] ]
console.log(res);

// to overcome the above issue we can define the depth as parameter in the method
const res1 = arr.flat(2) // [ 1, 2, 3, [ 4 ] ]
console.log(res1);

// there is one more issue that is it will only flaten till the defined depth but it will not handle the n number of depth of overcome the issue we can use one more parameter that is - Infinity
const res2 = arr.flat(Infinity); // [ 1, 2, 3, 4 ]
console.log(res2);