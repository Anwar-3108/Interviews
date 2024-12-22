# Explain what a callback function is and provide an example.

A Callback function is a function that passed as an argument into an other function, which is then executed after the completion of that function's operation. callback functions are commonly used to handle asynchronous operations

Let me break it down, A callback is likely saying, "hey, once you done this task just let mme know by calling this function"
in JavaScript callbacks are havily used in asynchronous programming because taks like reading/writing file, fetching data, making network calls dont block execution of rest of the code, by using callback we can keep the code non-blocking and efficient.

there are two types of callback functions

1. [synchronous callbacks](../Code/Module1/d2/callbacks/syncronous-callbacks.js)
2. [asynchronous callbacks](../Code/Module1/d2/callbacks/asyncronous-callbacks.js)

---

# Callback Hell

In real world, if we chain multiple callbacks together in a deeply nested code, it is hard to read and maintain and this thing is called callback-hell. [example](../Code/Module1/d2/callbacks/callback-hell.js)

in the large codebase we don't use this so the alternate of callback is Promises or async/await to make it clean

---

# How do callbacks relate to asynchronous programming in JavaScript?

JavaScript is single threaded but it uses and event loop for asynchronous tasks, when an asynchronous task is initiated like fetching data, read/write operations it is offloaded and callbac is queued to be executed when the task is finished. this keeps the application responsive and non-blocking.

---

# What are the alternatives of callbacks?

The main alternatives are:

1. [Promises](../Code/Module1/d2/promises/promises.js)
2. [async/await](../Code/Module1/d2/async-await/async-await.js)

# _Promises_

A Promise represents the eventual completion or failure of an asynchronous operation and its resulting value
instead of nesting callbacks, promises allows us to chain .then() and .catch() methods makeing it more readable

# _async/await_

async/await is built on top of Promises it allows us to write asynchronous operations in a synchronous manner, it eliminates the need of then() and catch() methods

# When and Where to use the Promise and async/await

In practice, both async/await and promises are widely used but there are some use cases:

promises: useful to handling multiple asynchronous operations concurrently
async/await: preffer when you have a sequence of multiplem dependent asyncronous tasks as it imporoves readability
