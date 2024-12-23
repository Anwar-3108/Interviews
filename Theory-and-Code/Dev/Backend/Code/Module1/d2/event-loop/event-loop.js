const fs = require('fs');

console.log('1. Start of the program'); // Synchronous Task

setTimeout(() => {
  console.log('5. setTimeout callback (Timers Phase)'); // Timers Phase
}, 0);

setImmediate(() => {
  console.log('6. setImmediate callback (Check Phase)'); // Check Phase
});

fs.readFile(__filename, () => {
  console.log('7. I/O callback (Poll Phase)'); // Poll Phase

  setTimeout(() => {
    console.log('10. setTimeout inside I/O (Timers Phase)');
  }, 0);

  setImmediate(() => {
    console.log('9. setImmediate inside I/O (Check Phase)');
  });

  process.nextTick(() => {
    console.log('8. process.nextTick inside I/O (Microtask Queue)');
  });
});

Promise.resolve().then(() => {
  console.log('4. Promise resolved callback (Microtask Queue)'); // Microtask
});

process.nextTick(() => {
  console.log('3. process.nextTick callback (Microtask Queue)'); // Microtask
});

console.log('2. End of the program'); // Synchronous Task
