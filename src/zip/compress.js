import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { createGzip } from 'zlib';
import { resolve } from 'path';

const FILE_PATH = resolve(`./src/zip/files/fileToCompress.txt`);
const FILE_ARCH_PATH = resolve(`./src/zip/files/fileCompressed.gz`);

const compress = async () => {
    await pipeline(createReadStream(FILE_PATH), createGzip(), createWriteStream(FILE_ARCH_PATH));
};

await compress();