Functional Programming is another popular approach to software development. In Functional Programming, code is organized into smaller, basic functions that can be combined to build complex programs.

In this course, you'll learn the core concepts of Functional Programming including pure functions, how to avoid mutations, and how to write cleaner code with methods like `.map()` and `.filter()`.

Functional programming is a style of programming where solutions are simple, isolated functions, without any side effects outside of the function scope:
```
INPUT -> PROCESS -> OUTPUT
```

Functional programming is about:

    - Isolated functions: there is no dependence on the state of the program, which includes global variables that are subject to change

    - Pure functions: the same input always gives the same output

    - Functions with limited side effects: any changes, or mutations, to the state of the program outside the function are carefully controlled

## Functional Terminology

*Callbacks* are the functions that are slipped or passed into another function to decide the invocation of that function.
You may have seen them passed to other methods, for example in filter, the callback function tells JavaScript the criteria for how to filter an array.

Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value, are called *first class functions*.
In JavaScript, all functions are first class functions.

The functions that take a function as an argument, or return a function as a return value are called *higher order functions*.

When functions are passed in to or returned from another function, then those functions which were passed in or returned can be called a *lambda*.

## Hazards of Using Imperative Code

Functional programming is a good habit.
It keeps your code easy to manage, and saves you from sneaky bugs.
But before we get there, let's look at an imperative approach to programming to highlight where you may have issues.

In English (and many other languages), the imperative tense is used to give commands.
Similarly, an imperative style in programming is one that gives the computer a set of statements to perform a task.

Often the statements change the state of the program, like updating global variables.
A classic example is writing a for loop that gives exact directions to iterate over the indices of an array.

In contrast, functional programming is a form of declarative programming.
You tell the computer what you want done by calling a method or function.

JavaScript offers many predefined methods that handle common tasks so you don't need to write out how the computer should perform them.
For example, instead of using the for loop mentioned above, you could call the map method which handles the details of iterating over an array.
This helps to avoid semantic errors, like the ["Off By One Errors"](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/debugging/catch-off-by-one-errors-when-using-indexing) that were covered in the Debugging section.
