import http from 'http';
import {
    get_home,
    get_comments,
    request_not_found,
    add_comment,
} from './handlers.mjs';

const _PORT = 5000;

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        return get_home(req, res);
    }

    if (req.url === '/comments' && req.method === 'GET') {
        return get_comments(req, res);
    }

    if (req.url === '/comments' && req.method === 'POST') {
        return add_comment(req, res);
    }

    return request_not_found(req, res);
});

server.listen(_PORT, () => {
    console.log(`Server running at http://localhost:${_PORT}`);
});
