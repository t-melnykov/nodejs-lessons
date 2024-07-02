import { _COMMENTS, _PUBLIC_PATH } from './data.mjs';
import fs from 'fs/promises';
import path from 'path';
import qs from 'querystring';

const get_home = (req, res) => {
    const html_path = path.resolve(_PUBLIC_PATH, 'html', 'comment-form.html');
    fs.readFile(html_path, 'utf-8')
        .then((data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        })
        .catch((error) => {
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.write('<h1>Internal server error</h1>');
            res.write(`<p>${error}</p>`);
            res.end();
        });
};

const get_comments = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(_COMMENTS));
    res.end();
};

const request_not_found = (req, res) => {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<h1>Page not found</h1>');
    res.end();
};

const add_comment = (req, res) => {
    // Check content-type
    if (
        req.headers['content-type'] !== 'application/x-www-form-urlencoded' &&
        req.headers['content-type'] !== 'application/json'
    ) {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'text/plain');
        return res.end('Data must be in formdata or JSON');
    }

    if (req.headers['content-type'] == 'application/json') {
        let comment = '';

        req.on('data', (chunk) => {
            comment += chunk;
        });

        req.on('end', () => {
            let message = null;
            try {
                comment = JSON.parse(comment);
                res.statusCode = 201;
                const id = _COMMENTS.length + 1;
                _COMMENTS.push({
                    id,
                    name: comment.name,
                    comment: comment.comment,
                });
                res.write(JSON.stringify(_COMMENTS));
            } catch (error) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'text/plain');
                message = 'Bad input data. Data must be in JSON format.';
            }
            res.end(message);
        });
    } else {
        let comment = '';
        req.on('data', (chunk) => {
            comment += chunk.toString();
        });
        req.on('end', () => {
            let message = null;
            try {
                comment = qs.parse(comment);
                console.log(comment);
                const id = _COMMENTS.length + 1;
                _COMMENTS.push({
                    id,
                    name: comment.name,
                    comment: comment.comment,
                });
                res.write(JSON.stringify(_COMMENTS));
            } catch (error) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'text/plain');
                message = 'Bad input data. Data must be in JSON format.';
            }
            res.end(message);
        });
    }
};

export { get_home, get_comments, request_not_found, add_comment };
