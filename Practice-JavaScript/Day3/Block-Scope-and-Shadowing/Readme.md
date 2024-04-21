**What is Block Scope and Shadowing in JavaScript?**


**Definition:**
Block scope refers to the visibility and lifetime of variables within a block of code, typically delineated by curly braces {}. Variables declared inside a block are only accessible within that block and any nested blocks.
Shadowing occurs when a variable declared within a nested scope has the same name as a variable in an outer scope. The inner variable "shadows" the outer variable, meaning the outer variable becomes temporarily inaccessible within the scope of the inner variable.
**Usage:**
Block scope is commonly used with let and const declarations to limit the visibility of variables to a specific block of code.
Shadowing often occurs unintentionally but can be used intentionally to create clearer and more maintainable code by preventing unintended changes to variables in outer scopes.
**Behavior:**
Variables declared with let and const have block scope, meaning they are only accessible within the block in which they are defined, including any nested blocks.
When a variable is shadowed, references to that variable within the inner scope refer to the inner variable, not the outer variable with the same name. The outer variable remains intact and accessible outside the inner scope.
**Exceptions:**
Shadowing can lead to confusion and unintended consequences if not used carefully. It's essential to be mindful of variable names and their scopes to avoid unexpected behavior.
Hoisting does not affect block-scoped variables declared with let and const. They are hoisted to the top of their block but remain uninitialized (in the Temporal Dead Zone) until their declaration is reached during execution.