/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-arrow-functions-to-write-concise-anonymous-functions

In JavaScript, we often don't need to name our functions, especially when passing a function as an argument to another function. Instead, we create inline functions.

To achieve this, we often use the following syntax:

const myFunc = function() {
  const myVar = "value";
  return myVar;
}

ES6 provides us with the syntactic sugar to not have to write anonymous functions this way. Instead, you can use arrow function syntax:

const myFunc = () => {
  const myVar = "value";
  return myVar;
}

When there is no function body, and only a return value, arrow function syntax allows you to omit the keyword return as well as the brackets surrounding the code:

const myFunc = () => "value";

*/

const magic = () => new Date();

/*

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/write-arrow-functions-with-parameters

___ Parameters ___

Just like a regular function, you can pass arguments into an arrow function.

const doubler = (item) => item * 2;

If an arrow function has a single parameter, the parentheses enclosing the parameter may be omitted.

const doubler = item => item * 2;

It is possible to pass more than one argument into an arrow function.

const multiplier = (item, multi) => item * multi;
multiplier(4, 2);

*/

const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

/*

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/set-default-parameters-for-your-functions

___ Default Parameters ___

In order to help us create more flexible functions, ES6 introduces default parameters for functions.

Check out this code:

const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());

*/

const increment = (number, value=1) => number + value;
