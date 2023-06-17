import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { resolve } from 'path';

const FILE_PATH = resolve(`./src/streams/files/fileToWrite.txt`);

const write = async () => {
    const stream = createWriteStream(FILE_PATH);

    await pipeline(process.stdin, stream);
};

await write();