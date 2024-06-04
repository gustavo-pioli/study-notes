// Write a function that takes a number (a) as argument. Split a into its individual digits and return them in an array. Hint: you might want to change the type of the number for the splitting
// https://www.jschallenger.com/javascript-practice/javascript-fundamentals/split-number-into-digits

console.log(myFunction(10), myFunction(931), myFunction(193278));
function myFunction(a) {
  return a
    .toString()
    .split("")
    .map((el) => {
      return Number(el);
    });
}
