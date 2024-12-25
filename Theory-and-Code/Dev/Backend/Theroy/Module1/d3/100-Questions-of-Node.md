# (1) What is node.js?

Node.js is a cross-platform, open source, JavaScript runtime enviorment, to put it simply it allows us to execute javascript code outside of the browser, which was not originally possible. it's built on google chrome's v8 engine. which compiles JavaScript into a machine-readable code for performance. it is a powerful js engine written in c++
think of node like bridge between client-side javascript and backend enabling javascript to be used in server-side scripting.

1. Single Threaded and Non Blocking:

   - Node.js operates on a hybrid single threaded event loop architecture that supports asynchronous I/O operations
   - This means it can handle multiple requestes concurrently without waitng one operations to complete

2. Event-Driven Architecture:

   - Node.js is built on event driven architecture, where tasks are registered as events and executed when their turns arrives in the event loop.

3. Asynchronous I/O:

   - Node.js Performs non-blocking I/O operations, making it well suated fot I/O-intensive applications like real time chat apps, REST api, file server etc.

# Why Node.js is useful ?

1. Speed and efficiency:

   - Node.js is built on Google's V8 JavaScript engine, which complies javascript code into machine-code, it is good for hight i/o operations

2. Lighwaight Architecture:

   - Thanks to the single threaded architecture and event loop in the libunv library, it can handel thousands of concurrent requestes without creating a new thread for each request.



# Where I Have Used Node.js

1. In a previous project, I used Node.js with clustering to build a scalable REST API for an e-commerce application. The lightweight nature of Node.js ensured low latency even with millions of requests.

2. I implemented a chat system using Socket.IO. Node.js’s event-driven architecture made handling real-time updates seamless. 

3. I used Node.js streams to efficiently process and upload large files without consuming too much memory.
