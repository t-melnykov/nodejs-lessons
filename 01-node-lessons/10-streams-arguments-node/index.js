import fs from 'fs';

if (!process.argv[2] || !process.argv[3]) {
    console.log('Please provide two arguments');
    process.exit(0);
}

const filename = process.argv[2];
const lines_qnt = parseInt(process.argv[3]);

if (isNaN(lines_qnt)) {
    console.log('Second argument must be a number');
    process.exit(0);
}

const write_stream = fs.createWriteStream(filename);

for (let i = 0; i < lines_qnt; i++) {
    write_stream.write(`${i + 1}\n`);
}

write_stream.end();
