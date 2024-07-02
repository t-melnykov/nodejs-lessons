import fs from 'fs';
import fs_promises from 'fs/promises';

// Callback API
fs.writeFile('./file.txt', 'Hello, world!', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File written successfully');
});

// Promise API
fs_promises
    .writeFile('./file.txt', 'Hello, world!')
    .then(() => console.log('File written successfully'))
    .catch((err) => console.error(err));

// Sync API
try {
    fs.writeFileSync('./file.txt', 'Hello, world!');
    console.log('File written successfully');
} catch (err) {
    console.error(err);
}
