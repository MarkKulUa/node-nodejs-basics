import { cpus } from 'os';
import { Worker } from 'worker_threads';
import { resolve } from "path";

const FILE_PATH = resolve(`./src/wt/worker.js`);
const CALCULATE_START_NUMBER = 10;

const performCalculations = async () => {

    const calculateFibonacciResult = (workerData) => new Promise((resolve) => {
        const worker = new Worker(FILE_PATH, {workerData});

        worker.on('message', (result) => resolve({ status: 'calculated', result: result}));
        worker.on('error', () => resolve({ status: 'error', result: false}));
    });

    const calcPromises = cpus()
        .map((value, key) => calculateFibonacciResult(CALCULATE_START_NUMBER + key));

    const result = await Promise.all(calcPromises);

    console.log(result);
};

await performCalculations();