/*
    👉 `this` depends on HOW a function is called, not where it is written.
    Now let’s understand:
    When `this` refers to the window object
    When it refers to a normal object

    1. What is `this` in JavaScript?
        `this` is a special keyword that refers to the current execution context (owner object).

    2. `this` in Global Scope

In browser JavaScript:
    console.log(this);
    Output: Window {...}

In global scope, `this` refers to the **window object**

3. Normal Function Call
    function test() {
        console.log(this);
    }
    test();
Output: Window {...}
👉 Because normal function calls default to window object (non-strict mode)

---

# ⚠️ In Strict Mode

"use strict";

function test() {
  console.log(this);
}

test();
Output: undefined
Strict mode prevents automatic window binding

4.`this` Inside Object Method
const user = {
  name: "Naveen",

  greet() {
    console.log(this);
  }
};

user.greet();
Output: 

{
  name: "Naveen",
  greet: f
}


👉 Here:
this = user object
Because:
Function is called using `user.greet()`

---
Rule to Remember
Who calls the function → becomes this

5. Arrow Functions (VERY IMPORTANT)

Arrow functions do NOT have their own `this`.

They inherit from parent scope.

---

Example

const obj = {
  name: "JavaScript",

  normal() {
    console.log(this);
  },

  arrow: () => {
    console.log(this);
  }
};

obj.normal();
obj.arrow();
```

---

Output:
normal()
obj
arrow()
window

Arrow function takes `this` from surrounding scope
How to Check If `this` is Window Object

console.log(this === window);
true

8. Check Inside Function
function test() {
  console.log(this === window);
}
test();
9. Check Object Reference

const obj = {
  test() {
    console.log(this === obj);
  }
};

obj.test();
Output
true
Real Mental Model

Think like this:

| Function Call        | `this` Refers To |
| -------------------- | ---------------- |
| Normal function      | window (browser) |
| Object method        | that object      |
| Arrow function       | parent scope     |
| Strict mode function | undefined        |


*/