import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';
import { resolve } from 'path';

const FILE_PATH = resolve(`./src/streams/files/fileToRead.txt`);

const read = async () => {
    const stream = createReadStream(FILE_PATH);

    await pipeline(stream, process.stdout);
};

await read();