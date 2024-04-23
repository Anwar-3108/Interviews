//  example of synchronous code:

// console.log("Start");
// console.log("Middle");
// console.log("End");

// In this code snippet, 'Start' will be logged first, followed by 'Middle', and then 'End'. The execution flow is straightforward and predictable.

// console.log('Start');

// setTimeout(() => {
//     console.log('Inside setTimeout');
// }, 2000);

// console.log('End');

// In this code snippet, 'Start' and 'End' are logged first, while 'Inside setTimeout' will be logged after approximately 2 seconds. The setTimeout function schedules the execution of its callback after a specified delay, allowing the rest of the code to continue executing in the meantime.

// example using promises
// console.log('Start');

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Promise resolved');
//     }, 2000);
// });

// promise.then((result) => {
//     console.log(result);
// });

// console.log('End');

// In this code snippet, 'Start' and 'End' are logged first, while 'Promise resolved' will be logged after approximately 2 seconds. The Promise constructor creates a promise object that resolves after 2 seconds, and the then method is used to handle the resolved value asynchronously.

// Example using async/await:

console.log('Start');

async function asyncFunction() {
    await new Promise((resolve) => {
        setTimeout(() => {
            console.log('Inside asyncFunction');
            resolve();
        }, 2000);
    });
}

asyncFunction();

console.log('End');

// In this code snippet, 'Start' and 'End' are logged first, while 'Inside asyncFunction' will be logged after approximately 2 seconds. The asyncFunction is defined as an asynchronous function using the async keyword, and the await keyword is used to wait for the promise to resolve before logging 'Inside asyncFunction'.

// In summary, synchronous JavaScript executes code sequentially, while asynchronous JavaScript allows code to execute concurrently, improving performance and responsiveness, especially for tasks that involve I/O operations or network requests. Asynchronous programming in JavaScript is typically achieved through callbacks, promises, or async/await syntax. Each approach has its own advantages and use cases, depending on the specific requirements of the application.
