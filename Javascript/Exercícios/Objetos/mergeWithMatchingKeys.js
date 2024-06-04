// Write a function that takes two objects as arguments. Unfortunately, the property 'b' in the second object has the wrong key. It should be named 'd' instead. Merge both objects and correct the wrong property name. Return the resulting object. It should have the properties 'a', 'b', 'c', 'd', and 'e'
// https://www.jschallenger.com/javascript-practice/javascript-objects/merge-objects-same-key

console.log(
  myFunction({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }),
  myFunction({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 })
);
console.log(
  solution2({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }),
  solution2({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 })
);

function myFunction(x, y) {
  let combined = { ...x, ...y };
  combined["d"] = y["b"];
  combined["b"] = x["b"];
  return combined;
}

function solution2(x, y) {
  const { b, ...rest } = y;
  return { ...x, ...rest, d: b };
}
