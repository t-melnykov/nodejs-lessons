import fs from 'fs';

const write_stream = fs.createWriteStream('./output.txt');

write_stream.write('Hello, ');
write_stream.write('world!');
write_stream.write(' How are you?');
write_stream.end();
