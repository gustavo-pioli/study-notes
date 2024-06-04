// Write a function that takes an object with two properties as argument. It should return the value of the property with key 'prop-2'. Hint: you might want to use the square brackets property accessor
// https://www.jschallenger.com/javascript-practice/javascript-objects/access-object-properties-square-brackets

console.log(
  myFunction({ one: 1, "prop-2": 2 }),
  myFunction({ "prop-2": "two", prop: "test" })
);

function myFunction(obj) {
  return obj["prop-2"];
}
