**What is Closure in JavaScript?**


**Definition:**
A closure is a feature in JavaScript where a function remembers the variables from its outer scope even after the outer function has finished executing. It essentially "closes over" the variables, retaining access to them.

**Usage:**
Closures are commonly used to create private variables, maintain state in functional programming, and implement data encapsulation.

**Behavior:**
When a function is defined within another function, it forms a closure. The inner function has access to its own local variables, as well as variables from its outer (enclosing) scope, including the parameters and variables of the outer function.

The inner function "captures" the variables it needs from the outer scope, creating a closure. Even if the outer function has finished executing, the inner function still retains access to the variables it closed over.

Closures have access to their own local variables, the outer function's variables, and global variables. They can access and modify these variables even after the outer function has returned.

**Exceptions:**
Closures can lead to memory leaks if not used carefully, as they retain references to the outer scope variables, preventing them from being garbage collected.
It's crucial to be mindful of the scope chain when working with closures to avoid unintended memory consumption or variable access issues.


**Here is a youtube video for indepth explanation**
[youtube](https://youtu.be/d4_hcQkGkfI?si=KznSwnWIgU4G4VgG)