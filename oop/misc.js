/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-a-mixin-to-add-common-behavior-between-unrelated-objects

___ Use a Mixin to Add Common Behavior Between Unrelated Objects ___

As you have seen, behavior is shared through inheritance. However, there are cases when inheritance is not the best solution.
Inheritance does not work well for unrelated objects like Bird and Airplane. They can both fly, but a Bird is not a type of Airplane and vice versa.

For unrelated objects, it's better to use mixins. A mixin allows other objects to use a collection of functions.

let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};

The flyMixin takes any object and gives it the fly method.

let bird = {
  name: "Donald",
  numLegs: 2
};

let plane = {
  model: "777",
  numPassengers: 524
};

flyMixin(bird);
flyMixin(plane);

Create a mixin named glideMixin that defines a method named glide. Then use the glideMixin to give both bird and boat the ability to glide:
*/

let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Only change code below this line

let glideMixin = (obj) =>
  obj.glide = function() {
    console.log("!");
  }

glideMixin(bird);
glideMixin(boat);

/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-closure-to-protect-properties-within-an-object-from-being-modified-externally

___ Use Closure to Protect Properties Within an Object from Being Modified Externally ___

In the previous challenge, bird had a public property name. It is considered public because it can be accessed and changed outside of bird's definition.

bird.name = "Duffy";

Therefore, any part of your code can easily change the name of bird to any value.

The simplest way to make this public property private is by creating a variable within the constructor function.
This changes the scope of that variable to be within the constructor function versus available globally.
This way, the variable can only be accessed and changed by methods also within the constructor function.

function Bird() {
  let hatchedEgg = 10;

  this.getHatchedEggCount = function() {
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount();

Here getHatchedEggCount is a privileged method, because it has access to the private variable hatchedEgg.
This is possible because hatchedEgg is declared in the same context as getHatchedEggCount.
In JavaScript, a function always has access to the context in which it was created. This is called closure.

Change how weight is declared in the Bird function so it is a private variable. Then, create a method getWeight that returns the value of weight 15:
*/

function Bird() {
  let weight = 15;

  this.getWeight = function() {
    return weight;
  };
}

/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/understand-the-immediately-invoked-function-expression-iife

___ Understand the Immediately Invoked Function Expression (IIFE) ___

*/

(function makeNest() {
  console.log("A cozy nest is ready");
})();

/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-an-iife-to-create-a-module

___ Use an IIFE to Create a Module ___

An immediately invoked function expression (IIFE) is often used to group related functionality into a single object or module.

For example, an earlier challenge defined two mixins:

function glideMixin(obj) {
  obj.glide = function() {
    console.log("Gliding on the water");
  };
}
function flyMixin(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  };
}

We can group these mixins into a module as follows:

let motionModule = (function () {
  return {
    glideMixin: function(obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
})();

Note that you have an immediately invoked function expression (IIFE) that returns an object motionModule.
This returned object contains all of the mixin behaviors as properties of the object.
The advantage of the module pattern is that all of the motion behaviors can be packaged into a single object that can then be used by other parts of your code.
Here is an example using it:

motionModule.glideMixin(duck);
duck.glide();



Create a module named funModule to wrap the two mixins isCuteMixin and singMixin. funModule should return an object:
*/

let funModule = (function () {
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
      };
    },
    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      };
    }
  }
})();
