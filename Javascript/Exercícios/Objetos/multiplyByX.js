// Write a function that takes an object (a) and a number (b) as arguments. Multiply all values of 'a' by 'b'. Return the resulting object.
// https://www.jschallenger.com/javascript-practice/javascript-objects/multiply-all-objects-values-javascript

console.log(
  myFunction({ a: 1, b: 2, c: 3 }, 3),
  myFunction({ j: 9, i: 2, x: 3, z: 4 }, 10),
  myFunction({ w: 15, x: 22, y: 13 }, 6)
);
console.log(
  solution2({ a: 1, b: 2, c: 3 }, 3),
  solution2({ j: 9, i: 2, x: 3, z: 4 }, 10),
  solution2({ w: 15, x: 22, y: 13 }, 6)
);

function myFunction(a, b) {
  for (key in a) a[key] = a[key] * b;
  return a;
}

function solution2(a, b) {
  return Object.entries(a).reduce((acc, [key, val]) => {
    return { ...acc, [key]: val * b };
  }, {});
}
