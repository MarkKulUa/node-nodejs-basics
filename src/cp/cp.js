import { fork } from 'child_process';
import { resolve } from "path";

const FILE_PATH = resolve(`./src/cp/files/script.js`);

const spawnChildProcess = async (args) => {
    const forkObjChildProcess = fork(FILE_PATH, args, { silent: true });

    process.stdin.pipe(forkObjChildProcess.stdin);

    forkObjChildProcess.stdout.pipe(process.stdout);
};

spawnChildProcess(['test_arg1', 'test_arg2']);
