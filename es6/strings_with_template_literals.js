/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/create-strings-using-template-literals

A new feature of ES6 is the template literal. This is a special type of string that makes creating complex strings easier.

Template literals allow you to create multi-line strings and to use string interpolation features to create strings.

Consider the code below:

const person = {
  name: "Zodiac Hasbro",
  age: 56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);

The console will display the strings Hello, my name is Zodiac Hasbro! and I am 56 years old..

- Uses backticks (`), not quotes (' or "), to wrap the string.
- The ${variable} syntax used above is a placeholder.

Use template literal syntax with backticks to create an array of list element (li) strings.
Each list element's text should be one of the array elements from the failure property on the result object and have a class attribute with the value text-warning.
The makeList function should return the array of list item strings.

Use an iterator method (any kind of loop) to get the desired output (shown below):
[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]
*/

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  for (var i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  // Only change code above this line
  return failureItems;
}

const failuresList = makeList(result.failure);
