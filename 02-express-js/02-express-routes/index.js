import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = new express();
const port = process.env.APP_PORT || 3000;

// Define a route for GET method
app.get('/', (req, res) => {
    console.log(req);
    res.send('Hello from Express JS');
});

// Define a route for POST method
app.post('/', (req, res) => {
    res.send('POST request to the homepage');
});

// Define a route for PUT method
app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user');
});

// Define a route for DELETE method
app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
