import { writeFile } from 'fs/promises';
import { resolve } from 'path';


const NEW_FILE_NAME = 'fresh.txt';
const NEW_FILE_TEXT = 'I am fresh and young';
const create = async () => {
    const absolutePath = resolve(`./src/fs/files/${NEW_FILE_NAME}`);

    try {
        await writeFile(absolutePath, NEW_FILE_TEXT, { flag: 'wx'});
    } catch (err) {
        throw new Error('FS operation failed');
    }
};


await create();