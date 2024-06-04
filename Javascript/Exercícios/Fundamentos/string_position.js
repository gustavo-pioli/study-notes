// Write a function that takes a string as argument. The string contains the substring 'is'. Return the index of 'is'.
// https://www.jschallenger.com/javascript-practice/javascript-fundamentals/index-of-substring-in-string

console.log(myFunction("praise"), myFunction("paris"), myFunction("risky"));
function myFunction(a) {
  const index = a.indexOf("is");
  return index;
}
