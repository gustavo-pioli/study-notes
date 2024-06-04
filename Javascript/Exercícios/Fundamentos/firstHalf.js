// Write a function that takes a string (a) as argument. Extract the first half a. Return the result
// https://www.jschallenger.com/javascript-practice/javascript-fundamentals/extract-first-half-string-javascript

console.log(myFunction("abcdefg"), myFunction("1234"), myFunction("fgedcba"));

function myFunction(a) {
  let halfIndex = Math.ceil(a.length / 2);
  return a.slice(0, halfIndex);
}

function solution2(a) {
  return a.slice(0, a.length / 2);
}
