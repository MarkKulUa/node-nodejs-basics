import { rm } from 'node:fs/promises';
import {resolve} from 'path';

const FILE_NAME = 'fileToRemove.txt';
const FILE_PATH = resolve(`./src/fs/files/${FILE_NAME}`)

const remove = async () => {
    try {
      await rm(FILE_PATH);
    } catch (err) {
        throw new Error('FS operation failed');
    }};

await remove();