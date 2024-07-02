import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        console.log('File starts sending...');
        const read_stream = fs.createReadStream('./files/file.ts', {
            start: 0,
            end: Infinity,
        });
        res.statusCode = 200;
        res.setHeader('Content-Type', 'media/type');
        read_stream.pipe(res);
        read_stream.on('end', () => {
            console.log('File sent');
        });
        console.log('Request ends');
    }
});

server.listen(5000, () => {
    console.log('Server is running on port 3000');
});
