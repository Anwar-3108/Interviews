**What is callback in js?**

**Defination:** Callback is a function that is passed as an argument to another function and it is executed at a later time, typically after the completion of asyncronous operation.

**Usage:** callbaks are commonly used to handle asynchronous operations like HTTP requests, reading files or waiting for some user input. basically it allows you to specify what should happen after the completion of an asyncronous operation 

**Behavior:** when you pass a callback to an other function so basically you are telling to do some task after completing the previous task , or if some event occurs


function recives a callback then invoke it at an appropriate time 

**exeptions:** callback can lead to callback-hell or nested callbacks , it can make the code harder to read and understand 


**Solution of exception:** to avoid the callback-hell issue we can use some alternatives such as Promises and async/await