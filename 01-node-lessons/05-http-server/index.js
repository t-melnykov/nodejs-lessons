import http from 'http';

const _PORT = 5000;

const server = http.createServer((req, res) => {
    console.log(req);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('Hello World 33');
});

server.listen(_PORT, () => {
    console.log(`Server is running on port ${_PORT}`);
});
