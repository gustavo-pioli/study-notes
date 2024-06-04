// Write a function that takes an array of numbers as argument. Return the number of negative values in the array.
// https://www.jschallenger.com/javascript-practice/javascript-arrays/count-number-negative-values-array

console.log(
  myFunction([1, -2, 2, -4]),
  myFunction([0, 9, 1]),
  myFunction([4, -3, 2, 1, 0])
);
console.log(
  solution2([1, -2, 2, -4]),
  solution2([0, 9, 1]),
  solution2([4, -3, 2, 1, 0])
);

function myFunction(a) {
  return a.reduce((quantity, el) => {
    if (el < 0) return quantity + 1;
    return quantity;
  }, 0);
}

function solution2(a) {
  return a.filter((el) => el < 0).length;
}
