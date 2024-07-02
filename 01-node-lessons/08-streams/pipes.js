import fs from 'fs';

const write_stream = fs.createWriteStream('./output-1.txt');
const read_stream = fs.createReadStream('./output-1.txt', 'utf-8');
const write_stream2 = fs.createWriteStream('./output-2.txt', 'utf-8');

read_stream.pipe(write_stream2);

write_stream.write('Hello, \n');
write_stream.write('world!');
write_stream.write(' How are you?');
write_stream.end();
