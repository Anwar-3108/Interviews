# What is the Event Loop in Node.js?

EventLoop is the core machanism of in Node.js that enables non-blocking , asyncronous operations despite node.js being single threaded. it manages the execution of multiple tasks, handles asynchronous operations like I/O, timers, and callsbacks, and ensures efficient processing without blocking the main thread.

Node.js Achives the using component like:

_V8:_ The JavaScript engine that compiles and executes JavaScript.

_Libuv:_ A library responsible for abstracting asynchronous I/O across platforms.

_Event Loop:_ The orchestrator that coordinates the execution of tasks

V8 Engine

- Node.js runs on the V8 engine, the same engine used by Google Chrome.

- V8 compiles JavaScript into machine code, ensuring fast execution. However, V8 alone doesn't handle asynchronous operations, That's where libuv and the event loop come in.

libuv

- Node.js uses libuv, a c++ library, to manages I/O tasks, timers, and other asynchronous operations.

- It provides:

  - A thread pool for handling expensive tasks, (e.g, file I/O, DNS, Lookups).

  - An abstract for asynchronous, platform-agnostic operations.

Call Stack

- The call stack is a data structure that manages the execution of function calls.

- When a function is invoked, it's added to the stack. Once it completes, it's removed.

- Syncronous code executes directly in the call stack. Asynchronous code is passed to the event loop.

callback queue

- When asynchronous operations (e.g, setTimeout) complete, their callback functins are queued in the callback queue, waiting for the event loop to process them.

Microtask Queue

- This queue handles task like Promises or process.nextTick().

- Microtask have higher priority than callbacks in the event loop, meaning they are executed before moving to the next event loop phase.


---


# How Does the Event Loop Work?

The event loop is essentially a continuous cycle that processes different tasks in phases.
It ensures that syncronous, asynchronous, and I/O  operations are all executed efficiently.


1. Synchronous Executions: 
   
   - First, the call stack processes all syncronous tasks.

   - If there's asynchronous code(e.g, setTimeout), it's offloaded to libuv. 

2. Offloading to libuv: 
  
   - Task like file I/O or HTTP requests are handled by libuv in the background
   - Once these tasks are complete, there callbacks are added to the callback queue

3.  Callbacks queue and event loop: 

   - The event loop continuesly checks the callstack and processes the task from the callbaack queue, if callstack is empty
   
4.   Microtask queue

   - Before moving to the next phase, the event loop processes all the microtasks
   
