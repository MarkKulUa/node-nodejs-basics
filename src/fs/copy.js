import { readdir, copyFile, constants } from 'node:fs/promises';
import { resolve } from 'path';

const ORIGINAL_FOLDER_NAME = resolve(`./src/fs/files`);
const NEW_FOLDER_NAME = resolve(`./src/fs/files_copy`);

const copy = async () => {

    const [originFileNames] = await Promise.all([readdir(ORIGINAL_FOLDER_NAME)]);

    try {
        originFileNames.map((fileName) => {
            copyFile(ORIGINAL_FOLDER_NAME + '/' + fileName, NEW_FOLDER_NAME + '/' + fileName, constants.COPYFILE_EXCL);
        })

    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await copy();
