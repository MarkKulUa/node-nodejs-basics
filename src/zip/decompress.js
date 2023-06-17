import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { createGunzip } from 'zlib';
import { resolve } from 'path';

const FILE_PATH = resolve(`./src/zip/files/fileToCompress.txt`);
const FILE_ARCH_PATH = resolve(`./src/zip/files/fileCompressed.gz`);


const decompress = async () => {
    await pipeline(createReadStream(FILE_ARCH_PATH), createGunzip(), createWriteStream(FILE_PATH));
};

await decompress();