import fs from 'fs';
import fs_promises from 'fs/promises';

// Callback API
fs.readFile('./file.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

// Promise API
fs_promises
    .readFile('./file.txt', 'utf8')
    .then((data) => console.log(data))
    .catch((err) => console.error(err));

// Sync API
try {
    const data = fs.readFileSync('./file.txt', 'utf8');
    console.log(data);
} catch (err) {
    console.error(err);
}
