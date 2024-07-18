**What is Promises in JS?**

A Promise in js represent the eventual completion or a faliur of an asyncronous operation and its resulting value.

**Why Promise?**
Promises are commonly used to handle asyncronous operation in such as fetching data from the server, reading file or making http requests

it gives you a cleaner and structured way to handle asyncronous task pompared to traditional call-backs based approach

**States:**
A Promise can be in one of three states:

**Pending:** Initial state, neither fulfilled nor rejected.
**Fulfilled (Resolved):** The operation completed successfully, and the promise has a value.
**Rejected:** The operation failed, and the promise has a reason for failure (an error).

**Behavior:**
A Promise is created using the new **Promise()** constructor, which takes a callback function (often referred to as the executor function) as an argument. The executor function receives two arguments: resolve and reject.
Inside the executor function, you perform the asynchronous operation. When the operation completes successfully, you call **resolve()** with the result. If it fails, you call **reject()** with an error.
Consumers of the Promise can then use the **then()** method to handle the fulfilled state and the **catch()** method to handle the rejected state

For More Clarifications Open the Link 
[Youtube-Video](https://youtu.be/RpxX1QIWlVs?si=5HfgSB0QvQA__C6K)