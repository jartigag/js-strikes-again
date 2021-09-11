/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/iterate-through-all-an-arrays-items-using-for-loops

Sometimes when working with arrays, it is very handy to be able to iterate through each item to find one or more elements that we might need,
or to manipulate an array based on which data items meet a certain set of criteria.
JavaScript offers several built in methods that each iterate over arrays in slightly different ways to achieve different results
(such as every(), forEach(), map(), etc.),
however the technique which is most flexible and offers us the greatest amount of control is a simple for loop.

Consider the following:

function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]);

*/

//TODO: for
//TODO: forEach
//TODO: every
//TODO: map

/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/generate-an-array-of-all-object-keys-with-object-keys */

let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // Only change code below this line
  return Object.keys(obj);
  // Only change code above this line
}

console.log(getArrayOfUsers(users));

/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/iterate-through-the-keys-of-an-object-with-a-for---in-statement

___ Iterate Through the Keys of an Object with a for...in Statement ___

*/

function countOnline(usersObj) {
  // Only change code below this line
  let onlineUsers = [];
  for (let user in usersObj) {
    if (usersObj[user].online) {
      onlineUsers.push(user);
      console.log(onlineUsers.length);
    }
  }
  return onlineUsers.length;
  // Only change code above this line
}

countOnline(
  {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
)

/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/check-for-the-presence-of-an-element-with-indexof

___ Check For The Presence of an Element With indexOf() ___

*/

function quickCheck(arr, elem) {
  // Only change code below this line
  return (arr.indexOf(elem)>=0);
  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
