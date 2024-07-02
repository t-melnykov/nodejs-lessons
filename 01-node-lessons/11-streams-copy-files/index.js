import fs from 'fs';
import path from 'path';
import EventsEmitter from 'events';

const _SRC_DIR = './files';
const _DST_DIR = './files-copy';

if (!fs.existsSync(_SRC_DIR)) {
    console.warn('Source directory does not exist');
    process.exit(0);
}

if (fs.existsSync(_DST_DIR)) {
    fs.rm(_DST_DIR, { recursive: true });
}
fs.mkdirSync(_DST_DIR);

const end_write_event = new EventsEmitter();
end_write_event.on('end_write', () => {
    console.log(`All files have been copied to ${_DST_DIR}`);
});

const dir = fs.readdir('./files', (err, files) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    const files_qnt = files.length;
    files.forEach((file, index) => {
        const read_stream = fs.createReadStream(path.join(_SRC_DIR, file));
        const write_stream = fs.createWriteStream(
            path.join(_DST_DIR, `${index}-${file}`)
        );

        read_stream.pipe(write_stream);
        write_stream.on('finish', () => {
            if (index === files_qnt - 1) {
                end_write_event.emit('end_write');
            }
        });
    });
});
