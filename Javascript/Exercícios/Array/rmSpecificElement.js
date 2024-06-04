// Write a function that takes an array (a) and a value (b) as argument. The function should remove all elements equal to 'b' from the array. Return the filtered array.
// https://www.jschallenger.com/javascript-practice/javascript-arrays/remove-specific-array-element

console.log(
  myFunction([1, 2, 3], 2),
  myFunction([1, 2, "2"], "2"),
  myFunction([false, "2", 1], false),
  myFunction([1, 2, "2", 1], 1)
);

function myFunction(a, b) {
  return a.filter((el) => el !== b);
}
