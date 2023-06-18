import { readFile } from 'node:fs/promises';
import { resolve } from 'path';

const FILE_PATH = resolve(`./src/fs/files/fileToRead.txt`);

const read = async () => {
    try {
        const fileContent = await readFile(FILE_PATH, 'utf-8');
        console.log(fileContent);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await read();