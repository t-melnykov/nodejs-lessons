import { _COMMENTS } from './data.mjs';

const get_HTML = (req, res) => {
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
    return res.end();
};

const get_comments = (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(_COMMENTS));
    return res.end();
};

const add_comment = (req, res) => {
    // Check content-type
    if (req.headers['content-type'] !== 'application/json') {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'text/plain');
        return res.end('Bad request');
    }

    let comment = '';

    req.on('data', (chunk) => {
        comment += chunk;
    });

    req.on('end', () => {
        let message = '';
        try {
            comment = JSON.parse(comment);
            res.statusCode = 201;
            const id = _COMMENTS.length + 1;
            _COMMENTS.push({ id, body: comment.text });
            res.write(JSON.stringify(_COMMENTS));
        } catch (error) {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'text/plain');
            message = 'Bad request';
        }

        return res.end(message);
    });
};

const request_not_found = (req, res) => {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    return res.end('Not found');
};

export { get_HTML, get_comments, request_not_found, add_comment };
