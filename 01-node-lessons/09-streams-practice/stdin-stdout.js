import fs from 'fs';
import { Transform } from 'stream';

//! Pipe from std in to std out
// process.stdin.pipe(process.stdout);

//! Pipe from file to std out
// const write_stream = fs.createWriteStream('./files/file.txt');
// process.stdin.pipe(write_stream);

//! Task
// Revesing input string

const transform_string = new Transform({
    transform(chunk, encoding, callback) {
        let reverse = chunk.toString().split('');
        reverse.pop();
        reverse = reverse.reverse();
        reverse.push('\n');
        reverse = reverse.join('');
        callback(null, reverse);
    },
});

process.stdin.pipe(transform_string).pipe(process.stdout);
