// Write a function that takes an object (a) as argument. Return the sum of all object values.
// https://www.jschallenger.com/javascript-practice/javascript-objects/sum-objects-values-javascript

console.log(
  myFunction({ a: 1, b: 2, c: 3 }),
  myFunction({ j: 9, i: 2, x: 3, z: 4 }),
  myFunction({ w: 15, x: 22, y: 13 })
);

function myFunction(obj) {
  let sum = 0;
  for (let key in obj) sum = sum + obj[key];
  return sum;
}

function solution2(obj) {
  return Object.values(obj).reduce((sum, cur) => sum + cur, 0);
}
