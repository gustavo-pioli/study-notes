// Write a function that takes an array of strings as argument. Return the longest string.
// https://www.jschallenger.com/javascript-practice/javascript-arrays/return-longest-string-in-array

console.log(myFunction(["help", "me"]), myFunction(["I", "need", "candy"]));
console.log(solution2(["help", "me"]), solution2(["I", "need", "candy"]));

function myFunction(arr) {
  return arr.reduce((a, b) => (b.length > a.length ? b : a));
}

function solution2(arr) {
  return arr.sort((a, b) => {
    let nameA = a.toLowerCase();
    let nameB = b.toLowerCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  })[0];
}
