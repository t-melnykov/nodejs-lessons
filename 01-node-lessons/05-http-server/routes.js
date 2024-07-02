import http from 'http';

const _PORT = 5000;

const server = http.createServer((req, res) => {
    if (req.url === '/http') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write(`
            <!doctype html>
            <html>
                <head>
                    <title>HTTP</title>
                </head>
                <body>
                    <h1>HTTP</h1>
                    <p>HTTP (Hypertext Transfer Protocol) is the foundation of data communication on the internet.</p>
                </body>
            </html>
            `);
        res.end();
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not found');
    }
});

server.listen(_PORT, () => {
    console.log(`Server is running on port ${_PORT}`);
});
