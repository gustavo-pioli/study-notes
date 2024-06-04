// Write a function that takes two arrays as arguments. Merge both arrays and remove duplicate values. Sort the merge result in ascending order. Return the resulting array
// https://www.jschallenger.com/javascript-practice/javascript-arrays/merge-arrays-duplicates

console.log(
  myFunction([1, 2, 3], [3, 4, 5]),
  myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42])
);
console.log(
  solution2([1, 2, 3], [3, 4, 5]),
  solution2([-10, 22, 333, 42], [-11, 5, 22, 41, 42])
);

function myFunction(a, b) {
  let array = a.concat(b);
  array.sort((a, b) => a - b);
  return array.filter((el, index) => array.indexOf(el) === index);
}

function solution2(a, b) {
  return [...new Set([...a, ...b])].sort((x, y) => x - y);
}
