import { createHash } from 'crypto';
import { readFile } from 'node:fs/promises';
import { resolve } from 'path';

const FILE_PATH = resolve(`./src/hash/files/fileToCalculateHashFor.txt`);

const calculateHash = async () => {
    const fileContent = await readFile(FILE_PATH, 'utf-8');
    const hash = createHash('SHA256').update(fileContent);

    console.log(`${hash.digest('hex')}`);
};

await calculateHash();