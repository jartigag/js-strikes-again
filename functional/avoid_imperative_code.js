/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/understand-the-hazards-of-using-imperative-code

___ Understand the Hazards of Using Imperative Code ___

Consider the scenario: you are browsing the web in your browser, and want to track the tabs you have opened.
Let's try to model this using some simple object-oriented code.

A Window object is made up of tabs, and you usually have more than one Window open.
The titles of each open site in each Window object is held in an array.
After working in the browser (opening new tabs, merging windows, and closing tabs), you want to print the tabs that are still open.
Closed tabs are removed from the array and new tabs (for simplicity) get added to the end of it.

The code editor shows an implementation of this functionality with functions for tabOpen(), tabClose(), and join().
The array tabs is part of the Window object that stores the name of the open pages.

Examine the code in the editor. It's using a method that has side effects in the program, causing incorrect behaviour.
The final list of open tabs, stored in finalTabs.tabs, should be
['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']
but the list produced by the code is slightly different.

Change Window.prototype.tabClose so that it removes the correct tab:
*/

// tabs is an array of titles of each site open within the window
var Window = function(tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function (tab) {
  this.tabs.push('new tab'); // Let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function (index) {

  // Only change code below this line

  // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
  /*var tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
  var tabsAfterIndex = this.tabs.splice(index + 1); // Get the tabs after the tab*/

  var tabsBeforeIndex = this.tabs.slice(0, index); // Get the tabs before the tab
  var tabsAfterIndex = this.tabs.slice(index + 1); // Get the tabs after the tab*/

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together */

  // Only change code above this line

  return this;
 };

// Let's create three browser windows
var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
var finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);

/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/avoid-mutations-and-side-effects-using-functional-programming

___ Avoid Mutations and Side Effects Using Functional Programming ___

If you haven't already figured it out, the issue in the previous challenge was with the splice call in the tabClose() function.
Unfortunately, splice changes the original array it is called on, so the second call to it used a modified array, and gave unexpected results.

This is a small example of a much larger pattern - you call a function on a variable, array, or an object, and the function changes the variable or something in the object.

One of the core principles of functional programming is to not change things.
Changes lead to bugs. It's easier to prevent bugs knowing that your functions don't change anything, including the function arguments or any global variable.

The previous example didn't have any complicated operations but the splice method changed the original array, and resulted in a bug.

Recall that in functional programming, changing or altering things is called mutation, and the outcome is called a *side effect*.
A function, ideally, should be a *pure function*, meaning that it does not cause any side effects.

Let's try to master this discipline and not alter any variable or object in our code.

Fill in the code for the function incrementer so it returns the value of the global variable fixedValue increased by one:
*/

// The global variable
var fixedValue = 4;

function incrementer () {
  // Only change code below this line
  return fixedValue+1;
  // Only change code above this line
}

/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/pass-arguments-to-avoid-external-dependence-in-a-function

___ Pass Arguments to Avoid External Dependence in a Function ___

The last challenge was a step closer to functional programming principles, but there is still something missing.

We didn't alter the global variable value, but the function incrementer would not work without the global variable fixedValue being there.

Another principle of functional programming is to always declare your dependencies explicitly.
This means if a function depends on a variable or object being present, then pass that variable or object directly into the function as an argument.

There are several good consequences from this principle.
The function is easier to test, you know exactly what input it takes, and it won't depend on anything else in your program.

This can give you more confidence when you alter, remove, or add new code.
You would know what you can or cannot change and you can see where the potential traps are.

Finally, the function would always produce the same output for the same set of inputs, no matter what part of the code executes it.



Let's update the incrementer function to clearly declare its dependencies.

Write the incrementer function so it takes an argument, and then returns a result after increasing the value by one:
*/

// The global variable
var fixedValue = 4;

// Only change code below this line
function incrementer (val) {
  return val+1;
  // Only change code above this line
}

/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/refactor-global-variables-out-of-functions

___ Refactor Global Variables Out of Functions ___

So far, we have seen two distinct principles for functional programming:

    1. Don't alter a variable or object - create new variables and objects and return them if need be from a function.
    Hint: using something like var newArr = arrVar, where arrVar is an array will simply create a reference to the existing variable and not a copy.
    So changing a value in newArr would change the value in arrVar.

    2. Declare function parameters - any computation inside a function depends only on the arguments passed to the function, and not on any global object or variable.

Adding one to a number is not very exciting, but we can apply these principles when working with arrays or more complex objects

Rewrite the code so the global array bookList is not changed inside either function.
The add function should add the given bookName to the end of the array passed to it and return a new array (list).
The remove function should remove the given bookName from the array passed to it.
Note: Both functions should return an array, and any new parameters should be added before the bookName parameter.
*/

// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophi?? Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (bookList, bookName) {

  var newBookList = [...bookList];
  newBookList.push(bookName);
  return newBookList;

  // Change code above this line
}

// Change code below this line
function remove (bookList, bookName) {

  var newBookList = [...bookList];
  var book_index = newBookList.indexOf(bookName);

  if (book_index >= 0) {
    newBookList.splice(book_index, 1);
    return newBookList;
    // Change code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
console.log(bookList);
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
