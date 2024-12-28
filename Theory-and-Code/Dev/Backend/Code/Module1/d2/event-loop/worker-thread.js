const { Worker, isMainThread, parentPort } = require('worker_threads');

if (isMainThread) {
    console.log('Main thread: Starting two worker threads.');

    const worker1 = new Worker(__filename);
    const worker2 = new Worker(__filename);

    worker1.on('message', (msg) => console.log(`Worker 1: ${msg}`));
    worker2.on('message', (msg) => console.log(`Worker 2: ${msg}`));

    console.log('Main thread: Workers started.');
} else {
    // Worker thread logic
    const result = heavyComputation();
    parentPort.postMessage(`Computation done: ${result}`);
}

function heavyComputation() {
    let sum = 0;
    for (let i = 0; i < 1e9; i++) {
        sum += i;
    }
    return sum;
}
