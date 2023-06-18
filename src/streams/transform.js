import { pipeline } from 'stream/promises';
import { Transform } from 'stream';

function reverseString(str) {
    return str.split('').reverse().join('');
}

const transform = async () => {

    const transformedStream = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, reverseString(String(chunk)));
        },
    });

    await pipeline(process.stdin, transformedStream, process.stdout);
};

await transform();