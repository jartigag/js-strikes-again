/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-recursion-to-create-a-countdown

In a previous challenge, you learned how to use recursion to replace a for loop.
Now, let's look at a more complex function that returns an array of consecutive integers
starting with 1 through the number passed to the function.

As mentioned in the previous challenge, there will be a *base case*.
The base case tells the recursive function when it no longer needs to call itself. It is a simple case where the return value is already known.
There will also be a *recursive call* which executes the original function with different arguments.
If the function is written correctly, eventually the base case will be reached.

We have defined a function called `countdown` with one parameter (`n`).
The function should use recursion to return an array containing the integers n through 1 based on the n parameter.
If the function is called with a number less than 1, the function should return an empty array.
For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1].
Your function must use recursion by calling itself and must not use loops of any kind.

*/

function countdown(n){
    if (n < 1) {
      return [];
    } else {
      var countArray = countdown(n-1);
      countArray.unshift(n);
      return countArray;
    }
  }
