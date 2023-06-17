import { readdir } from 'node:fs/promises';
import { resolve } from 'path';

const FOLDER_PATH = resolve(`./src/fs/files`);

const list = async () => {
    try {
        const folderList = await readdir(FOLDER_PATH);
        console.log(folderList);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await list();