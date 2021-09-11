/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-to-extract-values-from-objects

Destructuring assignment is special syntax introduced in ES6, for neatly assigning values taken directly from an object.

Consider the following ES5 code:

const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;

Here's an equivalent assignment statement using the ES6 destructuring syntax:

const { name, age } = user;

*/

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };

// Only change code below this line

const { today, tomorrow } = HIGH_TEMPERATURES;
console.log(today);

// Only change code above this line

/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-to-assign-variables-from-objects

*/

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };

// Only change code below this line

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

// Only change code above this line

/*

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-the-spread-operator-to-evaluate-arrays-in-place

___ Use the Spread Operator to Evaluate Arrays In-Place ___

ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);

...arr returns an unpacked array. In other words, it spreads the array. However, the spread operator only works in-place, like in an argument to a function or in an array literal.
The following code will not work:

const spreaded = ...arr;

*/

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);

/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-to-assign-variables-from-arrays

___ Use Destructuring Assignment to Assign Variables from Arrays ___

One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list.
Consequently, you cannot pick or choose which elements you want to assign to variables.

Destructuring an array lets us do exactly that:

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);

The variable a is assigned the first value of the array, and b is assigned the second value of the array.
We can also access the value at any index in an array with destructuring by using commas to reach the desired index:

const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);

Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a:
*/

let a = 8, b = 6;
// Only change code below this line

[a, b] = [b, a];

/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-to-pass-an-object-as-a-functions-parameters

___ Use Destructuring Assignment to Pass an Object as a Function's Parameters ___

In some cases, you can destructure the object in a function argument itself.

Consider the code below:

const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
}

This effectively destructures the object sent into the function. This can also be done in-place:

const profileUpdate = ({ name, age, nationality, location }) => {}

Use destructuring assignment within the argument to the function half to send only max and min inside the function:
*/

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({max, min}) => (max + min) / 2.0;
// Only change code above this line
