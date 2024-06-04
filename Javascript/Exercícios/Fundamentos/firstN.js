// Write a function that takes a string (a) as argument. Get the first 3 characters of a. Return the result
// https://www.jschallenger.com/javascript-practice/javascript-fundamentals/get-first-characters-string-javascript

console.log(myFunction("abcdefg"), myFunction("1234"), myFunction("fgedcba"));

function myFunction(a) {
  if (a.length >= 3) return a.substr(0, 3);
  return a;
}
