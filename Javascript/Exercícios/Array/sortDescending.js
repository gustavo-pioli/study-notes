// Write a function that takes an array of numbers as argument. It should return an array with the numbers sorted in descending order.
// https://www.jschallenger.com/javascript-practice/javascript-arrays/sort-array-of-numbers

console.log(myFunction([1, 3, 2]), myFunction([4, 2, 3, 1]));
console.log(solution2([1, 3, 2]), solution2([4, 2, 3, 1]));

function myFunction(arr) {
  return arr.sort((first, second) => {
    if (first > second) return -1;
    if (first < second) return 1;
    return 0;
  });
}

function solution2(arr) {
  return arr.sort((a, b) => b - a);
}
