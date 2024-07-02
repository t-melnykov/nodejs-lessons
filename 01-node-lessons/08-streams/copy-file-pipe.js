import fs from 'fs';

const read_stream = fs.createReadStream('./files/file1.ts');
const write_stream = fs.createWriteStream('./files/file2.ts');

console.log('Copying file...');
read_stream.pipe(write_stream);
console.log('Other code');

write_stream.on('close', () => {
    console.log('File copied');
});
