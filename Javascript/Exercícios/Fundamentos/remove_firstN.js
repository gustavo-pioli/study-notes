// Write a function that takes a string (a) as argument. Remove the first 3 characters of a. Return the result
// https://www.jschallenger.com/javascript-practice/javascript-fundamentals/remove-first-characters-string-javascript

console.log(myFunction("abcdefg"), myFunction("1234"), myFunction("fgedcba"));
console.log(solution2("abcdefg"), solution2("1234"), solution2("fgedcba"));

function myFunction(a) {
  const string = a.split("");
  string.splice(0, 3);
  return string.join("");
}

function solution2(a) {
  return a.slice(3);
}
