import fs from 'node:fs/promises';
import {resolve} from 'path';

const ORIGINAL_FILE_NAME = 'wrongFilename.txt';
const NEW_FILE_NAME = 'properFilename.md';

const isFileExists = async (path) => !!(await fs.stat(path).catch(() => false));

const rename = async () => {

    try {
        if (await isFileExists(resolve(`./src/fs/files/${NEW_FILE_NAME}`))) {
            throw 'File exists';
        }

        fs.rename(resolve(`./src/fs/files/${ORIGINAL_FILE_NAME}`), resolve(`./src/fs/files/${NEW_FILE_NAME}`));
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await rename();