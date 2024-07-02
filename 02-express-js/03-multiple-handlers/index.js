import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = new express();
const port = process.env.APP_PORT || 3000;

//! Multiple handlers
// const handler1 = (req, res, next) => {
//     console.log('Handler 1');
//     next();
// };

// const handler2 = (req, res, next) => {
//     console.log('Handler 2');
//     next();
// };

// const handler3 = (req, res) => {
//     console.log('Handler 3');
//     res.send('Hello from Express JS');
// };

// app.get('/', handler1, handler2, handler3);

//**************************************

//! Multiple routes
// const get_comments_handler = (req, res) => {
//     res.send('Get comments');
// };

// const post_comments_handler = (req, res) => {
//     res.send('Post comments');
// };

// app.get('/comments', get_comments_handler);
// app.post('/comments', post_comments_handler);

//**************************************

//! Route parameters
// app.get('/users/:id', (req, res) => {
//     res.send(`User ID: ${req.params.id}`);
// });

// app.get('/users/:id/:post_id', (req, res) => {
//     res.send(`User ID: ${req.params.id} and Post ID: ${req.params.post_id}`);
// });

//**************************************

//! Methods chains
app.route('/users')
    .get((req, res) => {
        res.send('Get users');
    })
    .post((req, res) => {
        res.send('Post users');
    });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
