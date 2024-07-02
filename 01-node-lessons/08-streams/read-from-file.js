import fs from 'fs';

const read_stream = fs.createReadStream('./output.txt', 'utf-8');

read_stream.on('data', (chunk) => {
    console.log(chunk);
});

read_stream.on('end', () => {
    console.log('Stream ended');
});

read_stream.on('error', (error) => {
    console.log(error);
});

// Run this file using node read-from-file.js
