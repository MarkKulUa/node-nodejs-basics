import { workerData, parentPort } from 'worker_threads';
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

//if (Math.random() > 0.5) throw new Error('Custom error');

const sendResult = () => {
    const fibonacciResult = nthFibonacci(workerData);
    parentPort.postMessage(fibonacciResult);
};

sendResult();